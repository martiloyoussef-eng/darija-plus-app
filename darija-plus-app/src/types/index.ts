// User and Auth types
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  learningGoal: 'travel' | 'family' | 'business' | 'culture';
  level: 'beginner' | 'intermediate' | 'advanced';
  createdAt: string;
}

// Tutor types
export interface Tutor {
  id: string;
  name: string;
  avatar: string;
  specialty: string;
  dialect: string;
  rating: number;
  reviewCount: number;
  pricePerHour: number;
  availability: string[];
  bio: string;
  verified: boolean;
  online: boolean;
}

// Lesson and Session types
export interface Session {
  id: string;
  tutorId: string;
  userId: string;
  startTime: string;
  duration: number;
  price: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  feedback?: string;
}

// Pronunciation types
export interface PronunciationResult {
  score: number; // 0-100
  feedback: string;
  phonemeAnalysis: {
    phoneme: string;
    accuracy: number;
    suggestion?: string;
  }[];
  audioUrl: string;
  recordedAt: string;
}

// Video Reel types
export interface VideoReel {
  id: string;
  tutorId: string;
  title: string;
  description: string;
  videoUrl: string;
  phrase: {
    arabic: string;
    latinized: string;
    english: string;
  };
  dialect: string;
  duration: number;
  likes: number;
  views: number;
  createdAt: string;
}

// Leaderboard types
export interface LeaderboardEntry {
  rank: number;
  userId: string;
  userName: string;
  userAvatar: string;
  xp: number;
  level: number;
  streak: number;
}

// Booking types
export interface BookingRequest {
  tutorId: string;
  userId: string;
  preferredDates: string[];
  topic: string;
  level: string;
  message: string;
}

// Testimonial types
export interface Testimonial {
  id: string;
  authorName: string;
  authorCountry: string;
  authorAvatar: string;
  rating: number;
  text: string;
  createdAt: string;
}

// Feature types
export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

// Language types
export interface Language {
  id: string;
  name: string;
  arabicName: string;
  flag: string;
  description: string;
  dialects: string[];
}

// Notification types
export interface Notification {
  id: string;
  type: 'booking' | 'reminder' | 'achievement' | 'message';
  title: string;
  message: string;
  data?: Record<string, any>;
  read: boolean;
  createdAt: string;
}
