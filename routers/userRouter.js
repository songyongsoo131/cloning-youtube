import express from "express";

const userRouter = express.Router();
import routes from "../routes";
import {
    users,
    userDetail,
    editProfile,
    changePassword,
} from "../controllers/userController";

userRouter.get(routes.users, users);
userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;
