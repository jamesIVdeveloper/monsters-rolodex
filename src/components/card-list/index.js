import Card from "../card/index";
import "./card-list.css";

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monster={monster} key={monster.id} />;
    })}
  </div>
);

export default CardList;
