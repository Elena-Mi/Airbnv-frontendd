import Image from "./Image";
export default function PlaceImg({place, index=0, className=null}) {

    if (!place.photos?.length) {
        return '';
      }
    if (!className) {
        className = 'object-cover'
    }
    return(
        
        <div key={place.photos}>
           
            <Image className={className} src={place.photos[index]} alt="pho"/>

        </div>
        
    )
}