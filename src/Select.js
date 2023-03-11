import React,{useState} from "react";

const Select = (props) => {

  const handleChange = (event) => {
    props.setSelectedValue(event.target.value);
  };
 
  const handleChange2 = (event) => {
    props.setSelectedValue2(event.target.value);
 
  };
  const[SelectValue1,setSelectValue1]=useState({
    opt1:'',
    opt2:'',
    opt3:'',
    opt4:'',
  })  
  const PostData = async(e)=>{
    e.preventDefault()
    const{opt1,opt2,opt3,opt4}=SelectValue1;
     fetch(`https://printf-in-5e5db-default-rtdb.firebaseio.com/ ${props.name}.json`,
      {
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({
        opt1,
        opt2,
        opt3,
        opt4,
      })
    })
  }
  return (
    <>
      <div className="card text-center" id='card2'>
        <div className="card-header">Select Your Print Type</div> 
        <div className="card-body2">
          <div className="form-check1">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="black and white" onClick={handleChange} onChange={(e) => setSelectValue1({...SelectValue1,
            opt1:e.target.value})}/>
            <label className="form-check-label" htmlFor="flexRadioDefault2">Black and White</label>
          </div>
          <div className="form-check2">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="color" onClick={handleChange} onChange={(e) => setSelectValue1({...SelectValue1,
            opt2:e.target.value})}/>
            <label className="form-check-label" htmlFor="flexRadioDefault2">Color</label>
          </div>
          <div className="form-check3">
            <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault3" value="front side only" onClick={handleChange2} onChange={(e) => setSelectValue1({...SelectValue1,
            opt3:e.target.value})}/>
            <label className="form-check-label" htmlFor="flexRadioDefault2">Front Side Only</label>
          </div>
          <div className="form-check4">
            <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault3" value="both sides" onClick={handleChange2} onChange={(e) => setSelectValue1({...SelectValue1,
            opt4:e.target.value})}/>
            <label className="form-check-label" htmlFor="flexRadioDefault2">Both sides</label>
          </div>
        </div>
      </div>
      <button onClick={PostData}>PUSH</button>
    </>
  )
}

export default Select;