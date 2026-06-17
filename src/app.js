import e from "express"
import hotelRouter from "./router/v1/hotel.router.js";

export const app = e()
app.use(e.json());

app.use("/api/v1",hotelRouter)


// https://sequelize.org/docs/v7/cli/