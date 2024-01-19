import { Schema, Document, model, Types } from "mongoose";

export interface IJob extends Document {
    title: string;
    description: string;
    budget: number;
    client_id: Types.ObjectId;
    freelancer_id?: Types.ObjectId;
    bid?: {
        freelancer_id: Types.ObjectId;
        bid_id: Types.ObjectId;
        amount: number;
        time: number;
        created_at: Date;
    };
    status: string;
    created_at: Date;
}

const Job = new Schema<IJob>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    budget: { type: Number, required: true },
    client_id: { required: true, ref: 'Client' }, // Assuming 'User' is the name of the user model
    freelancer_id: { type: Types.ObjectId, ref: 'Freelancer' },
    bid: {
        freelancer_id: { type: Types.ObjectId, ref: 'Freelancer' },
        bid_id: { type: Types.ObjectId, required: true },
        amount: { type: Number, required: true },
        time: { type: Number, required: true },
        created_at: { type: Date, default: Date.now },
    },
    status: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
});

const JobModel = model<IJob>('Job', Job);

export default JobModel;
