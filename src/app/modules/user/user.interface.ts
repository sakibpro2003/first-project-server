export type IUser = {
    id: string,
    password: string,
    needPasswordChange: boolean,
    role: 'admin' | 'student' | 'faculty',
    status: 'inProgress' | 'blocked',
    isDeleted: boolean
};

