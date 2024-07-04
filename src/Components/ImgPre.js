import React, { useRef, useState } from "react";
function ImgPre() {
  let labelRef = useRef();
  let size;
  let [imgSrc, setImgSrc] = useState("./Images/upload.jpeg");
  return (
    <div>
      <div>
        <form>
          <h1>UPLOAD YOUR IMAGE</h1>
          <div>
            <div className="topContainer">
              <img className="imgFrame" src={imgSrc}></img>
              <div>
                <label>Upload Image</label>
                <input
                  type="file"
                  onChange={(eo) => {
                    
                    //console.log(eo.target.files[0]);
                    let path = URL.createObjectURL(eo.target.files[0]);
                    //console.log(path);
                    
                    size = (eo.target.files[0].size)/1024;
                    
                    if(size<3000){
                      setImgSrc(path);
                      labelRef.current.innerHTML =` your file size is ${ ((size).toFixed(2))} kb.`
                    }
                    else{
                      alert("your image size is more than 3mb.please resize it")
                    }
                  }}
                ></input>
              </div>
              <h3 ref={labelRef}></h3>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ImgPre;
