import express from "express";

const videoRouter = express.Router();
import routes from "../routes"
import { videos, upload, videoDetail, editVideo, deleteVideo } from "../controllers/videoController";

videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter