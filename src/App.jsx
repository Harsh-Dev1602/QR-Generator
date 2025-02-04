import React, { useEffect, useState } from "react";
import Loading from './Loading/Loading'
function App() {

  function genQRCode(){
    let qrTextEle = document.getElementById("qrText");
    
    if(qrTextEle.value.length>0){
      let imgEle = document.getElementById("imgQR");
      imgEle.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrTextEle.value}`;
      qrTextEle.value= "";  
    }
    else{
      alert("Pleas Enter a  your text or URL...")
    }
  }
  const [loading, setLoading] = useState(true);

useEffect(() => {
  setTimeout(() => {
    setLoading(false);
  }, 2000);
}, []);
  return (

    <>
     {loading ? (
        <Loading/>
      ) :(
        <div className="w-full h-screen bg-[#FFF8DB] flex justify-center items-center" id="bg-Img">
        <div className="w-[450px] h-auto shadow-md shadow-black py-[50px] px-[15px] rounded-xl bg-sky-300 space-y-4 ">
          <h1 className="text-2xl text-black  text-center font-bold">
            Please Enter a your Text or URL
          </h1>

          <input
            className="w-full h-[60px] text-[20px] font-semibold  p-[10px] outline-none shadow-inner bg-white  rounded-md shadow-black "
            type="text"
            placeholder="Text or URL"
            id="qrText"
          />

          <div className="w-full h-full ">
                 <img src="" className="mx-auto w-[60%] p-[1px] rounded-md "  id="imgQR"/>
          </div>

          <button onClick={genQRCode} className="w-full bg-black p-[20px] font-bold text-xl text-white rounded-full hover:text-white  active:bg-[#87A2FF] transition-all">
            Gen QR Code
          </button>
        </div>
      </div>
      )
    }
    </>
  );
}

export default App;
