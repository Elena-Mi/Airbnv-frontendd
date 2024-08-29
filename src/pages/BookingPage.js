
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AddressLink from "../AddressLink";
import BookingDates from "../BookingDates";
import PlaceGallery from "../PlaceGallery";

export default function BookingPage() {
    const {id} = useParams();
    const [booking, setBooking] = useState(null);

    useEffect( () => {
        if(id) {
            axios.get('https://airbnv-backend.onrender.com/api/bookings').then(response => {
                const foundBooking = response.data.find(({_id}) => _id === id);
                if (foundBooking) {
                    setBooking(foundBooking);
                }
            },
            {
                withCredentials: true,
                
              },
            headers: {
                Content-Type: application/json,
                 Access-Controll-Allow-Origin: *
             
            }
        )
        }
    },[id]);

    if(!booking) {
        return ''
    }
    return(
        <div className="my-8">
                <h1 className="text-3xl">{booking.place.title}</h1>
                <AddressLink className="my-2 block">{booking.place.address}</AddressLink>
            <div className="bg-gray-200 p-6 my-6 rounded-2xl flex items-center justify-between">
        <div>
          <h2 className="text-xl mb-4">Your booking information:</h2>
          <BookingDates booking={booking} />
        </div>
        <div className="bg-primary p-4 text-white rounded-2xl cursor-pointer">
          <div>Total price</div>
          <div className="text-xl">${booking.price}</div>
        </div>
      </div>
      <PlaceGallery place={booking.place} />
    </div>
    )
}
