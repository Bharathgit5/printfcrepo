import React, {useContext,useState} from 'react'
import CopiesContext from './CopiesContext'
import { storage } from "./firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";



const Uploadcomp = ({ passCount },props) => {
  const {setCopies} = useContext(CopiesContext)
  const   Handlefile = ()=>{
    let x = document.getElementById('upload-file');
    let txt='';
    let file = x.files[0];
    if('name' in file){
      txt += 'fileName : ' + file.name;
    }
    if('size' in file){
      let kb = Math.round(file.size/1000);
      let mb = Math.round(kb/1000);
     if(kb<=1000){
      txt += ' |  Size :' + kb +'KB';
     }
     else if (mb<=1000){
      txt +='  |  Size :' + mb +'MB';
     }
    }
    document.getElementById('txt').innerHTML=txt;
   }
 
  const pdffunc = (event) =>{
    const reader = new FileReader();
    const fileInfo = event.target.files[0];
    if (fileInfo) {
         reader.readAsBinaryString(event.target.files[0]);
         reader.onloadend = () => {
          let matches = reader.result.match(/\/Type[\s]*\/Page[^s]/g);
          let count = matches ? matches.length : 1;
          let element = document.getElementById('info');
          if(element){
            element.innerHTML = count;
        }
             console.log('Number of Pages:', count);    
             passCount(count); 
         }
         }
        }
        const handleChange = (event) => {
          setCopies(event.target.value);
        }
            // State to store uploaded file
            const [file, setFile] = useState("");
         
            // progress
            const [percent, setPercent] = useState(0);
         
            // Handle file upload event and update state
            function handleChange1(event) {
                setFile(event.target.files[0]);
            }
         
              const handleUpload = () => {
                if (!file) {
                    alert("Please upload an image first!");
                }
         
                const storageRef = ref(storage, `/files/${file.name}`);
         
                // progress can be paused and resumed. It also exposes progress updates.
                // Receives the storage reference and the file to upload.
                const uploadTask = uploadBytesResumable(storageRef, file);
         
                uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                        const percent = Math.round(
                            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                        );
         
                        // update progress
                        setPercent(percent);
                    },
                    (err) => console.log(err),
                    () => {
                        // download url
                        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                            console.log(url);
                        });
                    }
                );
            };
  return (
    <>
     <div className="card text-center" id='card1' >
    <div className="card-header">
      Upload Your File
    </div>
    <div className="card-body1">
    <div className='uploadmain'>
   <div className='upload'>
  
        <button type='button' className='btn-upload'>
        <i className="bi bi-cloud-arrow-up"></i> Upload File 
        <input 
        type='file' id='upload-file' onChangeCapture={pdffunc} onInput={Handlefile} onChange={handleChange1} />
        </button>
     
      <p id='txt'></p>
    </div>
      
      <div className='upload2'>
      <i className="bi-bi-cloud-arrow-up2" style={{height:100}}></i>
      </div>
      <div className='container'>
      <div className='noofpages'>
     <b className='numpages'>Number of Pages:</b><p className='noofpagesbox' id='info'>1</p>
     </div>
   
     <div className='noofcopies'>
     <b className='numcopies'>Number of copies:</b><input  className='nocopiesbox' onChange={handleChange} ></input>
     </div> 
    <Uploadcomp onClick={handleUpload}/>
       <p>{percent} "% done"</p>
  </div>
  </div>
  </div>
  </div>
    </>      
    )
}
export default Uploadcomp