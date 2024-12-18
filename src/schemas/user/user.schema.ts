import { z } from "zod";

export const UserSchema = z.object({
  _id: z.string(),
  userName: z.string(),
  password: z.string(),
});

export const FetchUsersResponseSchema = z.object({
  data: z.object({
    users: z.array(UserSchema),
    pagination: z.object({
      page: z.number(),
      limit: z.number(),
      totalPages: z.number(),
    }),
  }),
  message: z.string(),
});

export const LoginResponseSchema = z.object({
  data: UserSchema,
  message: z.string(),
});

export type LoginResponse = z.infer<typeof LoginResponseSchema>;
export type User = z.infer<typeof UserSchema>;
export type FetchUsersResponse = z.infer<typeof FetchUsersResponseSchema>;
