const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    contactName: {
        type: String,
        required: true,
    },
    phoneNo: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    imageUrl: {
        type: String,
        // required: true,
    },
    date: {
        type: Date,
        default: Date.now(),
    }
});

const Contact = mongoose.model('Tweet', contactSchema);
module.exports = Contact;