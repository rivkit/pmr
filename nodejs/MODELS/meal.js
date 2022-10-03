const mongoose = require("mongoose");
const dose = require('./dose')

const mealSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 2,
    },
    kind: {
        type: String,
        minlength: 2,
    },
    age: {
        type: String,
        enum: ["0-6", "6-12", "12-18", "18-24", "24-36"]
    },
    mealTime: {
        type: String,
        minlength: 3,
    },
    day: {
        type: String,
        minlength: 3,
        enum: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי"]
    },
    doses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: dose
    }],
})

module.exports = mongoose.model('mealSchema', mealSchema);