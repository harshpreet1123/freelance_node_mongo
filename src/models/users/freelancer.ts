import { Schema, Document, model } from "mongoose";
import { emailValidator, passwordValidator } from "../../utils/validators";

export interface IFreelancer extends Document {
    username: string;
    email: string;
    password: string;
    skills: string[];
    description?: string;
    created_at?: Date;
}

const FreelancerSchema = new Schema<IFreelancer>({
    username: { type: String, required: true, unique: true },
    email: {type: String, required: true, unique: true,validate: {validator: emailValidator,message: 'Invalid Email Format'}},
    password: { type: String, required: true, validate:{validator:passwordValidator,message:"Password must be atleast 6 characters and at least one digit and one character"}},
    skills:[{type:String,required:true}],
    description:{type:String},
    created_at:{type:Date, default:Date.now},
});

const Freelancer = model<IFreelancer>('Freelancer', FreelancerSchema);

export default Freelancer;
