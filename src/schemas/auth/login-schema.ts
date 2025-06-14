import { EmailSchema } from "../base-schema";
import { z } from "zod";

const LoginSchema = z.object({
    email: EmailSchema,
    password: z.string().min(8, "Password must be at least 8 characters long"),
});

export default LoginSchema;
