import mongoose from "mongoose";


//   firstName: string,
//   lastName: string,
//   email: string,
//   phoneNo: string,
//   preferDestination: string,
//   startDate: string,
//   officeLocation: string,
//   preferCounsel: string,
//   fundOption: string,
//   studyLevel: string,

const leadSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: String,
    required: true,

  },
  preferDestination: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  officeLocation: {
    type: String,
    required: true,
  },
  preferCounsel: {
    type: String,
    required: true,
  },
  fundOption: {
    type: String,
    default: 'Self'
    // required: true,
  },
  studyLevel: {
    type: String,
    // required: true,
  },
  listed: {
    type: Boolean,
    required: true,
    default: false,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  }
});

const Lead = mongoose.model("Lead", leadSchema);

export default Lead;
