import { create } from 'zustand';
import { User, Tutor, Session, Notification } from '@types/index';

interface AppStore {
  // User state
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  logout: () => void;

  // Tutors state
  tutors: Tutor[];
  selectedTutor: Tutor | null;
  setTutors: (tutors: Tutor[]) => void;
  setSelectedTutor: (tutor: Tutor | null) => void;

  // Sessions state
  sessions: Session[];
  addSession: (session: Session) => void;
  updateSession: (id: string, session: Partial<Session>) => void;

  // Notifications
  notifications: Notification[];
  addNotification: (notification: Notification) => void;
  removeNotification: (id: string) => void;

  // UI state
  isLoading: boolean;
  error: string | null;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useAppStore = create<AppStore>((set) => ({
  // User
  user: null,
  isAuthenticated: false,
  setUser: (user) =>
    set(() => ({
      user,
      isAuthenticated: !!user,
    })),
  logout: () =>
    set(() => ({
      user: null,
      isAuthenticated: false,
    })),

  // Tutors
  tutors: [],
  selectedTutor: null,
  setTutors: (tutors) => set({ tutors }),
  setSelectedTutor: (tutor) => set({ selectedTutor: tutor }),

  // Sessions
  sessions: [],
  addSession: (session) =>
    set((state) => ({
      sessions: [...state.sessions, session],
    })),
  updateSession: (id, updates) =>
    set((state) => ({
      sessions: state.sessions.map((s) =>
        s.id === id ? { ...s, ...updates } : s
      ),
    })),

  // Notifications
  notifications: [],
  addNotification: (notification) =>
    set((state) => ({
      notifications: [...state.notifications, notification],
    })),
  removeNotification: (id) =>
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
    })),

  // UI
  isLoading: false,
  error: null,
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
}));

export default useAppStore;
