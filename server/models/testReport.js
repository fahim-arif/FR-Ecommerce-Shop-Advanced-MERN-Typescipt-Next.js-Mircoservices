import mongoose from 'mongoose';

const testReportSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        name: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        email: {
            type: String,

        },
        reportType: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Report = mongoose.model('Report', testReportSchema);

export default Report;
