
const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type Tenant {
        _id:ID!
        College:String
        Course:String
        FatherName:String
        FatherPhoneNumber:Float
        PermanentAddress:String
        PersonalID:String
        PersonalIDNumber:Float
        RentPaidTill:String
        RoomNumber:Float
        StayFrom:String
        email:String!
        PhoneNumber:Float!
        name:String!
    }

    type User {
        _id:ID!
        name:String!
        email:String!
        role:String!
        phoneNumber:Float!
        createUsers: [Tenant!]
    }

    input TenantInput {
        College:String
        Course:String
        FatherName:String
        FatherPhoneNumber:Float
        PermanentAddress:String
        PersonalID:String
        PersonalIDNumber:Float
        RentPaidTill:String
        RoomNumber:Float
        StayFrom:String
        email:String!
        PhoneNumber:Float!
        name:String!
    }

    input UserInput {
        name:String!
        email:String!
        role:String!
        phoneNumber:Float!
    }

    type RootQuery {
        users: [User!]!
        tenants: [Tenant!]!
    }

    type RootMutation {
        createUsers(userInput:UserInput): User
        createTenant(tenantInput:TenantInput): Tenant
        removeTenant(tenantId:ID!): Tenant!
        updateTenant(tenantId:ID!): Tenant!
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`)