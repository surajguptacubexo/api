const mongoose =require('mongoose');
const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    roll: {
        type: String,
        required: true,
        unique: true,
    },
    registration: {
        type: String,
        required: true,
        unique: true,
    },
    subjects: {
        type: [String],
        required: true,
    },
    registered_on: {
        type: [String],
        default: new Date(),
    },
})
var studentdata=mongoose.model('studentdata',studentSchema);
module.exports= studentdata;


// const express = require('express');
//
// const students = [{
//    "id": 1,
//    "first_name": "lalit",
//    "last_name": "sharma",
//     "email": "lalit@gamil.com"
// },
//     {
//        "id": 2,
//        "first_name": "lalit",
//        "last_name": "sharma",
//        "email": "lalit@gamil.com"
//    },
//    {
//        "id": 3,
//         "first_name": "lalit",
//        "last_name": "sharma",
//         "email": "lalit@gamil.com"
//    },
//    {
//          "id": 4,
//         "first_name": "lalit", "last_name": "sharma",
//          "email": "lalit@gamil.com"
//      },
//    {
//        "id": 5,
//        "first_name": "lalit",
//        "last_name": "sharma",
//         "email": "lalit@gamil.com"
//     },
//      {
//          "id": 6,
//          "first_name": "lalit",
//          "last_name": "sharma",
//         "email": "lalit@gamil.com"
//    },
//    {
//        "id": 7,
//        "first_name": "lalit",
//         "last_name": "sharma",
//        "email": "lalit@gamil.com"
//   }
// ]
//
// module.exports = students;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
