import { useParams } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { useState } from "react";
const data = require('../../data/db.json')

function TourDetails() {
    const { id } = useParams();
    let obj = data.filter(el => el.id === id)

    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };
    const renderDescription = () => {
        const maxCharacters = 15; 
        const description = obj[0].info;

        return showMore ? description : `${description.substring(0, maxCharacters)}...`;
    };
    return (
        <>
            <Header />
            <div class='card'>
                <h2>Name : {obj[0].name}</h2>
                <img src={obj[0].image} alt={obj[0].name} id='img' />
                <h2>Id : {obj[0].id}</h2>
                <h2>Price : {obj[0].price}</h2>
                <h2>Information : {renderDescription()}</h2>
                <button onClick={toggleShowMore}>
                    {showMore ? "See less" : "See more"}
                </button>
            </div>
            <Footer />
        </>
    )
}
export default TourDetails;