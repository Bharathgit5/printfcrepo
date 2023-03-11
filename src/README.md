<button onClick={handleUpload}>submi</button>
import React, { useState} from 'react'
import Navbar from './Navbar';
import Carousel from './Carousel';
import Uploadcomp from './Uploadcomp';
import Select from './Select';
import Showprice from './Showprice';
import Howitwork from './Howitwork';
import Contact from './Contact';
import CopiesContext from './CopiesContext';
function Home(props) {
  const [count, setCount] = useState(0);
  const [copies, setCopies] = useState(0);
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedValue2, setSelectedValue2] = useState("");
 
  const handleCount = (count) => {
    setCount(count);
  }
 
  return (
    <>
   
     <Navbar/>
     <Carousel name={props.name}/>
    <CopiesContext.Provider value={{ copies, setCopies}}>
    <Uploadcomp  passCount={handleCount}/>
   
    <Select setSelectedValue={setSelectedValue} setSelectedValue2={setSelectedValue2} name={props.name}/>
   
    <Showprice selectedValue={selectedValue} selectedValue2={selectedValue2} count={count} copies={copies} name={props.name}/>
    </CopiesContext.Provider>
  
   <Howitwork/>
   <Contact/>
  
   </>
   
  );
}

export default Home;