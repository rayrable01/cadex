import { z } from "zod";

export const dataSchema = z.object({
    username: z.string().min(1, "Username is required"), 
    email: z.string().email("Invalid email format").min(1, "Email is required"),
    message: z.string().min(1, 'Message is required')
});

export type DataSchemaType = z.infer<typeof dataSchema>;

export const sendRequest = (data: DataSchemaType): Promise<unknown> => {
    console.log(`Thank you for your interest, ${data.username},`)
}