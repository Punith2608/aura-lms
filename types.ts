export enum Role {
    Student = 'student',
    Teacher = 'teacher',
}

export interface User {
    id: string;
    name: string;
    email: string;
    role: Role;
}

export type FileType = 'pdf' | 'ppt' | 'doc' | 'other';

export interface CourseMaterial {
    id: string;
    courseId: string;
    name: string;
    fileUrl: string; // Mock URL for download
    fileType: FileType;
}

export interface Course {
    id: string;
    title: string;
    description: string;
    teacherId: string;
    studentIds: string[];
    duration: string;
    materials?: CourseMaterial[];
}

export interface Assignment {
    id: string;
    courseId: string;
    title: string;
    dueDate: Date;
}

export interface Submission {
    id: string;
    assignmentId: string;
    studentId: string;
    submittedAt: Date;
    grade?: number;
    feedback?: string;
}

export interface Notification {
    id: string;
    userId: string;
    message: string;
    read: boolean;
    createdAt: Date;
}

export type AttendanceStatus = 'present' | 'absent';

export interface Attendance {
    id: string;
    studentId: string;
    date: string;
    status: AttendanceStatus;
}

export interface ForumPost {
    id: string;
    authorId: string;
    content: string;
    createdAt: Date;
    replies: ForumPost[];
}

export interface TimetableEntry {
    day: string;
    time: string; // e.g., "09:00 - 10:30"
    courseId: string;
    courseTitle: string;
}

export interface Announcement {
    id: string;
    courseId: string;
    title: string;
    content: string;
    date: string;
}
