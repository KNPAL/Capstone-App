const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tenantSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
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
        type: String
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
    user:{
        type: Schema.Types.ObjectId,
        ref:'User'
    }
});

module.exports = mongoose.model('Tenant', tenantSchema);