const mongoose = require("mongoose");


const petSchema = new mongoose.Schema({
    Name:{
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be 3 characters or longer"]
    },
    Type:{
        type: String,
        required: [true, "Type is required"],
        minlength: [3, "Type must be 3 characters or longer"]
    },
    Description:{
        type: String,
        required: [true, "Description is required"],
        minlength: [3, "Description must be 3 characters or longer"]
    },
    Skill_1:{
        type: String,
        required: [false]
    },
    Skill_2:{
        type: String,
        required: [false]

    },
    Skill_3:{
        type: String,
        required: [false]
    }
}, {timestamps: true});

mongoose.model("petShelter", petSchema);