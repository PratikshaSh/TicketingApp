import mongoose from 'mongoose';

// An inteface that describes the properties
// that are required to create a new User
interface UserAttrs {
    email: string;
    password: string;
}

//AN interface that describes the properties 
// that a User model  has
interface UserModel extends mongoose.Model<UserDoc>{
    build(attrs: UserAttrs): UserDoc;
}

// An interface that describes the propertise 
// that a User Document has
interface UserDoc extends mongoose.Document {
    email: string;
    password: string;
    // updatedAt: string;
}

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.statics.build= (attrs: UserAttrs) => {
    return new User(attrs);
};
const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

// User.build({
//     email: 'sjdkskf',
//     password: 'sdfkh'
// })
// const user = User.build({
//         email: 'sjdkskf',
//     password: 'sdfkh'
// })

export { User };