import { useEffect } from 'react';
// import { create } from 'zustand';

export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}


/* export const useDocumentTitleStore = create(set => (
  {
    documentTitle: document.title,
    changeDocumentTitle: (newDocumentTitle) => set({ documenTitle: newDocumentTitle })
  }
)) */