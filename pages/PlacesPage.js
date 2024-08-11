import {Link} from "react-router-dom";
import AccountNav from "../AccountNav";
import {useEffect, useState} from "react";
import axios from "axios";
import PlaceImg from "../PlaceImg";




export default function PlacesPage({className}) {
 
 

    const [places,setPlaces] = useState([]);
    useEffect(() => {
      axios.get('https://airbnv-backend.onrender.com/api/user-places').then(({data}) => {
        setPlaces(data);
      });
    }, []);
    


    return (
        <div> 
            <AccountNav/>
             
                <div className="text-center"  >
                    <Link className= "inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full" to={'/account/places/new'}> 
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path d="M6 3a3 3 0 0 0-3 3v2.25a3 3 0 0 0 3 3h2.25a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM15.75 3a3 3 0 0 0-3 3v2.25a3 3 0 0 0 3 3H18a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-2.25ZM6 12.75a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h2.25a3 3 0 0 0 3-3v-2.25a3 3 0 0 0-3-3H6ZM17.625 13.5a.75.75 0 0 0-1.5 0v2.625H13.5a.75.75 0 0 0 0 1.5h2.625v2.625a.75.75 0 0 0 1.5 0v-2.625h2.625a.75.75 0 0 0 0-1.5h-2.625V13.5Z" />
                         </svg>
                        Add new place
                    </Link>
                </div>
             

              
                <div className="mt-4"  >
                    {places.length > 0 && places.map(place => (
                    
                   <Link key={place._id} to={'/account/places/'+place._id}  className=" mt-3 flex cursor-pointer gap-4 bg-gray-100 p-4 rounded-2xl" >
                   
                      <div className="flex items-center w-32 h-42  grow shrink-0"  >
                          <div >
                          
                         
                        <PlaceImg className={className} place={place} alt='pic'/>
                                
                            
                          </div>
                      </div>

                      <div className="grow-0 shrink" >
                        <h2 className="text-xl">{place.title}</h2>
                        <p className="text-sm mt-2">{place.description}</p>
                      </div>

                    
                     </Link>
                     
                    ))}
                </div>
            

        </div>
      
    )
};

