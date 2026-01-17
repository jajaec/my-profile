import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Brain, 
  Code2, 
  Palette, 
  Zap, 
  GraduationCap, 
  Newspaper,
  ChevronDown,
  ChevronRight,
  Globe,
  Database,
  Server,
  Cloud,
  Wrench,
  Terminal,
  Smartphone,
  Monitor,
  Cpu,
  Layers,
  Box,
  Settings,
  Shield,
  Lock,
  Key,
  Search,
  Bookmark,
  BookOpen,
  FileText,
  Folder,
  Image,
  Video,
  Music,
  Camera,
  Mic,
  Play,
  Star,
  Heart,
  ThumbsUp,
  MessageSquare,
  Mail,
  Bell,
  Calendar,
  Clock,
  MapPin,
  Home,
  Building,
  Users,
  Briefcase,
  ShoppingCart,
  CreditCard,
  DollarSign,
  TrendingUp,
  BarChart3,
  PieChart,
  Activity,
  Target,
  Award,
  Gift,
  Package,
  Truck,
  Coffee,
  Lightbulb,
  Rocket,
  Flame,
  Wifi,
  Download,
  Upload,
  Link,
  Share2,
  Send,
  RefreshCw,
  Grid,
  List,
  Edit,
  Trash2,
  Copy,
  Clipboard,
  Check,
  X,
  Plus,
  AlertCircle,
  Info,
  HelpCircle,
  Sparkles,
  QrCode,
  Printer,
  Gamepad2,
} from 'lucide-react';
import { useState } from 'react';

// Bookmarks 카테고리 아이콘 매핑
const iconMap = {
  // 기본
  Brain,
  Code2,
  Palette,
  Zap,
  GraduationCap,
  Newspaper,
  Globe,
  // 개발/기술
  Database,
  Server,
  Cloud,
  Wrench,
  Terminal,
  Smartphone,
  Monitor,
  Cpu,
  Layers,
  Box,
  Settings,
  Shield,
  Lock,
  Key,
  Search,
  // 학습/문서
  Bookmark,
  BookOpen,
  FileText,
  Folder,
  // 미디어
  Image,
  Video,
  Music,
  Camera,
  Mic,
  Play,
  // 소셜
  Star,
  Heart,
  ThumbsUp,
  MessageSquare,
  Mail,
  Bell,
  Share2,
  Send,
  // 시간/장소
  Calendar,
  Clock,
  MapPin,
  Home,
  Building,
  // 비즈니스
  Users,
  Briefcase,
  ShoppingCart,
  CreditCard,
  DollarSign,
  TrendingUp,
  BarChart3,
  PieChart,
  Activity,
  Target,
  Award,
  Gift,
  Package,
  Truck,
  // 아이디어
  Lightbulb,
  Rocket,
  Flame,
  Sparkles,
  // 기타
  Coffee,
  Wifi,
  Download,
  Upload,
  Link,
  RefreshCw,
  Grid,
  List,
  Edit,
  Trash2,
  Copy,
  Clipboard,
  Check,
  X,
  Plus,
  AlertCircle,
  Info,
  HelpCircle,
  QrCode,
  Printer,
  Gamepad2,
};

const BookmarksSection = ({ data }) => {
  const [expandedCategories, setExpandedCategories] = useState(
    // 기본적으로 모든 카테고리 펼침
    data.categories?.reduce((acc, cat) => ({ ...acc, [cat.name]: true }), {}) || {}
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const toggleCategory = (categoryName) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }));
  };

  const handleOpenLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.section
      className="section bookmarks-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 className="section-title" variants={itemVariants}>
        <span className="title-icon">🔖</span>
        {data.title}
      </motion.h2>

      <motion.p className="section-description" variants={itemVariants}>
        {data.description}
      </motion.p>

      <motion.div className="categories-container" variants={containerVariants}>
        {data.categories?.map((category, catIdx) => {
          const IconComponent = iconMap[category.icon] || Globe;
          const isExpanded = expandedCategories[category.name];
          
          return (
            <motion.div
              key={catIdx}
              className="category-block"
              variants={itemVariants}
            >
              <button
                className="category-header"
                onClick={() => toggleCategory(category.name)}
                style={{ '--category-color': category.color }}
              >
                <div className="category-icon" style={{ background: category.color }}>
                  <IconComponent size={20} />
                </div>
                <span className="category-name">{category.name}</span>
                <span className="category-count">{category.items?.length || 0}</span>
                <div className="category-toggle">
                  {isExpanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                </div>
              </button>

              <motion.div
                className="category-items"
                initial={false}
                animate={{
                  height: isExpanded ? 'auto' : 0,
                  opacity: isExpanded ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                {category.items?.map((item, itemIdx) => (
                  <motion.div
                    key={itemIdx}
                    className="bookmark-item"
                    whileHover={{ x: 4 }}
                    onClick={() => handleOpenLink(item.url)}
                  >
                    <div className="bookmark-info">
                      <h4 className="bookmark-title">{item.title}</h4>
                      <p className="bookmark-description">{item.description}</p>
                    </div>
                    <div className="bookmark-action">
                      <ExternalLink size={14} />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      <style>{`
        .bookmarks-section {
          max-width: 1200px;
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 12px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-light);
        }

        .title-icon {
          font-size: 1.5rem;
        }

        .section-description {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-bottom: 24px;
        }

        .categories-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .category-block {
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          border-radius: 12px;
          overflow: hidden;
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          padding: 16px 20px;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: left;
        }

        .category-header:hover {
          background: var(--bg-tertiary);
        }

        .category-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          color: white;
          flex-shrink: 0;
        }

        .category-name {
          flex: 1;
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .category-count {
          padding: 4px 10px;
          background: var(--bg-tertiary);
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .category-toggle {
          color: var(--text-tertiary);
          transition: transform 0.2s ease;
        }

        .category-items {
          overflow: hidden;
          border-top: 1px solid var(--border-light);
        }

        .bookmark-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 20px 12px 72px;
          cursor: pointer;
          transition: all 0.15s ease;
          border-bottom: 1px solid var(--border-light);
        }

        .bookmark-item:last-child {
          border-bottom: none;
        }

        .bookmark-item:hover {
          background: var(--bg-tertiary);
        }

        .bookmark-item:hover .bookmark-action {
          opacity: 1;
          color: var(--accent-blue);
        }

        .bookmark-info {
          flex: 1;
          min-width: 0;
        }

        .bookmark-title {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 2px;
        }

        .bookmark-description {
          font-size: 0.8rem;
          color: var(--text-tertiary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .bookmark-action {
          color: var(--text-tertiary);
          opacity: 0;
          transition: all 0.15s ease;
          flex-shrink: 0;
        }

        @media (max-width: 900px) {
          .categories-container {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .bookmark-item {
            padding-left: 20px;
          }

          .category-icon {
            width: 36px;
            height: 36px;
          }
        }
      `}</style>
    </motion.section>
  );
};

export default BookmarksSection;
