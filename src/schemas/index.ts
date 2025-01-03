import * as z from "zod";

export const LoginFormSchema = z.object({
  identifier: z.string().min(1, "Username or email is required"),
  password: z.string().min(1, "Password is required"),
});

export type LoginFormSchemaType = z.infer<typeof LoginFormSchema>;

// create a register form schema, username password, phone, email, user_type, company (boolean)

export const RegisterFormSchema = z.object({
  username: z.string().min(1, "Username is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
  phone: z.string().min(1, "Phone number is required"),
  user_type: z.string().min(1, "User type is required"),
  company: z.boolean().default(false),
});

export type RegisterFormSchemaType = z.infer<typeof RegisterFormSchema>;
