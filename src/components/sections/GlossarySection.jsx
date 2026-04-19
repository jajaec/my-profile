import React, { useState, useMemo } from 'react';
import { Search, ExternalLink, Filter } from 'lucide-react';
import './GlossarySection.css';

const GlossarySection = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('All');
  const [selectedImportance, setSelectedImportance] = useState('All');
  const [filterMemorized, setFilterMemorized] = useState('All'); // 'All', 'True', 'False'

  // 도메인과 중요도 목록 추출
  const domains = useMemo(() => {
    if (!data) return [];
    const uniqueDomains = new Set(data.map(item => item.domain).filter(Boolean));
    return ['All', ...Array.from(uniqueDomains)];
  }, [data]);

  const importances = useMemo(() => {
    if (!data) return [];
    const uniqueImportances = new Set(data.map(item => item.importance).filter(Boolean));
    return ['All', ...Array.from(uniqueImportances)];
  }, [data]);

  // 필터링 및 정렬 적용 로직
  const filteredData = useMemo(() => {
    if (!data) return [];
    
    const filtered = data.filter((item) => {
      // 1. 텍스트 검색 (용어, 약어, 설명에서)
      const keyword = searchTerm.toLowerCase();
      const matchesSearch = 
        (item.term || '').toLowerCase().includes(keyword) ||
        (item.abbr || '').toLowerCase().includes(keyword) ||
        (item.description || '').toLowerCase().includes(keyword);

      // 2. 분야, 중요도, 암기여부 필터
      const matchesDomain = selectedDomain === 'All' || item.domain === selectedDomain;
      const matchesImportance = selectedImportance === 'All' || item.importance === selectedImportance;
      
      let matchesMemorized = true;
      if (filterMemorized === 'True') matchesMemorized = item.memorized === true;
      if (filterMemorized === 'False') matchesMemorized = item.memorized === false;

      return matchesSearch && matchesDomain && matchesImportance && matchesMemorized;
    });

    // 필터링 결과를 분야(ASC) -> 용어(ASC) 순으로 정렬
    return filtered.sort((a, b) => {
      const domainA = String(a.domain || '').toLowerCase();
      const domainB = String(b.domain || '').toLowerCase();
      if (domainA < domainB) return -1;
      if (domainA > domainB) return 1;

      const termA = String(a.term || '').toLowerCase();
      const termB = String(b.term || '').toLowerCase();
      if (termA < termB) return -1;
      if (termA > termB) return 1;

      return 0;
    });
  }, [data, searchTerm, selectedDomain, selectedImportance, filterMemorized]);

  if (!data || data.length === 0) {
    return (
      <section className="section glossary-section">
        <div className="section-header">
          <h2>용어집 (Glossary)</h2>
        </div>
        <div className="empty-state">용어집 데이터가 없습니다.</div>
      </section>
    );
  }

  return (
    <section className="section glossary-section">
      <div className="section-header">
        <h2>용어집 (Glossary)</h2>
        <p className="section-description">
          IT 분야 및 업계 관련 용어, 약어 등을 정리한 공간입니다.
        </p>
      </div>

      {/* 필터 및 검색 바 */}
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
            <select 
              value={selectedDomain} 
              onChange={(e) => setSelectedDomain(e.target.value)}
              className="filter-select"
            >
              {domains.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>
          
          <div className="filter-item">
            <label><Filter size={14} /> 중요도</label>
            <select 
              value={selectedImportance} 
              onChange={(e) => setSelectedImportance(e.target.value)}
              className="filter-select"
            >
              {importances.map(imp => <option key={imp} value={imp}>{imp}</option>)}
            </select>
          </div>

          <div className="filter-item">
            <label><Filter size={14} /> 암기 여부</label>
            <select 
              value={filterMemorized} 
              onChange={(e) => setFilterMemorized(e.target.value)}
              className="filter-select"
            >
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

      {/* 테이블 영역 */}
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
                  <td className="col-memorized">
                    {item.memorized ? 'Y' : 'N'}
                  </td>
                  <td className="col-url">
                    {item.url && item.url !== '[URL]' && (
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="link-button" title="참고 링크 열기">
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="no-results">조건에 맞는 용어가 없습니다.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default GlossarySection;
