import Singleplayer from "../../Singleplayer/Singleplayer";
import PropTypes from "prop-types";


const Selectedplayer = ({handleshowallPlayer,selectedPlayer,handledeletplayer}) => {

    const ready = selectedPlayer.length;
    return (
        <div className="text-left">
            <div className="py-4">
                  <h1 className="text-3xl font-bold py-2">Selected player : 6/ {ready}</h1>

                {
                    selectedPlayer.map( (selectedPlayer, idx)=> <Singleplayer handledeletplayer={handledeletplayer} key={idx} selectedPlayer={selectedPlayer} ></Singleplayer>)
                }

            </div>
            <button className="btn bg-[#E7FE29]" onClick={handleshowallPlayer}>Addmore more player</button>

        </div>
    );
};


Selectedplayer.propTypes = {
    selectedPlayer: PropTypes.array.isRequired,
    handleshowallPlayer: PropTypes.func.isRequired,
    handledeletplayer: PropTypes.func,
    ready: PropTypes.number.isRequired
  };
  

export default Selectedplayer;