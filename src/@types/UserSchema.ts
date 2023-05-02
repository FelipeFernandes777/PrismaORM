import { z, string } from "zod";

const userSchema = z.object({
	name: string().min(3, { message: "This name is invalid" }),
	email: string().email({ message: "This email is invalid" }),
});

export type User = z.infer<typeof userSchema>;
