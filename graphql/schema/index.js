
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
        PersonalIDNumber:String
        RentPaidTill:String
        RoomNumber:Float
        StayFrom:String
        email:String!
        phoneNumber:Float!
        name:String!
        user:User!
    }

    type User {
        _id:ID!
        name:String!
        email:String!
        role:String!
        phoneNumber:Float!
        password:String
    }

    type AuthData {
        userId: ID!
        token:String!
        tokenExpiration: Int!
    }

    input TenantInput {
        tenantId:ID
        College:String
        Course:String
        FatherName:String
        FatherPhoneNumber:Float
        PermanentAddress:String
        PersonalID:String
        PersonalIDNumber:String
        RentPaidTill:String
        RoomNumber:Float
        StayFrom:String
        email:String!
        phoneNumber:Float!
        name:String!
        user:UserInput
    }

    input UserInput {
        name:String!
        email:String!
        role:String!
        phoneNumber:Float!
        password:String!
    }

    type RootQuery {
        users: [User!]!
        tenants: [Tenant!]!
        login(email:String!,password:String!): AuthData!
    }

    type RootMutation {
        createUsers(userInput:UserInput): User
        createTenants(tenantInput:TenantInput): Tenant
        removeTenant(tenantId:ID!,email:String!): Tenant!
        updateTenant(tenantInput:TenantInput): Tenant
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`)