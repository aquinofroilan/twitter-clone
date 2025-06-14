import { z } from "zod";

const EmailSchema = z.string().email();

export type EmailSchemaType = z.infer<typeof EmailSchema>;
export { EmailSchema };
