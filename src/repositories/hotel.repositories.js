import Hotel from "../db/models/hotel.modal.js";


//for creating a Hotel 
export async function createHotel({ name, address, city, state, zip, country, phone, email, rating }) {
  const hotel = await Hotel.create({
    name, address, city, state, zip, country, phone, email, rating
  })
  return hotel;
}

//for getting a Hotel
export async function getHotelByid(id) {
  const hotel = await Hotel.findByPk(id)
  return hotel
}

//for updating a Hotel
export async function updateHotel(id, updateData) {
  const hotel = await Hotel.update(updateData, {
    where: {
      id: id
    }
  });
  return hotel
}

export async function SoftdeleteHotel(id) {
  const hotel = await Hotel.findByPk(id)
  await hotel.destroy()
  return hotel
}

export async function hardDelete(id) {
  const hotel = await Hotel.findByPk(id, { paranoid: false })
  await hotel.destroy()
  return { message: "Hotel permanently Deleted!" }
}

export async function restoreHotel(id) {
  const hotel = await Hotel.findByPk(id, { paranoid: false })
  const restoredHotel = await hotel.restore()
  return restoredHotel
}

export async function updateHotelImage(id, imageUrl) {
  const hotel = await Hotel.findByPk(id)
  if (!hotel) return null

  hotel.imageUrl = imageUrl
  await hotel.save()

  return hotel
}