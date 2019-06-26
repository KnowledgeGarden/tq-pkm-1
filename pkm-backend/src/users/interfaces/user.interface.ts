import { Document } from 'mongoose';

export interface User extends Document {
    readonly email: string;
    readonly password: string;
    readonly fullname: string;
    readonly handle: string;
    readonly roles: string[];
    readonly isVerified: boolean;
    readonly verifyToken: string;
    readonly verifyExpires: Date;
    readonly verifyChanges: object;
    readonly resetToken: string;
    readonly resetExpires: Date;
}