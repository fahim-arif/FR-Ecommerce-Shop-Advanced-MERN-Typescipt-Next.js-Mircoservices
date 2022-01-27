import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const doctorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
    address: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: Date,
    },
    image: {
        type: String,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    locationImage: {
        type: String
    },
    medicalField: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        default: 0
    },
    visitPrice: {
        type: Number,
        default:299,
    },
    visitTime: {
        type: String,

    },
    accountType: {
        type: String,
        default: 'Doctor'
    }
});

doctorSchema.virtual("id").get(function () {
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
doctorSchema.set("toJSON", {
    virtuals: true,
});
doctorSchema.method("toClient", function () {
    var obj = this.toObject();

    //Rename fields
    obj.id = obj._id;
    delete obj._id;

    return obj;
});

doctorSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

doctorSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

const Doctor = mongoose.model("Doctor", doctorSchema);

export default Doctor;
