import React, { useState, useMemo, useEffect } from 'react';
import { Search, ExternalLink, Filter, Plus, Pencil, X, Loader2, AlertCircle } from 'lucide-react';
import { addGlossaryTerm, updateGlossaryTerm } from '../../utils/glossaryApi';
import './GlossarySection.css';

const EMPTY_FORM = {
  domain: '',
  term: '',
  abbr: '',
  description: '',
  importance: '',
  memorized: false,
  url: '',
};

function GlossaryFormModal({ isOpen, onClose, onSubmit, initialData, domains, importances, isSubmitting, error }) {
  const [form, setForm] = useState(EMPTY_FORM);

  useEffect(() => {
    if (isOpen) {
      setForm(initialData ? { ...initialData } : EMPTY_FORM);
    }
  }, [isOpen, initialData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  if (!isOpen) return null;

  const isEdit = !!initialData;

  return (
    <div className="glossary-modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="glossary-modal" role="dialog" aria-modal="true">
        <div className="glossary-modal-header">
          <h3>{isEdit ? '용어 수정' : '용어 등록'}</h3>
          <button className="modal-close-btn" onClick={onClose} aria-label="닫기">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="glossary-form">
          <div className="form-grid">
            <div className="form-field">
              <label htmlFor="gf-domain">분야 <span className="required">*</span></label>
              <input
                id="gf-domain"
                type="text"
                name="domain"
                value={form.domain}
                onChange={handleChange}
                list="gf-domain-list"
                required
                placeholder="예: IT, 마케팅..."
              />
              <datalist id="gf-domain-list">
                {domains.filter(d => d !== 'All').map(d => <option key={d} value={d} />)}
              </datalist>
            </div>

            <div className="form-field">
              <label htmlFor="gf-term">용어 <span className="required">*</span></label>
              <input
                id="gf-term"
                type="text"
                name="term"
                value={form.term}
                onChange={handleChange}
                required
                placeholder="용어명"
              />
            </div>

            <div className="form-field">
              <label htmlFor="gf-abbr">약어/원문</label>
              <input
                id="gf-abbr"
                type="text"
                name="abbr"
                value={form.abbr}
                onChange={handleChange}
                placeholder="약어 또는 영문명"
              />
            </div>

            <div className="form-field">
              <label htmlFor="gf-importance">중요도</label>
              <input
                id="gf-importance"
                type="text"
                name="importance"
                value={form.importance}
                onChange={handleChange}
                list="gf-importance-list"
                placeholder="예: 높음, 중간, 낮음"
              />
              <datalist id="gf-importance-list">
                {[
                  ...importances.filter(i => i !== 'All'),
                  ...['★★★★★', '★★☆☆☆', '★☆☆☆☆'].filter(v => !importances.includes(v)),
                ].map(i => <option key={i} value={i} />)}
              </datalist>
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="gf-desc">설명</label>
            <textarea
              id="gf-desc"
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={3}
              placeholder="용어에 대한 설명을 입력하세요"
            />
          </div>

          <div className="form-field">
            <label htmlFor="gf-url">참고 URL</label>
            <input
              id="gf-url"
              type="text"
              name="url"
              value={form.url}
              onChange={handleChange}
              placeholder="https://..."
            />
          </div>

          <label className="checkbox-label">
            <input
              type="checkbox"
              name="memorized"
              checked={form.memorized}
              onChange={handleChange}
            />
            암기 완료
          </label>

          {error && (
            <div className="form-error">
              <AlertCircle size={16} />
              <span>{error}</span>
            </div>
          )}

          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={onClose} disabled={isSubmitting}>
              취소
            </button>
            <button type="submit" className="btn-submit" disabled={isSubmitting}>
              {isSubmitting && <Loader2 size={16} className="icon-spin" />}
              {isSubmitting ? '저장 중...' : isEdit ? '수정 완료' : '등록'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const GlossarySection = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('All');
  const [selectedImportance, setSelectedImportance] = useState('All');
  const [filterMemorized, setFilterMemorized] = useState('All');

  const [localTerms, setLocalTerms] = useState([]);
  const [formOpen, setFormOpen] = useState(false);
  const [editingTerm, setEditingTerm] = useState(null);
  const [originalTermName, setOriginalTermName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState(null);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (data) setLocalTerms(data);
  }, [data]);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const domains = useMemo(() => {
    const unique = new Set(localTerms.map(i => i.domain).filter(Boolean));
    return ['All', ...Array.from(unique)];
  }, [localTerms]);

  const importances = useMemo(() => {
    const unique = new Set(localTerms.map(i => i.importance).filter(Boolean));
    ['★★★★★', '★★☆☆☆', '★☆☆☆☆'].forEach(v => unique.add(v));
    return ['All', ...Array.from(unique)];
  }, [localTerms]);

  const filteredData = useMemo(() => {
    const filtered = localTerms.filter((item) => {
      const keyword = searchTerm.toLowerCase();
      const matchesSearch =
        (item.term || '').toLowerCase().includes(keyword) ||
        (item.abbr || '').toLowerCase().includes(keyword) ||
        (item.description || '').toLowerCase().includes(keyword);
      const matchesDomain = selectedDomain === 'All' || item.domain === selectedDomain;
      const matchesImportance = selectedImportance === 'All' || item.importance === selectedImportance;
      let matchesMemorized = true;
      if (filterMemorized === 'True') matchesMemorized = item.memorized === true;
      if (filterMemorized === 'False') matchesMemorized = item.memorized === false;
      return matchesSearch && matchesDomain && matchesImportance && matchesMemorized;
    });

    return filtered.sort((a, b) => {
      const da = String(a.domain || '').toLowerCase();
      const db = String(b.domain || '').toLowerCase();
      if (da < db) return -1;
      if (da > db) return 1;
      const ta = String(a.term || '').toLowerCase();
      const tb = String(b.term || '').toLowerCase();
      if (ta < tb) return -1;
      if (ta > tb) return 1;
      return 0;
    });
  }, [localTerms, searchTerm, selectedDomain, selectedImportance, filterMemorized]);

  const handleAddClick = () => {
    setEditingTerm(null);
    setOriginalTermName('');
    setFormError(null);
    setFormOpen(true);
  };

  const handleEditClick = (term) => {
    setEditingTerm({ ...term });
    setOriginalTermName(term.term);
    setFormError(null);
    setFormOpen(true);
  };

  const handleFormSubmit = async (formData) => {
    setIsSubmitting(true);
    setFormError(null);
    try {
      if (editingTerm) {
        await updateGlossaryTerm(originalTermName, formData);
        setLocalTerms(prev => prev.map(t => t.term === originalTermName ? { ...formData } : t));
        showToast('용어가 수정되었습니다.');
      } else {
        await addGlossaryTerm(formData);
        setLocalTerms(prev => [...prev, formData]);
        showToast('용어가 등록되었습니다.');
      }
      setFormOpen(false);
    } catch (err) {
      setFormError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!data || data.length === 0) {
    return (
      <section className="section glossary-section">
        <div className="section-header">
          <h2>용어집 (Glossary)</h2>
          <button className="btn-add-term" onClick={handleAddClick}>
            <Plus size={16} /> 용어 등록
          </button>
        </div>
        <div className="empty-state">용어집 데이터가 없습니다.</div>
        <GlossaryFormModal
          isOpen={formOpen}
          onClose={() => setFormOpen(false)}
          onSubmit={handleFormSubmit}
          initialData={editingTerm}
          domains={[]}
          importances={[]}
          isSubmitting={isSubmitting}
          error={formError}
        />
      </section>
    );
  }

  return (
    <section className="section glossary-section">
      <div className="section-header glossary-section-header">
        <div>
          <h2>용어집 (Glossary)</h2>
          <p className="section-description">IT 분야 및 업계 관련 용어, 약어 등을 정리한 공간입니다.</p>
        </div>
        <button className="btn-add-term" onClick={handleAddClick}>
          <Plus size={16} /> 용어 등록
        </button>
      </div>

      <div className="glossary-controls">
        <div className="search-bar">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="용어, 약어, 설명 검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="filter-group">
          <div className="filter-item">
            <label><Filter size={14} /> 분야</label>
            <select value={selectedDomain} onChange={(e) => setSelectedDomain(e.target.value)} className="filter-select">
              {domains.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>

          <div className="filter-item">
            <label><Filter size={14} /> 중요도</label>
            <select value={selectedImportance} onChange={(e) => setSelectedImportance(e.target.value)} className="filter-select">
              {importances.map(imp => <option key={imp} value={imp}>{imp}</option>)}
            </select>
          </div>

          <div className="filter-item">
            <label><Filter size={14} /> 암기 여부</label>
            <select value={filterMemorized} onChange={(e) => setFilterMemorized(e.target.value)} className="filter-select">
              <option value="All">전체</option>
              <option value="True">Y</option>
              <option value="False">N</option>
            </select>
          </div>
        </div>
      </div>

      <div className="glossary-summary">
        총 <strong>{filteredData.length}</strong>개의 용어가 있습니다. {searchTerm && '(검색 결과)'}
      </div>

      <div className="glossary-table-wrapper">
        <table className="glossary-table">
          <thead>
            <tr>
              <th>분야</th>
              <th>용어</th>
              <th>약어/원문</th>
              <th>설명</th>
              <th>중요도</th>
              <th>암기</th>
              <th>참고</th>
              <th className="col-edit-header"></th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item, idx) => (
                <tr key={idx} className={item.memorized ? 'memorized-row' : ''}>
                  <td className="col-domain"><span className="domain-badge">{item.domain}</span></td>
                  <td className="col-term">{item.term}</td>
                  <td className="col-abbr">{item.abbr}</td>
                  <td className="col-desc">{item.description}</td>
                  <td className="col-importance">{item.importance}</td>
                  <td className="col-memorized">{item.memorized ? 'Y' : 'N'}</td>
                  <td className="col-url">
                    {item.url && item.url !== '[URL]' && (
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="link-button" title="참고 링크 열기">
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </td>
                  <td className="col-edit">
                    <button className="edit-btn" onClick={() => handleEditClick(item)} title="수정">
                      <Pencil size={14} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="no-results">조건에 맞는 용어가 없습니다.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* 모바일 카드에 수정 버튼 - 테이블이 모바일에서 카드 형태로 전환될 때 표시 */}

      <GlossaryFormModal
        isOpen={formOpen}
        onClose={() => !isSubmitting && setFormOpen(false)}
        onSubmit={handleFormSubmit}
        initialData={editingTerm}
        domains={domains}
        importances={importances}
        isSubmitting={isSubmitting}
        error={formError}
      />

      {toast && <div className="glossary-toast">{toast}</div>}
    </section>
  );
};

export default GlossarySection;
