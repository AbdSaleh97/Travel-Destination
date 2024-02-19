import './Home.css';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Tours from '../tours/Tours';
const data = require('../../data/db.json')
function Home() {
    return (
        <div>
            <Header />
           {data.map(el=>{
            return(
            <Tours name={el.name} image={el.image} />
            )
           })}
           <Footer/>
        </div>
    );
}
export default Home;    