import card from "../assets/card-icon.svg"
import Qr from "../assets/qr-icon.svg"
const Details = () => {
    return (
        <div className="details">
            <h4 className='heading'>
                Features
            </h4>
            <div className="details-text">
                <h2 className="header-text">Enjoy multiple options at your fingertips.</h2>
                
                  <div className="horizontal-rule"></div> 
                  <p>Cashless policy? No worries we got you
                      <br/>
                      covered.
                  </p>
            
            </div>
            
            <div className ="card-details">
                <div className="ussd-info">
                    <h3>Ussd</h3>
                    <p className="card-text">Fast withdrawal, save ,send or make payment with our quick link ussd code</p>
                    <p className="ussd-code">*222#</p>
                </div>
                
                <div className="card-info">
                    <h3>Unit Card</h3>
                    <p className="card-text">Magical Pay with just a single tap with our card.</p>
                    <img src={card} alt="Tap'pay-card" />
                </div>
                <div className="qr-info">
                    <h3>Qr Code</h3>
                    <p className="card-text">Easy scan to make swift payments without network wahala.</p>
                    <img src={Qr} alt="qr-code" className="qr-image"/>
                </div>
            </div>
       
        </div>

    )
}
export default Details;
