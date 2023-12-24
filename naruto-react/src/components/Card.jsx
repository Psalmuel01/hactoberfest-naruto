const Card = ({ name, img, text, text2 }) => {
  return (
    <div>
      <div className="flip-card good">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h2 className="card-title ">{name}</h2>
            <img src={img} alt={name} height="330px" width="300px" />
          </div>
          <div className="flip-card-back">
            <p className="card-text">{text}</p>
            <p>{text2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
