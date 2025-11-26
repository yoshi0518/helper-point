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
