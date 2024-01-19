import Freelancer, { IFreelancer } from "../../models/users/freelancer"
import { Request,Response } from "express";
import bcrypt from 'bcrypt';
import Client, { IClient } from "../../models/users/client";
export const registerFreelancer = async(req:Request, res:Response)=>{
    try{

        const freelancer:IFreelancer= new Freelancer({
            email:req.body.email,
            username:req.body.username,
            password: await bcrypt.hash(req.body.password,10),
            skills: req.body.skills,
            description:req.body.description,
            bid_token:10,
            created_at:new Date(),
        });

        const savedFreelancer= await freelancer.save();
        console.log(savedFreelancer);
        res.status(201).json({message:'Freelancer profile saved',profileDeatils:savedFreelancer});

    }catch(err){
        res.status(501).json({message:'failed to Register',error:err});
    }
}

export const registerCleint = async(req:Request, res:Response)=>{
    try{

        const client:IClient= new Client({
            email:req.body.email,
            username:req.body.username,
            password: await bcrypt.hash(req.body.password,10),
            created_at:new Date(),
        });

        const savedClient= await client.save();
        console.log(savedClient);
        res.status(201).json({message:'Client profile saved',profileDeatils:savedClient});

    }catch(err){
        res.status(501).json({message:'Failed to Register',error:err});
    }
}