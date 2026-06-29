import e from "express"
import hotelRouter from "./router/v1/hotel.router.js";
import path from "path"
import { fileURLToPath } from "url";

const __dirname=path.dirname(fileURLToPath(import.meta.url))

export const app = e()
app.use(e.json());
app.use("/public",e.static(path.join(__dirname,"../public")))

app.use("/api/v1",hotelRouter)


// https://sequelize.org/docs/v7/cli/