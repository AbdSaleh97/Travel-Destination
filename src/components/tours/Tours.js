import './Tours.css';
import Tour from './tour/Tour.js'
const data = require('../../data/db.json')

function Tours() {
    return (
        <>
         {data.map(tour => {
                return (
                    <Tour key= {tour.id} tour ={tour} />
                )
            })}
        </>
           
    )
}
export default Tours;