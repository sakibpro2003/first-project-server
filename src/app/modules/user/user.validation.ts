import { z } from "zod";

const userValidationSchema = z.object({
    password: z.string({
        required_error: "Password must be string"
    }).max(20,"Password cannot be more than 20 characters").optional(),
    status: z.enum([ 'inProgress', 'blocked']).default('inProgress'),

})

export const userValidation = {
    userValidationSchema,
}