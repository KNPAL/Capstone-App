const express = require('express');
const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const mongoose = require('mongoose');


const User = require('./models/user');
const Tenant = require('./models/tenant');

const app = express();

const Users = []

app.use(bodyParser.json());

app.use('/graphql', graphqlHTTP({
    schema: buildSchema(`

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
            createUser(userInput:UserInput): User
            createTenant(tenantInput:TenantInput): Tenant
            removeTenant(tenantInput:TenantInput): Tenant
            updateTenant(tenantInput:TenantInput): Tenant
        }

        schema {
            query: RootQuery
            mutation: RootMutation
        }
    `),
    rootValue: {
        users: () => {
            return User.find()
                .then(users => {
                    return users.map(user => {
                        return { ...user._doc, _id: user.id }
                    });
                }).catch(err => {
                    throw err;
                })
        },
        createUser: (args) => {
            const user = new User({
                name: args.userInput.name,
                email: args.userInput.email,
                role: args.userInput.role,
                phoneNumber: args.userInput.phoneNumber
            });
            return user.save().then(result => {
                console.log(result)
                return { ...result._doc };
            })
                .catch(err => {
                    console.log(err)
                    throw err;
                });
        }
    },
    graphiql: true
}))

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@atlascluster.oibhyrl.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`)
    .then(() => {
        app.listen(3000);
    }).catch(err => {
        console.log(err);
    });
