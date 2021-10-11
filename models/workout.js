const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({
    day: { type: Date, default: Date.now },
    exercises: [
        {
            name: {
                type: String
            },
            type: {
                type: String
            },
            weight: {
                type: Number
            },
            sets: {
                type: Number
            },
            reps: {
                type: Number
            },
            duration: {
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
);

// Using the vitual propety in the WorkoutSchema model to return the total duration
WorkoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce(function(total, exercise) {
        return total + exercise.duration;
    }, 0);
});