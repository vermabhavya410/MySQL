import {Router} from "express"
import { createHotelController, getHotelByidController,updateHotelController,deleteHotelController ,SoftdeleteHotelController,hardDeleteHotelController,restoreHotelController} from "../../controllers/hotel.controllers.js"
const hotelRouter = Router()

hotelRouter.post("/",createHotelController)
hotelRouter.get("/:id",getHotelByidController)
hotelRouter.put("/:id",updateHotelController)
hotelRouter.delete("/:id",deleteHotelController)
hotelRouter.delete("/soft/:id", SoftdeleteHotelController)
hotelRouter.delete("/:id/force",hardDeleteHotelController);
hotelRouter.post("/:id/restore",restoreHotelController);

export default hotelRouter