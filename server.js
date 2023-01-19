import express from "express";
import cors from "cors";
import router from "./routes/productRoutes.js";
import reviewRouter from "./routes/reviewRoute.js";
import adminRouter from "./routes/adminRoute.js";
import jwt from "jsonwebtoken";
import { verifyToken } from "./middleware/jwtAuthentication.js";

// multer install
import path from "path";
import multer from "multer";

const app = express();
// Enabling corss open resource sharing
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
// Middlewares
app.use(cors(corsOptions));
app.use(express.json());

// static image folder
app.use("/images", express.static("images"));

// routes
// app.use("/api/products", verifyToken, router);
app.use("/api/products", router);
app.use("/api/reviews", reviewRouter);

// Handling Auth
app.use("/api/auth/login", adminRouter);

// Testing API
app.get("/test", (req, res) => {
  res.status(200).send("Test route working properly");
});

// Tring with multer
const storage = multer.diskStorage({
  destination: "images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});
const uploads = multer({
  storage: storage,
});

app.use("/profile", express.static("images"));

app.post("/uploads", uploads.single("profile"), (req, res) => {
  res.json({
    sucess: 1,
    profile_url: `http://localhost:8080/profile/${req.file.filename}`,
  });
});

// Handling Errors
app.use((err, req, res, next) => {
  console.log(req.file.path);
  console.error("error", err.stack);
  res.status(500).json({
    message: "Something broke the server",
    hint: "check your (req, res) for this particular route",
  });
});

app.listen(8080, () => {
  console.log("Server is runing on port 8080");
});
