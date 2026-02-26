export interface SessionDto {
    id: string;
    expiresAt: Date;
    token: string;
    createdAt: Date;
    updatedAt: Date;
    ipAddress?: string | null;
    userAgent?: string | null;
    userId: string;
}
export type SessionInsert = Omit<SessionDto, "id" | "createdAt" | "updatedAt">;
export type SessionSelect = SessionDto;
export type SessionUpdate = Partial<SessionInsert>;
export interface UserDto {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    image?: string | null;
    createdAt: Date;
    updatedAt: Date;
}
export type UserInsert = Omit<UserDto, "id" | "createdAt" | "updatedAt">;
export type UserSelect = UserDto;
export type UserUpdate = Partial<UserInsert>;
//# sourceMappingURL=auth.dto.d.ts.map