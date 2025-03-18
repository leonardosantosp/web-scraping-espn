import mongoose from 'mongoose'
const { Schema } = 'mongoose'

const teamSchema = new Schema({
  time: String,
  technical: String,
  image_link: String
})

export default mongoose.model('Team', teamSchema)
