import {z} from "zod"
export const messageSchema = z.object({
  content:z.string()
  .min(10,"Content should be more than 10 characters")
  .max(300,"Content should be less than 300 characters.")
})