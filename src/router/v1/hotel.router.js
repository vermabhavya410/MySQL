import {Router} from "express"
import { createHotelController, getHotelByidController } from "../../controllers/hotel.controllers.js"
const hotelRouter = Router()

hotelRouter.post("/",createHotelController)
hotelRouter.get("/:id",getHotelByidController)

export default hotelRouter