/**
 * Google Sheets 데이터를 가져오는 커스텀 훅
 */

import { useState, useEffect } from 'react';
import { SHEET_NAMES } from '../config/sheets';
import {
  fetchSheetData,
  transformProfile,
  transformAbout,
  transformTechStack,
  transformExperience,
  transformProjects,
  transformEducation,
  transformCertifications,
  transformBookmarks,
  transformLiveDemo,
  transformInternalTools,
  transformResources,
} from '../utils/googleSheets';

/**
 * 모든 시트 데이터를 가져오는 훅
 */
export function useAllSheetData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadAllData() {
      try {
        setLoading(true);
        
        // 모든 시트 데이터 병렬로 가져오기
        const [
          profileRaw,
          aboutRaw,
          techStackRaw,
          experienceRaw,
          projectsRaw,
          educationRaw,
          certificationsRaw,
          bookmarksRaw,
          liveDemoRaw,
          internalToolsRaw,
          resourcesRaw,
        ] = await Promise.all([
          fetchSheetData(SHEET_NAMES.PROFILE),
          fetchSheetData(SHEET_NAMES.ABOUT),
          fetchSheetData(SHEET_NAMES.TECH_STACK),
          fetchSheetData(SHEET_NAMES.EXPERIENCE),
          fetchSheetData(SHEET_NAMES.PROJECTS),
          fetchSheetData(SHEET_NAMES.EDUCATION),
          fetchSheetData(SHEET_NAMES.CERTIFICATIONS),
          fetchSheetData(SHEET_NAMES.BOOKMARKS),
          fetchSheetData(SHEET_NAMES.LIVE_DEMO),
          fetchSheetData(SHEET_NAMES.INTERNAL_TOOLS),
          fetchSheetData(SHEET_NAMES.RESOURCES),
        ]);

        // 변환된 데이터
        const liveDemoTransformed = transformLiveDemo(liveDemoRaw);
        const internalToolsTransformed = transformInternalTools(internalToolsRaw);

        setData({
          profile: transformProfile(profileRaw),
          about: transformAbout(aboutRaw),
          techStack: transformTechStack(techStackRaw),
          education: transformEducation(educationRaw),
          certifications: transformCertifications(certificationsRaw),
          experience: transformExperience(experienceRaw),
          projects: transformProjects(projectsRaw),
          liveDemo: {
            ...liveDemoTransformed,
            internalTools: internalToolsTransformed,
          },
          bookmarks: transformBookmarks(bookmarksRaw),
          resources: transformResources(resourcesRaw),
        });
        
        setError(null);
      } catch (err) {
        console.error('Failed to load sheet data:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadAllData();
  }, []);

  return { data, loading, error, refetch: () => window.location.reload() };
}
