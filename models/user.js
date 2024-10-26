const mongoose = require('mongoose');
const {isEmail} = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullName: {
        type: String,
        required: [true, 'يرجى إدخال الإسم الكامل']
    },
    email: {
        type: String,
        required: [true, 'البريد الإلكتروني مطلوب'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'الرجاء إدخال بريد إلكتروني صحيح']
    },
    country: {
        type: String,
    },
    phoneNumber: {
        type: Number,
        required: [true, 'رقم الهاتف مطلوب'],
        unique: true
    },
    socilMedia: {
        type: 'Array',
    },
    profilePicture: {
        type: Buffer,
    },
    password: {
        type: String,
        required: [true, 'الرجاء إدخال كلمة المرور']
    }
}, { timestamps: true });


// Statics methode to login user
userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({email});
    if(user) {
        if(user.password == password) {
            return user;
        }
        throw Error('Incorrect password');
        
    }
    throw Error ('Incorrect Phone number');
}

const User = mongoose.model('User', userSchema);

module.exports = User;