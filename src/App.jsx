import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import { useState } from "react";
import profile from './../assets/logo.png'
import anner from './../assets/banner-main.png'
import coin from './../photo/icons8-coin-96.png'
import fotr from './../assets/logo-footer.png'
import './App.css'
import Players from './Component/Players/Players'
import Selectedplayer from "./Component/SelecedPLayer/Selectedplayer";


function App() {
  const [players, setPlayer] = useState([]);

  useEffect(() => {
    fetch("dreamxi.json")
      .then(res => res.json())
      .then(data => setPlayer(data));
  }, []);
  const [clicktoClaim, setClicktoclaim] = useState(0);

const handleClikedtoclaim=()=>{
  
  toast.success("Wow succesfully claimed");
  

  let newmoney = clicktoClaim + 6000000;
    setClicktoclaim(newmoney);
}

const [selectedPlayer, setSelectplayer] = useState([]);


const handleChooseplayer = ( price, player ) => {
  if (selectedPlayer.length>= 6) {
    toast.error("Player limit reached. You cannot select more than 6 players.");
    
    return;
  
  }


  // console.log("hello behn ki lore");

  if (clicktoClaim > 0 && price <= clicktoClaim) {

    const updatedAmount = clicktoClaim - price;
    setClicktoclaim(updatedAmount);

    const newPlayer = [...selectedPlayer ,player]
    setSelectplayer(newPlayer);
  } 
  else {
    toast.error("you have insufficient funds, click the  claim free credit in top");

    // alert("you have insufficient funds, click the  claim free credit in top")
    // toast.error(
    //   "you have insufficient funds, click the  claim free credit in top",
    //   {
    //     position: "top-center",
    //   }
    // );

    // alert("you have bot suuffeciant mone click claim free credit");
  }
};

const [showSelected, setShowselected] = useState(false);

const handleShowSelected=()=>{
  // console.log("aded");
  
  setShowselected(true);
}
const handleshowallPlayer= ()=>{

  setShowselected(false);


}

const handledeletplayer =(playerId)=>{
 
  
  const remaining = selectedPlayer.filter(selectedPlayer=>selectedPlayer.playerId !== playerId)
  setSelectplayer(remaining);
}




  return (
    <>
    {/* <ToastContainer /> */}

    <div className='mx-auto max-w-[1320px] py-5   '>
      
      <div className='sticky top-0 w-full z-10  ' >
      <div className="navbar flex justify-between backdrop-blur-2xl  max-w-[1320px]  bg-transparent ">
        <div className=" ">
          <img src={profile} alt="" />
        </div>
        <div className="">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className='font-bold text-base text-black'>Home</a>
            </li>
            <li>
              <a className='font-bold text-base text-black'>Fixture</a>
            </li>
            <li>
              <a className='font-bold text-base text-black'>Teams</a>
            </li>
            <li>
              <a className='font-bold text-base text-black'>Schedules</a>
            </li>
           
          </ul>
          <button className='btn font-semibold text-base soraa'>Coin {clicktoClaim}<img className='h-8' src={coin} alt="" /></button>
        </div>
      </div>
      </div>
       {/* banner section */}
       <div className=''>
         <div className="banner p-10 py-10 mx-auto max-w-[1320px]">
            <div>
            <img className=' mx-auto ' src={anner} alt="" />
            <h1 className='py-5 text-[#FFFFFF] text-[40px] font-bold '>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className='pb-5 font-normal text-[24px] text-[#FFFFFFB3]'>Beyond Boundaries Beyond Limits</p>
            <div  onClick={handleClikedtoclaim} className=' border-2 border-yellow-400 h-[60px] w-[160px] p-1 rounded-xl mx-auto '><button className='bg-[#E7FE29] btn  rounded-md items-center border-spacing-1 box-border  '>Claim Free Credit</button>
            </div>
            
            </div>
        </div>
        
       </div>
       <div className="sticky  top-20 flex justify-end py-5">
          <button onClick={handleshowallPlayer} className="btn  bg-[#E7FE29] mr-3">Available </button>
          <button onClick={handleShowSelected}  className="btn ">Selected {selectedPlayer.length}</button>
        </div>
{/* main funtinal sesction */}

      {
        showSelected ? (<Selectedplayer handledeletplayer={handledeletplayer} selectedPlayer={selectedPlayer} handleshowallPlayer={handleshowallPlayer} ></Selectedplayer>):( <Players players={players}  handleChooseplayer={handleChooseplayer}></Players>)
      }
     
     
    </div>
 {/* footer */}
 <div className="  ">
     <div className="border-2 max-w-[1320px] mx-auto backdrop-blur top-32 p-5 rounded-xl relative bottom-10">
     <div  className="mx-auto max-w-[1320px] footer-bg text-center ">
        <h2 className="py-1 text-4xl font-bold texy-[#131313]">
          Subscribe to our Newsletter
        </h2>
        <p className="text-xl text-[#131313B3]">
          Get the latest updates and news right in your inbox!
        </p>
        <div className="py-5">
          <input
            type="email"
            className="mr-3 h-[56px] w-[400px] border-[1px] p-2 px-4 rounded-xl"
            placeholder="Enter your email"
            name=""
            id=""
          />
          <button className="subbtn">Subscribe</button>
        </div>
      </div>
     </div>
      <div className="lastftr ">
        <img className="mx-auto pt-32" src={fotr} alt="" />
        <footer className="footer  text-base-content py-10  mx-auto max-w-[1320px]">
          <nav>
            <h6 className="text-xl font-bold">About Us</h6>
            
            <p className="text-left w-[290px] text-base ">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </nav>
          <nav>
            <h6 className="text-xl font-bold">Quick Links</h6>
            <ul className="text-left text-[#FFFFFF99] text-base">
                <li><a href="">Home</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact us</a></li>
            </ul>
            
          </nav>
         
          <form className="pl-40" >
            <h6 className="text-xl text-white font-bold">Subscribe</h6>
            <p className="text-base text-left text-[#FFFFFF99] pr-16">Subscribe to our newsletter for the latest updates.</p>
            <fieldset className="form-control w-80">
              
              <div className="join">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered join-item h-[56px]"
                />
                <button id="extra" className="subbtn">Subscribe</button>
              </div>
            </fieldset>
          </form>
        </footer>
      </div>
      <ToastContainer 
      position="top-center"/>
    </div>
    </>
  )
}

export default App
