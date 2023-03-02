import faqData from "../faqdata";
import AccordionItem from "./AccordionItem";
import { useState } from "react";
const Accordion = () => {
    const [toggle, setToggle] = useState();

    const handleToggle = (id) => {
      if(toggle ===  id) {
         setToggle();
      } else {
          setToggle(id);
      }
    }
    return (
        <div className="accordion">
                {faqData.map((faq)=> (
                 <AccordionItem key={faq.id} faq={faq} handleToggle={handleToggle} toggle={toggle} />   
                )
                )}        
            
        </div>
    )
}
export default Accordion;