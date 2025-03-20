// routes/schemas.js
import { z } from 'zod'

export const playerSchema = z.object({
  _id: z.string(),
  image: z.string(),
  name: z.string(),
  number: z.string(),
  position: z.string(),
  age: z.string(),
  height: z.string(),
  weight: z.string(),
  university: z.string(),
  salary: z.string(),
  team_id: z.string()
})

export const teamSchema = z.object({
  _id: z.string(),
  time: z.string(),
  technical: z.string(),
  image_link: z.string()
})
