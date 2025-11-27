import { create } from 'zustand';

export const useSidebarStore = create<{
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  toggleSidebarOpen: () => void;
}>((set) => ({
  sidebarOpen: false,
  setSidebarOpen: (open: boolean) => set({ sidebarOpen: open }),
  toggleSidebarOpen: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
}));

export const useResponsiveStore = create<{
  width: number;
  isMobile: boolean;
  isDesktop: boolean;
  setWidth: (width: number) => void;
}>((set) => ({
  width: 0,
  isMobile: false,
  isDesktop: false,
  setWidth: (width: number) => set(() => ({ width, isMobile: width < 768, isDesktop: width >= 768 })),
}));
