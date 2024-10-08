import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BookingWidget from "../BookingWidget";
import PlaceGallery from "../PlaceGallery";
import AddressLink from "../AddressLink";

export default function PlacePage() {
    const {id} = useParams();
    const [place, setPlace] = useState([]);
  

    useEffect( () => {
        if (!id) {
            return;
        }
        axios.get(`https://airbnv-backend.onrender.com/api/places/${id}`).then(response => {
            setPlace(response.data)
        },
         {
                withCredentials: true,
                
              },
            headers: {
                "Content-Type": "application/json"
               
            }
    )
    }, [id])

    if (!place) return '';


    return(
        <div className="mt-8 bg-gray-100 -mx-8 px-8 pt-8">

           <h1 className="text-3xl">{place.title}</h1>
          <AddressLink> {place.address}</AddressLink>

           <PlaceGallery place={place}/>
           
            <div className="mt-8 mb-8 grid  gap-8 grid-cols-1 md:grid-cols-[2fr_1fr]">
                <div>

                     <div className="mt-4">
                        <h2 className="font-semibold text-2xl">Description</h2>
                            {place.description}
                     </div>

                    <div className="mt-4 py-4 font-semibold">
                    Check-in: {place.checkIn} <br/>
                    Check-out: {place.checkOut} <br/>
                    Max number of guests: {place.maxGuests}
                    </div>

                    <div className="bg-white -mx-8 px-8 py-8 border-t">
                    <div className="mt-4">
                        <h2 className="font-semibold text-2xl">Extra Info</h2>
                    </div>

                    <div className=" mb-4 mt-2 text-sm text-gray-500 leading-5 ">
                        {place.extraInfo}
                    </div>
               </div>
                    
                </div>

                <div>
                  <BookingWidget place={place}/>
                </div>
            </div>
               
        </div>
    )
}
