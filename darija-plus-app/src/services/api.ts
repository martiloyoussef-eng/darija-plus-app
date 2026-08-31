import axios, { AxiosInstance } from 'axios';
import {
  User,
  Tutor,
  Session,
  BookingRequest,
  PronunciationResult,
  VideoReel,
  LeaderboardEntry,
  Testimonial,
} from '@types/index';

const API_URL = process.env.EXPO_PUBLIC_API_URL || 'https://api.darijaplus.com';

const apiClient: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// Add auth token to requests
apiClient.interceptors.request.use((config) => {
  // In a real app, get token from secure storage
  const token = localStorage?.getItem('auth_token') || '';
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth API
export const authAPI = {
  signup: (email: string, password: string, name: string) =>
    apiClient.post<{ user: User; token: string }>('/auth/signup', {
      email,
      password,
      name,
    }),
  login: (email: string, password: string) =>
    apiClient.post<{ user: User; token: string }>('/auth/login', {
      email,
      password,
    }),
  logout: () => apiClient.post('/auth/logout'),
  getProfile: () => apiClient.get<User>('/auth/profile'),
  updateProfile: (data: Partial<User>) =>
    apiClient.patch<User>('/auth/profile', data),
};

// Tutors API
export const tutorsAPI = {
  getAllTutors: (filters?: { dialect?: string; priceMax?: number }) =>
    apiClient.get<Tutor[]>('/tutors', { params: filters }),
  getTutorById: (id: string) => apiClient.get<Tutor>(`/tutors/${id}`),
  getTutorReviews: (id: string) =>
    apiClient.get<any[]>(`/tutors/${id}/reviews`),
  rateTutor: (id: string, rating: number, review: string) =>
    apiClient.post(`/tutors/${id}/reviews`, { rating, review }),
  searchTutors: (query: string) =>
    apiClient.get<Tutor[]>('/tutors/search', { params: { q: query } }),
};

// Sessions/Bookings API
export const sessionsAPI = {
  createBookingRequest: (data: BookingRequest) =>
    apiClient.post<Session>('/sessions/book', data),
  getUserSessions: () => apiClient.get<Session[]>('/sessions/my'),
  getSessionById: (id: string) => apiClient.get<Session>(`/sessions/${id}`),
  cancelSession: (id: string) =>
    apiClient.patch<Session>(`/sessions/${id}/cancel`),
  rescheduleSession: (id: string, newTime: string) =>
    apiClient.patch<Session>(`/sessions/${id}/reschedule`, { startTime: newTime }),
  submitFeedback: (id: string, feedback: string, rating: number) =>
    apiClient.patch(`/sessions/${id}/feedback`, { feedback, rating }),
};

// Pronunciation API
export const pronunciationAPI = {
  submitRecording: (audioData: FormData) =>
    apiClient.post<PronunciationResult>('/pronunciation/grade', audioData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }),
  getPronunciationHistory: () =>
    apiClient.get<PronunciationResult[]>('/pronunciation/history'),
};

// Video Reels API
export const reelsAPI = {
  getFeedReels: (page: number = 1, limit: number = 10) =>
    apiClient.get<{ reels: VideoReel[]; total: number }>('/reels/feed', {
      params: { page, limit },
    }),
  getReelById: (id: string) => apiClient.get<VideoReel>(`/reels/${id}`),
  likeReel: (id: string) => apiClient.post(`/reels/${id}/like`),
  unlikeReel: (id: string) => apiClient.delete(`/reels/${id}/like`),
  commentOnReel: (id: string, comment: string) =>
    apiClient.post(`/reels/${id}/comments`, { text: comment }),
};

// Leaderboard API
export const leaderboardAPI = {
  getGlobalLeaderboard: (limit: number = 50) =>
    apiClient.get<LeaderboardEntry[]>('/leaderboard/global', {
      params: { limit },
    }),
  getUserRank: () => apiClient.get<LeaderboardEntry>('/leaderboard/me'),
  getMonthlyLeaderboard: () =>
    apiClient.get<LeaderboardEntry[]>('/leaderboard/monthly'),
};

// Testimonials API
export const testimonialsAPI = {
  getTestimonials: () => apiClient.get<Testimonial[]>('/testimonials'),
  submitTestimonial: (data: Partial<Testimonial>) =>
    apiClient.post<Testimonial>('/testimonials', data),
};

// Languages API
export const languagesAPI = {
  getLanguages: () => apiClient.get('/languages'),
  getDialects: (languageId: string) =>
    apiClient.get(`/languages/${languageId}/dialects`),
};

// FAQ API
export const faqAPI = {
  getFAQ: () => apiClient.get('/faq'),
};

export default apiClient;
