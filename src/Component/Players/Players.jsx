import Player from "../Player/Player";
import PropTypes from "prop-types";


const Players = ({players,handleChooseplayer}) => {
 
  
  return (
    <div>
      <div className="mx-auto max-w-[1320px] py-10 ">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">Available Player : {players.length}</h2>
          <div className="">
            
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {
        players.map( players=> <Player key={players.playerId} handleChooseplayer={handleChooseplayer} players={players}></Player>)
          }
        </div>
      </div>
    </div>
  );
};

Players.propTypes = {
    players: PropTypes.func.isRequired,
  handleShowSelected: PropTypes.func.isRequired,
  handleSelected: PropTypes.func,
};

export default Players;
