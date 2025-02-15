import { Router } from 'express';
import superAdminRoutes from '../module/superAdmin/superAdminRoutes';

const router: Router = Router();

// To create All Module routes

// Use Super Admin Routes
router.use('/superAdmin', superAdminRoutes);



export default router;