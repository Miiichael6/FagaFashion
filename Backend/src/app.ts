import express, { Response, Request } from "express";
import morgan from "morgan";
import cors from "cors";
import { corsOptions } from "./config/corsConfig";
import router from "./routes/index.Routes";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors(corsOptions));

// Uso de la rutas de Express;

app.use("/api", router);

export default app;
