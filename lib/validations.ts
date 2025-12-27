import { z } from "zod";

export const obituaryFormSchema = z.object({
  // Personal Information (Required)
  firstName: z.string().min(1, "First name is required"),
  middleName: z.string().optional(),
  lastName: z.string().min(1, "Last name is required"),
  maidenName: z.string().optional(),
  nickname: z.string().optional(),
  
  // Dates (Required)
  birthDate: z.string().min(1, "Birth date is required"),
  deathDate: z.string().min(1, "Death date is required"),
  birthPlace: z.string().optional(),
  deathPlace: z.string().optional(),
  
  // Family Information (Optional)
  parents: z.string().optional(),
  spouse: z.string().optional(),
  children: z.string().optional(),
  siblings: z.string().optional(),
  grandchildren: z.string().optional(),
  
  // Life Details (Optional)
  education: z.string().optional(),
  career: z.string().optional(),
  military: z.string().optional(),
  hobbies: z.string().optional(),
  achievements: z.string().optional(),
  organizations: z.string().optional(),
  
  // Service Information (Optional)
  serviceDate: z.string().optional(),
  serviceLocation: z.string().optional(),
  serviceDetails: z.string().optional(),
  
  // Additional (Optional)
  specialMessage: z.string().optional(),
  tone: z.enum(['formal', 'casual', 'celebratory', 'spiritual']),
});

export type ObituaryFormValues = z.infer<typeof obituaryFormSchema>;
