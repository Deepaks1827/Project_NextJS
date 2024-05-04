import {z} from "zod"
export const usernameValidation = z
.string()
.min(2,"Username should be more than 2 character.")
.max(20,"Username must be less than 20 character")
.regex(/^[a-zA-Z0-9_]+$/,"Username must not contain special character.")

export const signUpSchema = z.object({
    username:usernameValidation,
    email: z.string().email({message:"Invalid Email address."}),
    password: z.string().min(6,{message:"Password must be more than 6 character."})
})