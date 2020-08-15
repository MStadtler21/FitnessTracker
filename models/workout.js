const mongoose = require("mongoose")
const Schema = mongoose.Schema

const workoutSchema = new Schema (
    {
        day: {
            type: Date,
            default: () => new Date ()
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Choose and exercise type to continue"
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Enter and exercise name"
                },
                duration: {
                    type: Number,
                    required: "enter your workout duration here"
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                distance: {
                    type: Number
                }
            }
        ]
    }, 
    {
        toJSON: {
            virtuals: true
        }
    }
)


workoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration
    }, 0)
})


const Workout = mongoose.model("workoutdb", workoutSchema)
module.exports = Workout 