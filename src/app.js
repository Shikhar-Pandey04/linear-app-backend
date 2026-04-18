import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// --- Middlewares ---
app.use(cors({ 
    origin: "http://localhost:5173", 
    credentials: true 
}));

app.use(express.json({ limit: "16kb" })); 
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser()); // Browser cookies read/write karne ke liye


// --- Routes Import ---
import issueRouter from "./routes/issue.routes.js";
import userRouter from "./routes/user.routes.js"; // User Signup/Login ke liye


// --- Routes Declaration ---
app.use("/api/v1/issues", issueRouter); // http://localhost:5000/api/v1/issues
app.use("/api/v1/users", userRouter);   // http://localhost:5000/api/v1/users


export { app };