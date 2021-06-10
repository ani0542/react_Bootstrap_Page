import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Navbar from './Components/Navbar';
import Showcase from './Components/Showcase';
import Newsletter from './Components/Newsletter';
import Boxes from './Components/Boxes';
import LearnSection from './Components/LearnSection';
import QuestionAccordion from './Components/QuestionAccordion';
import Instructors from './Components/Instructors';
import ContactMap from './Components/ContactMap';
import Footer from './Components/Footer';
import Accordiondata from './Components/Accordiondata';
import Accordion from './Components/Accordion';

function App() {
  return (
             <>
                 <Navbar/>
                 <Showcase/>
                 <Newsletter/>
                 <Boxes/>
                 <LearnSection/>
                 <QuestionAccordion/>
                 <Instructors/>
                 <ContactMap/>
                 <Footer/>

                 {/* <Accordiondata/> */}
                 {/* <Accordion/> */}
             </>
  )
}

export default App



//traversi media bootstrap
//36 Bootstrap 4 Flex in Hindi | Bootstrap Tutorial in Hindi - codingyan
//flexbox coders gyan
//flexbox w3 school
//shakhil khan resturant