import { Router } from "express";
import * as superAdminControllers from "./superAdminControllers";

const superAdminRouter = Router();

// Define routes

superAdminRouter.get('/fetch-all-super-admin', superAdminControllers.getAllSuperAdminController);

superAdminRouter.post('/create-super-admin', superAdminControllers.createSuperAdminController);

export default superAdminRouter;