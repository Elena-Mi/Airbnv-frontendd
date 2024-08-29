import { useEffect, useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";
import PlaceImg from "../PlaceImg";


export default function IndexPage() {
  const [places, setPlaces] = useState([]);

  useEffect( () => {
    axios.get('https://airbnv-backend.onrender.com/api/places').then(response => {
      setPlaces(response.data)
    },
           {
                withCredentials: true,
                
              },
            headers: {
                'Content-Type': 'application/json',
                "Access-Controll-Allow-Origin":"*"
            },                                                           
        [])
  })

    return (

      <div className="mt-8  grid gap-x-6  gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">

        {places.length > 0 && places.map(place => (

          <Link key={place._id}  to={`/place/${place._id}`}>

          <div className="bg-gray-500 mb-2 rounded-2xl flex">
          {place.photos?.[0] && (
           <PlaceImg place={place} />
        )}
          </div>

          <h2 className="font-bold">{place.address}</h2>
          <h3 className="text-sm truncate text-gray-500">{place.title}</h3>
    
          <div className="mt-1">
              <span className="font-bold">${place.price}</span> per a night
          </div>

        </Link>

        ))}
  
        </div> 
    )
}


