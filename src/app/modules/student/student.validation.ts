import { z } from 'zod';

const StudentNameSchema = z.object({
  firstName: z
    .string()
    .trim()
    .max(20, 'First name max length can be 20')
    .refine(
      (value : string) => value.charAt(0) === value.charAt(0).toUpperCase(),
      'First name must start with an uppercase letter',
    ),
  middleName: z.string().trim().optional(),
  lastName: z.string().refine((value:) => /^[A-Za-z]+$/.test(value), {
    message: 'Last name must only contain alphabetic characters',
  }),
});

// Guardian Schema
const GuardianValidationSchema = z.object({
  fatherName: z.string(),
  fatherOccupation: z.string(),
  fatherContactNo: z.string(),
  motherName: z.string(),
  motherOccupation: z.string(),
  motherContactNo: z.string(),
});

// Local Guardian Schema
const LocalGuardianValidationSchema = z.object({
  name: z.string(),
  occupation: z.string(),
  contactNo: z.string(),
  address: z.string(),
});

// Main Student Schema
const createStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20),
    student: z.object({
      name: StudentNameSchema,
      gender: z.enum(['male', 'female', 'other']),
      dateOfBirth: z.string().optional(),
      email: z.string().email(),
      contactNo: z.string(),
      emergencyContactNo: z.string(),
      bloogGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
        .optional(),
      presentAddress: z.string(),
      permanentAddres: z.string(),
      guardian: GuardianValidationSchema,
      localGuardian: LocalGuardianValidationSchema.optional(),
      profileImg: z.string().optional(),
    }),
  }),
});

export default createStudentValidationSchema;

// export const StudentValidations = {
//    createStudentValidationSchema,
// };
