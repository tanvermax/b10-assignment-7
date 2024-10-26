import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const Singleplayer = ({ selectedPlayer,handledeletplayer }) => {
  const {playerId, name, image, role } = selectedPlayer;
  return (
    <div className="flex justify-between border-[1px] m-1 p-3 rounded-xl mx-auto w-full">
    
      <div className="flex">
        <img className="h-16 w-16 m-5 rounded-full" src={image} alt="" />

        <div className="text-left my-5">
          <h4 className="text-2xl font-bold text-left">{name}</h4>
          <p className="font-bold text-gray-500">{role}</p>
        </div>
      </div> 
      <button onClick={()=>handledeletplayer(playerId)} className="mr-5">
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

Singleplayer.propTypes = {
    handledeletplayer: PropTypes.func,
  selectedPlayer: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    role: PropTypes.string,
    playerId: PropTypes.string,
  }).isRequired,
};
export default Singleplayer;
