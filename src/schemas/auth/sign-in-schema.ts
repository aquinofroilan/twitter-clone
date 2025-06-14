import { EmailSchema } from "@/schemas";
import { z } from "zod";

const LoginSchema = z.object({
    email: EmailSchema.nonempty("Email is required"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
});

export { LoginSchema };
export type LoginSchemaType = z.infer<typeof LoginSchema>;
