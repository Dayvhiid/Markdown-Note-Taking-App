import express from "express";
import multer from "multer";
import { handleFileUpload } from "../controllers/fileController.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.get("/", (req, res) => {
  res.render("upload");
});

router.post("/upload", upload.single("file"), handleFileUpload);

export default router;
