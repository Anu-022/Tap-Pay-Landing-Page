import {FaMinus, FaPlus} from "react-icons/fa"
const AccordionItem = ({faq, handleToggle, toggle}) => {
    const {id, question, answer} = faq
    return (
        <div className="accordion-item">
           <div className="accordion-question" onClick={()=>handleToggle(id)}>
            {question}
            {id === toggle ? <span><FaMinus/></span> : <span><FaPlus /></span> }
        </div>
        {id === toggle && <div className="accordion-answer">
            <div className ="rule"></div>
            <p>{answer}</p>
            </div>}
        
     </div>
    )
}
export default AccordionItem;