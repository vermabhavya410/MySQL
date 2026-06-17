import { createHotel, getHotelByid,updateHotel } from "../repositories/hotel.repositories.js"
import Hotel from "../db/models/hotel.modal.js"

export const createHotelService = async ({ name, address, city, state, zip, country, phone, email,rating }) => {
  const hotel = await createHotel({ name, address, city, state, zip, country, phone, email,rating })
  return hotel
}

export const getHotelByidService = async (id) => {
  const hotel = await getHotelByid(id)
  return hotel
}

export const updateHotelService=async(id,updateData)=>{
  const updatedData=await updateHotel(id,updateData);
  if(updatedData[0]===0){
    throw new Error("Hotel not found or no changes made")
  }
  return {message:"Hotel updated successfully"};
}


export const deleteHotelService = async (id) => {
  return await Hotel.destroy({ where: { id } });
};