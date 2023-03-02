import logo from "../assets/logo.svg"
import phoneIcon from "../assets/phone.svg"
import emailIcon from "../assets/email.svg"
import facebookIcon from "../assets/facebook.svg"
import instagramIcon from "../assets/instagram.svg"
import twitterIcon from "../assets/twitter.svg"
import footerImg from "../assets/footerImg.svg" 
const Footer = () => {
    const copyrightDate = new Date().getFullYear();
    return (
        <div className="footer">
            <div className="footer-img">
                <img src={footerImg} alt='download from playstore' width="100%" />
            </div>
            <div className="footer-content">
                <div>
                    <img src={logo} alt="brand-icon" width="132px" height="29px" />
                    <p className="footer-description">Easy Banking with seamless and flexible payment options.</p>
                </div>
                <div>
                    <h3>Company</h3>
                    <ul className="footer-list">
                        <li>Products</li>
                        <li>About us</li>
                        <li>Testimonials</li>
                    </ul>
                </div>
                <div>
                    <h3>Our Services</h3>
                    <ul className="footer-list">
                        <li>FAQ</li>
                        <li>Help Center</li>
                    </ul>
                </div>
                <div>
                    <h3>Products</h3>
                    <ul className="footer-list">
                        <li>USSD</li>
                        <li>unit Card</li>
                        <li>Qr Code</li>
                    </ul>
                </div>
                <div>
                    <h3>Get in Touch</h3>
                    <ul className="footer-list">
                        <li className="footer-icon"><img src={phoneIcon} alt="phone-icon"/>
                            +2322222222
                        </li>
                        <li className="footer-icon"><img src={emailIcon} alt="email-icon"/>
                            info@TapPay.com
                        </li>
                    </ul>
                </div>
            </div>
            <div className="social-items">
                <p>Join Social Platforms</p>
                <ul className="social-icons">
                    <li>
                        <img src={facebookIcon} alt="facebook-icon" width="40px"/>
                    </li>
                    <li>
                        <img src={twitterIcon} alt="twitter-icon" width="40px"/>
                    </li>
                    <li>
                        <img src={instagramIcon} alt="instagram-icon" width="35px"/>
                    </li>
                </ul>
            </div>
    
            <div className='copyright'>
               <p>Tap'Pay &copy;
                <span>{copyrightDate}. </span>
                All rights reserved.
               </p>
            </div>
        </div>
    
    )
}
export default Footer;