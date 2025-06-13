import { z } from "zod";

const EmailSchema = z.string().email();

export { EmailSchema };
