import { Link } from 'react-router-dom';
import './Tour.css'
function Tour(props) {
    return (
        <Link to={`/city/${props.tour.id}`}>
            <div class='card'>
                <h2>{props.tour.name}</h2>
                <img src={props.tour.image} alt={props.tour.name} id='img' />
            </div>
        </Link>
    )
}
export default Tour;