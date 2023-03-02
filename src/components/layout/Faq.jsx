import Accordion from "./Accordion";
const Faq = () => {
    return (
        <div className="faq">
            <h4 className='heading'>
                <span className='heading-line'></span>
                FAQ
            </h4>
            <h2 className="header-text">Frequently asked questions</h2>
            <Accordion />
        </div>
    )
}
export default Faq;