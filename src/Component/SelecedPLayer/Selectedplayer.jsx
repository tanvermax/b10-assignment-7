import Singleplayer from "../../Singleplayer/Singleplayer";
import PropTypes from "prop-types";


const Selectedplayer = ({handleshowallPlayer,selectedPlayer,handledeletplayer}) => {
    return (
        <div className="text-left">
            <div className="py-4">
                {
                    selectedPlayer.map( (selectedPlayer, idx)=> <Singleplayer handledeletplayer={handledeletplayer} key={idx} selectedPlayer={selectedPlayer} ></Singleplayer>)
                }

            </div>
            <button className="btn bg-[#E7FE29]" onClick={handleshowallPlayer}>Addmore more player</button>

        </div>
    );
};


Selectedplayer.propTypes = {
    selectedPlayer: PropTypes.object.isRequired,
    handleshowallPlayer :PropTypes.func.isRequired,
  };
  

export default Selectedplayer;