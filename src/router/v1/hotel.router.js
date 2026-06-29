import {Router} from "express"
import { createHotelController, getHotelByidController,updateHotelController,deleteHotelController ,SoftdeleteHotelController,hardDeleteHotelController,restoreHotelController,uploadHotelImageController} from "../../controllers/hotel.controllers.js"
import {upload} from "../../middlewares/multer.middleware.js"

const hotelRouter = Router()

hotelRouter.post("/",createHotelController)
hotelRouter.get("/:id",getHotelByidController)
hotelRouter.put("/:id",updateHotelController)
hotelRouter.delete("/:id",deleteHotelController)
hotelRouter.delete("/soft/:id", SoftdeleteHotelController)
hotelRouter.delete("/:id/force",hardDeleteHotelController);
hotelRouter.post("/:id/restore",restoreHotelController);
hotelRouter.post("/:id/image", upload.single("image"), uploadHotelImageController)

export default hotelRouter