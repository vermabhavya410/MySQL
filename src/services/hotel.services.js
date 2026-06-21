import { createHotel, getHotelByid, updateHotel, SoftdeleteHotel, hardDelete, restoreHotel } from "../repositories/hotel.repositories.js"
import Hotel from "../db/models/hotel.modal.js"

export const createHotelService = async ({ name, address, city, state, zip, country, phone, email, rating }) => {
  const hotel = await createHotel({ name, address, city, state, zip, country, phone, email, rating })
  return hotel
}

export const getHotelByidService = async (id) => {
  const hotel = await getHotelByid(id)
  return hotel
}

export const updateHotelService = async (id, updateData) => {
  const updatedData = await updateHotel(id, updateData);
  if (updatedData[0] === 0) {
    throw new Error("Hotel not found or no changes made")
  }
  return { message: "Hotel updated successfully" };
}


export const deleteHotelService = async (id) => {
  return await Hotel.destroy({ where: { id } });
};


export async function removeHotelService(id) {
  if (!id) {
    throw new Error("Hotel ID is required");
  }
  const deletedHotel = await deleteHotel(id);
  if (!deletedHotel) {
    throw new Error("Hotel not found or already deleted");
  }
  return deletedHotel;
}


export async function hardDeleteHotelService(id) {
  if (!id) {
    throw new Error("Hotel ID is required");
  }
  const result = await hardDelete(id);
  return result;
}

export async function restoreHotelService(id) {
  if (!id) {
    throw new Error("Hotel ID is required");
  }

  const restoredData = await restoreHotel(id);
  return restoredData;
}
