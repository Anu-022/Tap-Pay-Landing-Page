import HeroImage from '../assets/hero.svg'
import Button from './Button';
const ShowCase = () => {
    return (
        <div className="showcase">
            <div className="showcase-hero">
                <div className="showcase-text">
                    <h1>Easy Banking with 
                        <br/>
                        <span className='text-highlight'> Seamless </span>
                        and 
                        <span className='text-highlight'> Flexible </span>
                        Payment
                    </h1>
                   <p>Save and make payments with just a single magical tap.</p>
                   <Button version="cta">Get Started</Button>
                </div>
                <div className="showcase-image">
                   <img className= "hero-image" src={HeroImage} alt="woman-shopping"/>
                </div>
           </div>
        </div>
    )
}
export default ShowCase;
