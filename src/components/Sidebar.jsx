import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User,
  Code2,
  Briefcase,
  FolderGit2,
  GraduationCap,
  Award,
  Github,
  Linkedin,
  Mail,
  Globe,
  Sun,
  Moon,
  Menu,
  X,
  ChevronRight,
  Rocket,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { getDriveUrl } from '../utils/helpers';

const menuItems = [
  { id: 'about', label: 'About', icon: User },
  { id: 'techStack', label: 'Tech Stack', icon: Code2 },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'webApps', label: 'Live Demo1', icon: Rocket },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'certifications', label: 'Certifications', icon: Award },
];

const Sidebar = ({ profile, activeSection, onSectionChange }) => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const profileImageSrc = profile.drivePhotoId 
    ? getDriveUrl(profile.drivePhotoId, 'image')
    : profile.profileImage;

  const SidebarContent = () => (
    <>
      {/* Profile Section */}
      <div className="sidebar-profile">
        <div className="profile-image-wrapper">
          <img
            src={profileImageSrc}
            alt={profile.name}
            className="profile-image"
          />
        </div>
        <h1 className="profile-name">{profile.name}</h1>
        <p className="profile-role">{profile.role}</p>
        <p className="profile-location">{profile.location}</p>
      </div>

      {/* Social Links */}
      <div className="social-links">
        {profile.social?.github && (
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
        )}
        {profile.social?.linkedin && (
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        )}
        {profile.social?.blog && (
          <a
            href={profile.social.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Blog"
          >
            <Globe size={18} />
          </a>
        )}
        {profile.social?.email && (
          <a
            href={`mailto:${profile.social.email}`}
            className="social-link"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        )}
      </div>

      {/* Navigation Menu */}
      <nav className="sidebar-nav">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => {
                onSectionChange(item.id);
                setIsMobileOpen(false);
              }}
              className={`nav-item ${isActive ? 'active' : ''}`}
            >
              <Icon size={18} />
              <span>{item.label}</span>
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="active-indicator"
                />
              )}
            </button>
          );
        })}
      </nav>

      {/* Theme Toggle */}
      <div className="sidebar-footer">
        <button
          onClick={toggleTheme}
          className="theme-toggle"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="mobile-menu-btn"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        aria-label="Toggle menu"
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Sidebar */}
      <aside className="sidebar desktop-sidebar">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mobile-overlay"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="sidebar mobile-sidebar"
            >
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <style>{`
        .mobile-menu-btn {
          display: none;
          position: fixed;
          top: 16px;
          left: 16px;
          z-index: 60;
          padding: 8px;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          cursor: pointer;
          color: var(--text-primary);
          box-shadow: var(--shadow-md);
        }

        .sidebar {
          width: 260px;
          height: 100vh;
          background: var(--bg-sidebar);
          border-right: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          padding: 24px 16px;
          position: fixed;
          top: 0;
          left: 0;
          overflow-y: auto;
          z-index: 50;
        }

        .mobile-sidebar {
          display: none;
        }

        .mobile-overlay {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 40;
        }

        .sidebar-profile {
          text-align: center;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--border-light);
          margin-bottom: 20px;
        }

        .profile-image-wrapper {
          width: 100px;
          height: 100px;
          margin: 0 auto 16px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid var(--border-color);
          box-shadow: var(--shadow-md);
        }

        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .profile-name {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .profile-role {
          font-size: 0.875rem;
          color: var(--accent-blue);
          font-weight: 500;
          margin-bottom: 4px;
        }

        .profile-location {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 8px;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--border-light);
          margin-bottom: 20px;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: var(--bg-tertiary);
          color: var(--text-secondary);
          transition: all 0.2s ease;
        }

        .social-link:hover {
          background: var(--accent-blue);
          color: white;
          transform: translateY(-2px);
        }

        .sidebar-nav {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 12px;
          border-radius: 6px;
          border: none;
          background: transparent;
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.15s ease;
          position: relative;
          text-align: left;
          width: 100%;
        }

        .nav-item:hover {
          background: var(--bg-hover);
          color: var(--text-primary);
        }

        .nav-item.active {
          background: var(--bg-tertiary);
          color: var(--text-primary);
        }

        .active-indicator {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 20px;
          background: var(--accent-blue);
          border-radius: 0 3px 3px 0;
        }

        .sidebar-footer {
          padding-top: 16px;
          border-top: 1px solid var(--border-light);
          margin-top: auto;
        }

        .theme-toggle {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          padding: 10px 12px;
          border-radius: 6px;
          border: none;
          background: var(--bg-tertiary);
          color: var(--text-secondary);
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .theme-toggle:hover {
          background: var(--bg-hover);
          color: var(--text-primary);
        }

        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: flex;
          }

          .desktop-sidebar {
            display: none;
          }

          .mobile-sidebar {
            display: flex;
          }

          .mobile-overlay {
            display: block;
          }
        }
      `}</style>
    </>
  );
};

export default Sidebar;
