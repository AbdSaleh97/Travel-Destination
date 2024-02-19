
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithubAlt, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
        <section id='footer'>
            <div class='author'>
                <h2>Author: Abdelrahman Saleh</h2>
            </div>
            <div className="social-icons">
                <a href="#" class="icon"> <FontAwesomeIcon icon={faTwitter} /></a>
                <a href="#" class="icon"> <FontAwesomeIcon icon={faGithubAlt} /></a>
                <a href="#" class="icon"> <FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="#" class="icon"> <FontAwesomeIcon icon={faInstagram} /></a>
            </div>
        </section>
    );
}
export default Footer;