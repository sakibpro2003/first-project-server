import { z } from 'zod';

const creatAcademicSemesterValidationSchema = z.object({
  body: z.object({
    name: z.object
  })
});

export const AcademicSemesterValidations = {
   creatAcademicSemesterValidationSchema,
};
