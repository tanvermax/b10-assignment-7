import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { faFlag } from "@fortawesome/free-solid-svg-icons";


import { useState } from "react";

const Player = ({ players,handleChooseplayer}) => {
  const { name, image, country, role, battingType, bowlingType, biddingPrice } =
    players;


    // const isSelected = selectedPlayers.some((selected) => selected.playerId === players.playerId);
    const [isSelected, setSlected] = useState(false);
    // const isSelected = selectedPlayers.some((selected) => selected.playerId === players.playerId);

    
    const handleMarekasclick = () => {
        if (isSelected) {
          
           
            alert("not available");
            
        //  
        }
         else {
          handleChooseplayer(biddingPrice, players); // Pass specific player here
          setSlected(true);
        }
      };


      
      
  return (
    <div className="mx-auto max-w-[1320px] my-5">
      <div className="border-[1px] p-4 rounded-2xl  ">
        <img className="rounded-lg " src={image} alt="" />

        <div className="flex gap-4 py-4 items-center">
          <FontAwesomeIcon className="text-2xl" icon={faUser} />

          <h2 className="text-xl font-semibold ">{name}</h2>
        </div>
        <div className="flex justify-between gap-2 py-2 items-center border-b-[1px]">
          <div className="flex  gap-2 py-2 items-center">
            <FontAwesomeIcon
              className="text-base font-normal text-gray-500"
              icon={faFlag}
            />
            <p className="text-base font-normal text-gray-500 ">{country}</p>
          </div>
          <button className="btn ">{role}</button>
        </div>
        <p className="text-[18px ] font-semibold text-left py-2">Rating</p>
        <div className="flex justify-between py-2 items-center">
          <p className="text-[18px ] font-semibold">{battingType}</p>
          <p className="text-[18px ] font-semibold">{bowlingType}</p>
        </div>
        <div className="flex justify-between py-2 items-center">
          <p className="text-[18px ] font-semibold">price : $ {biddingPrice}</p>
          <button className="btn" onClick={handleMarekasclick}>{isSelected ? "Player Chosen" : "Choose Player"}</button>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </div>
    
  );
};

Player.propTypes = {
    handleChooseplayer: PropTypes.func.isRequired,
    players: PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      battingType: PropTypes.string,
      bowlingType: PropTypes.string,
      biddingPrice: PropTypes.number.isRequired,
    }).isRequired,
  };

export default Player;
