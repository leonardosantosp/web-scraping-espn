import mongoose from 'mongoose'
const { Schema } = mongoose

const playerSchema = new Schema({
  image: String,
  name: String,
  number: String,
  position: String,
  age: String,
  height: String,
  weight: String,
  university: String,
  salary: String,
  team_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' }
})

export default mongoose.model('Player', playerSchema)
