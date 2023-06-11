const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tenantSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    college: {
        type: String
    },
    Course: {
        type: String
    },
    FatherName: {
        type: String
    },
    FatherPhoneNumber: {
        type: Number
    },
    PermanentAddress: {
        type: String
    },
    PersonalID: {
        type: String
    },
    PersonalIDNumber: {
        type: Number
    },
    RentPaidTill: {
        type: String
    },
    RoomNumber: {
        type: Number
    },
    StayFrom: {
        type: String
    },
});

module.exports = mongoose.model('Tenant', tenantSchema);