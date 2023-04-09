import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


const Card = ({data}) => {
    return (
    <div className="Card">
      <div className="Card-image">
        <img src={data.imageUrl} alt={data.title} />
      </div>
      <div className="Card-info">
        <div className="Card-location-container">
            <FontAwesomeIcon className="Card-location-icon" icon={faMapMarkerAlt} />
            <span className="Card-location" >{data.location}</span>
            <a href={data.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                View on Google Maps
            </a>
        </div>
        <h2 className="Card-title">{data.title}</h2>
        <div className="Card-date">{data.startDate} - {data.endDate}</div>
        <div className="Card-description">{data.description}</div>
      </div>
    </div>
  );

    
}

export default Card