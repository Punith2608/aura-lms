import { Role, User, Course, Assignment, Submission, Notification, Attendance, ForumPost, CourseMaterial, TimetableEntry, Announcement } from './types';

// USERS
export const MOCK_USERS: User[] = [
    { id: 'u1', name: 'Alice Smith', email: 'alice@edu.com', role: Role.Student },
    { id: 'u2', name: 'Bob Johnson', email: 'bob@edu.com', role: Role.Student },
    { id: 'u3', name: 'Charlie Brown', email: 'charlie@edu.com', role: Role.Student },
    { id: 'u4', name: 'Diana Prince', email: 'diana@edu.com', role: Role.Student },
    { id: 'u5', name: 'Ethan Hunt', email: 'ethan@edu.com', role: Role.Student },
    { id: 'u6', name: 'Fiona Glenanne', email: 'fiona@edu.com', role: Role.Student },
    { id: 'u7', name: 'George Costanza', email: 'george@edu.com', role: Role.Student },
    { id: 'u8', name: 'Hannah Montana', email: 'hannah@edu.com', role: Role.Student },
    { id: 'u9', name: 'Ian Malcolm', email: 'ian@edu.com', role: Role.Student },
    { id: 'u10', name: 'Jane Doe', email: 'jane@edu.com', role: Role.Student },
    { id: 'u11', name: 'Kramer', email: 'kramer@edu.com', role: Role.Student },
    { id: 't1', name: 'Robert Davis', email: 'robert@edu.com', role: Role.Teacher },
    { id: 't2', name: 'Susan White', email: 'susan@edu.com', role: Role.Teacher },
];

// COURSE MATERIALS
export const MOCK_COURSE_MATERIALS: CourseMaterial[] = [
    { id: 'cm1', courseId: 'c1', name: 'React Hooks Cheatsheet.pdf', fileUrl: '/materials/react-hooks.pdf', fileType: 'pdf' },
    { id: 'cm2', courseId: 'c1', name: 'Component Lifecycle Diagram.png', fileUrl: '/materials/lifecycle.png', fileType: 'other' },
    { id: 'cm3', courseId: 'c2', name: 'Flexbox vs Grid Slides.ppt', fileUrl: '/materials/flex-grid.ppt', fileType: 'ppt' },
];

// COURSES
export const MOCK_COURSES: Course[] = [
    {
        id: 'c1',
        title: 'Introduction to React',
        description: 'Learn the fundamentals of React, including components, state, props, and hooks. Build dynamic user interfaces with one of the most popular JavaScript libraries.',
        teacherId: 't1',
        studentIds: ['u1', 'u2', 'u4', 'u5', 'u8', 'u10'],
        duration: '8 Weeks',
        materials: MOCK_COURSE_MATERIALS.filter(m => m.courseId === 'c1'),
    },
    {
        id: 'c2',
        title: 'Advanced CSS',
        description: 'Master modern CSS techniques like Flexbox, Grid, and custom properties. Create complex and responsive layouts for professional web applications.',
        teacherId: 't1',
        studentIds: ['u2', 'u3', 'u6', 'u7', 'u9', 'u11'],
        duration: '6 Weeks',
        materials: MOCK_COURSE_MATERIALS.filter(m => m.courseId === 'c2'),
    },
    {
        id: 'c3',
        title: 'Data Structures in Python',
        description: 'Explore common data structures and algorithms using Python. Understand their performance characteristics and when to apply them in real-world scenarios.',
        teacherId: 't2',
        studentIds: ['u1', 'u3', 'u5', 'u7', 'u9'],
        duration: '10 Weeks'
    },
];

// ASSIGNMENTS
export const MOCK_ASSIGNMENTS: Assignment[] = [
    { id: 'a1', courseId: 'c1', title: 'React Component Essay', dueDate: new Date('2024-08-15') },
    { id: 'a2', courseId: 'c1', title: 'State Management Quiz', dueDate: new Date('2024-08-22') },
    { id: 'a3', courseId: 'c2', title: 'Flexbox Layout Challenge', dueDate: new Date('2024-08-20') },
    { id: 'a4', courseId: 'c3', title: 'Implement a Linked List', dueDate: new Date('2024-09-10') },
];

