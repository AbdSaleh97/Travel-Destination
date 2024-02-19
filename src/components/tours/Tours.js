import './Tours.css';
function Tours(props) {
    return (
        <div class='card'>
            <h2>{props.name}</h2>
            <img src={props.image} alt={props.name} id='img' />
        </div>
    )
}
export default Tours;