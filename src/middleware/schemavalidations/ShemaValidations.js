// validationSchema.js
import { z } from 'zod';

export const userSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
//   age: z.number().min(18, "Must be at least 18 years old"),
});
