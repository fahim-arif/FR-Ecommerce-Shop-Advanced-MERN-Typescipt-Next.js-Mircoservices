import Lead from "../models/leadModel.js";
import LeadCard from "../models/leadCardModel.js";

export const postLead = async (req, res, next) => {
    const {firstName, lastName, email, phoneNo, preferDestination, startDate, officeLocation, preferCounsel, fundOption, studyLevel} = req.body;
    const leadGen = new Lead({
        firstName, lastName, email, phoneNo, preferDestination, startDate, officeLocation, preferCounsel, studyLevel, fundOption
    });

    const lead = await leadGen.save();

    res.status(201).json(lead);
};

export const getLeads = async (req, res, next) => {
    const fetchLeads = await Lead.find();
    res.status(200).json(fetchLeads);
}



export const postCard = async (req, res, next) => {
    const {newCard, inProgress, review, done} = req.body;
    const leadCard = new LeadCard({
        newCard, inProgress, review, done
    });

    const leadCards = await leadCard.save();

    res.status(201).json(leadCards);
};
