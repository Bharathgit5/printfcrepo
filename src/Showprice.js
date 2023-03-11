import React,{useState} from 'react';

const Showprice = (props) => {
  const [showTable, setShowTable] = useState(false);
let numpage=  props.count
let numcopies=  props.copies
let r1= props.selectedValue
let r2=props.selectedValue2
let price = (r1 === "black and white" && r2=== "front side only") ? 10 : (r1 === "black and white" && r2=== "both sides") ? 10 : (r1 === "color" && r2=== "front side only") ? 15 : (r1 === "color" && r2=== "both sides") ? 20:20
let Totalprice = numpage * numcopies * price 
          
console.log(props.selectedValue)
console.log(props.selectedValue2)

const PostData = async(e)=>{
  e.preventDefault()

  fetch(`https://printf-in-5e5db-default-rtdb.firebaseio.com/ ${props.name}.json`,
  {
    method:'POST',
    headers:{
      'Content-Type':'application/json',
    },
    body:JSON.stringify({
      Numberofpages: numpage,
      Numberofcopies: numcopies,
      Price:  price,
      totalprice:    Totalprice,
      
    })
  })
}

  return (
    <>
    <div className="card text-center" id='card3'>
    <div className="card-header">
      Make Your Payment
    </div>
   
  <div className="card-body3">
    <button type="button" className="btn btn-dark" id='showpricebtn' onClick={() => setShowTable(!showTable)} >
        Show Price $
      </button>
      {showTable && (
        <>
        <table>
        <tbody>
          <tr>
            <th>Number of Pages</th >
            <th>Number of Copies</th >
            <th>Price</th >
            <th>Total Price</th>
          </tr>
          </tbody>
          <tbody>
          <tr>
           <td>{numpage}</td>
            <td> {numcopies}</td>
            <td>{price}</td>
            <td>{Totalprice}</td>
               </tr>
          </tbody>
        </table>
         <button type="button" className="my-auto btn btn-success" id='checkoutbtn'>Checkout
         </button>
         <button onClick={PostData}>PUSH</button>
 <button onClick={props.onClick}>click me</button>
         </>
      )}

  </div>
  </div>
  </>
  );
}
export default  Showprice