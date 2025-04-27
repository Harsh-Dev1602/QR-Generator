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
      alert("Pleas enter a  your text or URL...")
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
        <div style={{ minHeight: "100vh" }} className="w-full h-screen bg-[#FFF8DB] flex justify-center items-center" id="bg-Img">
        <div style={{ maxHeight: "100vh" }} className="w-[90%]  sm:w-[450px] h-auto shadow-md shadow-[#cccc] py-[50px] px-[15px] rounded-md bg-sky-400 space-y-4 overflow-y-auto ">
          <h1 className="text-xl  xl:text-2xl text-black  text-center font-bold">Please enter a your text or URL</h1>

          <input
            className="w-full h-[60px] text-[20px] font-semibold  p-[10px] outline-none shadow-inner bg-[#ffffffe0]  rounded-md shadow-[#ccc] "
            type="text"
            placeholder="Text or URL"
            id="qrText"
          />

          <div className="w-full h-auto ">
                 <img src="" className="mx-auto w-[80%] p-[1px] rounded-md "  id="imgQR"/>
          </div>

          <button onClick={genQRCode} className="w-[80%] mx-[10%] bg-black p-[20px] font-bold text-xl text-white rounded-xl   active:bg-[#696969b2] transition-all duration-100">
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
