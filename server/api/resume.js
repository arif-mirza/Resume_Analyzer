// server/api/resume.js
import serverless from "serverless-http";
import app from "../index.js"; // server/index.js ko import kar raha hai

export default serverless(app);
