import icon2 from '../assets/features-icon2.svg'
const Process = () => {
    return (
        <div className="process">
            <h4 className='heading'>
                <span className='heading-line'></span>
                Process
            </h4>
            <h2 className='header-text'>How it works</h2>
            <img src={icon2} alt="process-icon" width="80%" className='process-icon' />
            <div className='process-info'>
                <div className='process-steps'>
                    <h3>Register</h3>
                    <p>Create an account with Tap'Pay</p>
                </div>
                <div className='process-steps'>
                    <h3>Complete Setup</h3>
                    <p>Upload necessary information</p>
                </div>
                <div className='process-steps'>
                    <h3>Bank</h3>
                    <p>Start saving and spending</p>
                </div>
            </div>

        </div>
    )
}

export default Process;