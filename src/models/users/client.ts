import { Schema, Document, model } from 'mongoose';
import { emailValidator, passwordValidator } from '../../utils/validators';

export interface IClient extends Document{
    username:string;
    email:string;
    password:string;
    created_at:Date;
}

const ClientSchema = new Schema<IClient>({
    username:{type:String, required:true, unique:true},
    email:{type:String, required:true, unique:true, validate:{validator:emailValidator,message:"Invalid email format"}},
    password: { type: String, required: true, validate:{validator:passwordValidator,message:"Password must be atleast 6 characters and at least one digit and one character"}},
    created_at:{type:Date, default:Date.now},
});

const Client = model<IClient>('Client',ClientSchema);
export default Client;