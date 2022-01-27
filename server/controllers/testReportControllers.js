import Test from "../models/testReport.js";

export const createReport = async (req, res, next) => {
    const {name, email, phone, reportType} = req.body;
    const testCreate = new Test({
        name, email, phone, reportType,
    });

    const test = await testCreate.save();

    res.status(201).json(test);
};

// export const getLeads = async (req, res, next) => {
//     const fetchLeads = await Lead.find();
//     res.status(200).json(fetchLeads);
// }
