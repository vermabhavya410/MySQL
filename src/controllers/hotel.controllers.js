import { createHotelService, getHotelByidService, updateHotelService, deleteHotelService, removeHotelService, hardDeleteHotelService, restoreHotelService } from "../services/hotel.services.js"



export const createHotelController = async (req, res) => {
  try {
    const { name, address, city, state, zip, country, phone, email, rating } = req.body;
    const hotel = await createHotelService({ name, address, city, state, zip, country, phone, email, rating });
    return res.status(201).json(hotel);
  } catch (error) {
    console.error("❌ SQL EXCEPTION:", error.message);
    return res.status(400).json({
      success: false,
      error: error.message
    });
  }
};


export const getHotelByidController = async (req, res) => {
  const { id } = req.params
  const hotel = await getHotelByidService(id)
  return res.status(200).json(hotel)
}


export const updateHotelController = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const result = await updateHotelService(id, updateData);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};


export const deleteHotelController = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCount = await deleteHotelService(id);
    if (!deletedCount) {
      return res.status(404).json({ success: false, error: "Hotel not found" });
    }
    return res.status(200).json({ success: true, message: "Hotel deleted successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};


export async function SoftdeleteHotelController(req, res) {
  try {
    const { id } = req.params;
    const result = await removeHotelService(id);
    return res.status(200).json({
      success: true,
      message: "Hotel moved to trash successfully (Soft Deleted)",
      data: result
    });
  } catch (error) {
    const statusCode = error.message.includes("not found") ? 404 : 400;
    return res.status(statusCode).json({
      success: false,
      message: error.message || "Something went wrong while deleting the hotel"
    });
  }
}

export async function hardDeleteHotelController(req, res) {
  try {
    const { id } = req.params;
    const result = await hardDeleteHotelService(id);
    return res.status(200).json({
      success: true,
      message: result.message
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  };
}


export async function restoreHotelController(req, res) {
  try {
    const { id } = req.params;

    const result = await restoreHotelService(id);

    return res.status(200).json({
      success: true,
      message: "Hotel restored successfully",
      data: result
    });

  } catch (error) {
    const statusCode = error.message.includes("not found") ? 404 : 400;

    return res.status(statusCode).json({
      success: false,
      message: error.message || "Something went wrong while restoring the hotel"
    });
  }
}