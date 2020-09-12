import express from "express";

const userRouter = express.Router();
import routes from "../routes";
import {
    users,
    userDetail,
    editProfile,
    changePassword,
} from "../controllers/userController";

userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail, userDetail);

export default userRouter;
