const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const rateLimit = require("express-rate-limit");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const Thread = require("./models/Thread");
const Reply = require("./models/Reply");
dotenv.config({ path: "./config/secret.env" });

const app = express();

const corsOptions = {
  origin:
    process.env.NODE_ENV === "production"
      ? "https://www.paradise.gg"
      : "http://localhost:3000",
  credentials: true,
};
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // limit each IP to 100 requests per windowMs
});

connectDB();

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(limiter);
app.set("trust proxy", 1);
////////
const reply = require("./routes/reply");
const thread = require("./routes/thread");
app.use("/api/reply", reply);
app.use("/api/thread", thread);
///////

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server listening on port ${PORT}`));