// SUBMISSIONS
export const MOCK_SUBMISSIONS: Submission[] = [
    { id: 's1', assignmentId: 'a1', studentId: 'u1', submittedAt: new Date('2024-08-14'), grade: 92, feedback: 'Great work on component composition!' },
    { id: 's2', assignmentId: 'a1', studentId: 'u2', submittedAt: new Date('2024-08-15') }, // Not graded yet
    { id: 's3', assignmentId: 'a3', studentId: 'u2', submittedAt: new Date('2024-08-19'), grade: 88, feedback: 'Solid use of Flexbox properties.' },
    { id: 's6', assignmentId: 'a3', studentId: 'u3', submittedAt: new Date('2024-08-18') }, // Not graded yet
    { id: 's4', assignmentId: 'a4', studentId: 'u1', submittedAt: new Date('2024-09-09'), grade: 95, feedback: 'Excellent implementation and clean code.' },
    { id: 's5', assignmentId: 'a4', studentId: 'u3', submittedAt: new Date('2024-09-11'), grade: 78, feedback: 'The logic is correct, but consider edge cases like an empty list.' },
];

// NOTIFICATIONS
export const MOCK_NOTIFICATIONS: Notification[] = [
    { id: 'n1', userId: 'u1', message: 'Your assignment "React Component Essay" was graded.', read: false, createdAt: new Date() },
    { id: 'n2', userId: 'u1', message: 'New announcement in "Introduction to React".', read: false, createdAt: new Date(Date.now() - 86400000) },
    { id: 'n3', userId: 'u2', message: 'Reminder: "Flexbox Layout Challenge" is due tomorrow.', read: true, createdAt: new Date(Date.now() - 172800000) },
];

// ATTENDANCE
export const MOCK_ATTENDANCE: Attendance[] = [
    // Today's attendance for teacher t1's students in c1 and c2
    { id: 'att1', studentId: 'u1', date: '2024-07-29', status: 'present' },
    { id: 'att2', studentId: 'u2', date: '2024-07-29', status: 'present' },
    { id: 'att3', studentId: 'u3', date: '2024-07-29', status: 'absent' },
    { id: 'att4', studentId: 'u4', date: '2024-07-29', status: 'present' },
    { id: 'att5', studentId: 'u5', date: '2024-07-29', status: 'present' },
    { id: 'att6', studentId: 'u6', date: '2024-07-29', status: 'present' },
    { id: 'att7', studentId: 'u7', date: '2024-07-29', status: 'absent' },
    { id: 'att8', studentId: 'u8', date: '2024-07-29', status: 'present' },
    { id: 'att9', studentId: 'u9', date: '2024-07-29', status: 'present' },
    { id: 'att10', studentId: 'u10', date: '2024-07-29', status: 'present' },
    { id: 'att11', studentId: 'u11', date: '2024-07-29', status: 'absent' },
    // Past attendance for student u1
    { id: 'att12', studentId: 'u1', date: '2024-07-28', status: 'present' },
    { id: 'att13', studentId: 'u1', date: '2024-07-27', status: 'absent' },
];

// FORUM POSTS
export const MOCK_FORUM_POSTS: ForumPost[] = [
    {
        id: 'p1', authorId: 't1', content: 'Welcome to the forum! Feel free to ask any questions about the course material.', createdAt: new Date('2024-07-20'),
        replies: [
            {
                id: 'r1', authorId: 'u1', content: 'Thanks! I was wondering about the best practices for state management.', createdAt: new Date('2024-07-21'),
                replies: []
            }
        ]
    },
    {
        id: 'p2', authorId: 'u3', content: 'Having some trouble with the Flexbox assignment. Can anyone share some resources?', createdAt: new Date('2024-07-22'),
        replies: []
    }
];

export const MOCK_TIMETABLE: TimetableEntry[] = [
    { day: 'Monday', time: '10:00 - 11:30', courseId: 'c1', courseTitle: 'Introduction to React' },
    { day: 'Tuesday', time: '13:00 - 14:30', courseId: 'c3', courseTitle: 'Data Structures in Python' },
    { day: 'Wednesday', time: '10:00 - 11:30', courseId: 'c1', courseTitle: 'Introduction to React' },
    { day: 'Thursday', time: '15:00 - 16:30', courseId: 'c2', courseTitle: 'Advanced CSS' },
    { day: 'Friday', time: '09:00 - 10:30', courseId: 'c3', courseTitle: 'Data Structures in Python' },
];

export const MOCK_ANNOUNCEMENTS: Announcement[] = [ { id: 'an1', courseId: 'c1', title: 'Mid-term project details', content: 'Details for the mid-term project have been posted under the assignments tab.', date: '2024-07-28' }, { id: 'an2', courseId: 'c3', title: 'Guest Lecture on Friday', content: 'We will have a guest lecture from a senior engineer at Google this Friday. Be prepared!', date: '2024-07-27' } ];
