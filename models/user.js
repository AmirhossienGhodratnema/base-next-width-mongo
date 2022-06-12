const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({
    name: { type: String, required: true },
    lname: { type: String, required: true },
}, { timestamps: true });


module.exports = mongoose.models.User || mongoose.model('User', UserSchema)

// export default mongoose.models.user || mongoose.model('User', UserSchema)