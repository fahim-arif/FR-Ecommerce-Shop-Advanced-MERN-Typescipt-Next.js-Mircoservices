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

const leadCardSchema = mongoose.Schema({
    new: {
        type: Array,
        required: true
    },
    inProgress: {
        type: Array,
        required: true
    },
    review: {
        type: Array,
        required: true
    },
    done: {
        type: Array,
        required: true
    },
});

const LeadCard = mongoose.model("LeadCard", leadCardSchema);

export default LeadCard;
