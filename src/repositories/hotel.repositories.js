import Hotel from "../db/models/hotel.modal.js";


//for creating a Hotel 
export async function createHotel ({name,address,city,state,zip,country,phone,email,rating}) {
  const hotel= await Hotel.create({
    name,address,city,state,zip,country,phone,email,rating
  })
  return hotel;
}

//for getting a Hotel
export async function getHotelByid(id) {
  const hotel= await Hotel.findByPk(id)
  return hotel
}

//for updating a Hotel
export async function updateHotel(id,updateData) {
  const hotel= await Hotel.update(updateData,{
    where:{
      id:id
    }
  });
  return hotel
}