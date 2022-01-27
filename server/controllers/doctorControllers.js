import Doctor from "../models/doctorModel.js";
import md5 from "md5";
import {mailRegister} from "../utils/nodeMailer.js";
import generateToken from "../utils/generateToken.js";

export const getDoctors = async (req, res, next) => {
    const fetchDoctors = await Doctor.find();
    res.status(200).json(fetchDoctors);
}

export const createDoctor = async (req, res, next) => {
    const {name, email, password, phone, address, image, location, medicalField} = req.body;

    const userExist = await Doctor.findOne({email});

    console.log(userExist)
    if (userExist) {
        res.status(400);
        throw new Error("Doctor already exist");
    }

    const user = await Doctor.create({
        name,
        email,
        password,
        image: `http://gravatar.com/avatar/${md5(email)}?d=identicon`,
        phone, address, medicalField
    });
    if (user) {
        mailRegister(name, email);
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        });
        // here implement
    } else {
        res.status(400);
        throw new Error("Invalid Doctor Data");
    }
}

export const getDoctorById = async (req, res, next) => {
    const id = req.params.id;
    const doctor = await Doctor.findById(id);
    res.status(200).json(doctor);
}
