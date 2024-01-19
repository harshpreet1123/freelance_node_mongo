import express from 'express';
import { registerCleint, registerFreelancer } from '../../controllers/user/register';
const router = express.Router();

router.post('/client/register',registerCleint);
router.post('/freelancer/register',registerFreelancer);

export default router;