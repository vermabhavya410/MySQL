import {Router} from "express"
import { createHotelController, getHotelByidController,updateHotelController,deleteHotelController } from "../../controllers/hotel.controllers.js"
const hotelRouter = Router()

hotelRouter.post("/",createHotelController)
hotelRouter.get("/:id",getHotelByidController)
hotelRouter.put("/:id",updateHotelController)
hotelRouter.delete("/:id",deleteHotelController)

export default hotelRouter