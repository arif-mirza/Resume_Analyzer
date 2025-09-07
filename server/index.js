import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import resumeRoutes from "./routes/resumeRoutes.js";

// Load environment variables first
dotenv.config();

// Debug environment variables loading
console.log("🔍 Main Server - Environment Variables Check:");
console.log("OPENAI_API_KEY exists:", !!process.env.OPENAI_API_KEY);
console.log("OPENAI_API_KEY length:", process.env.OPENAI_API_KEY ? process.env.OPENAI_API_KEY.length : 0);
console.log("PORT:", process.env.PORT);
console.log("DB_URL exists:", !!process.env.DB_URL);

// app creation
const app = express();
const port = process.env.PORT || 5000;

// middleware
const corsOptions = {
  origin: "https://mjresumex.netlify.app", // 👈 yahan apna frontend ka Netlify URL likho
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

try {
  connectDB();
  console.log("✅ Database connection successful");
} catch (error) {
  console.error("Database connection failed:", error.message);
  process.exit(1); 
}

// root route for testing
app.get("/", (req, res) => {
  res.send("🚀 Resume Analyzer API is running...");
});

// routes
app.use("/api/resume", resumeRoutes);


if (process.env.NODE_ENV !== "production") {
  app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
  });
}

// app.listen(port, () => {
//   console.log(`🚀 Server running at http://localhost:${port}`);
// });

export default app;
