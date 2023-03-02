import Nav from "./components/layout/Nav";
import Showcase from "./components/layout/Showcase";
import Features from "./components/layout/Features"
import Process from './components/layout/Process'
import Description from "./components/layout/Description";
import Testimonial from "./components/layout/Testimonial";
import Agents from "./components/layout/Agents"
import Faq from "./components/layout/Faq";
import Footer from "./components/layout/Footer";
function App() {
  return (
    <div>  
      <Nav/>   
      <Showcase/> 
      <Features />
      <Process />
      <Description />
      <Testimonial />
      <Agents />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
