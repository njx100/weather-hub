import "./style.css";

const City = ({ name, temperature, weatherStatus }) => {
  const cardClassName = `city-card city-card-${weatherStatus}`;
  return (
    <div className={cardClassName}>
      <div className="city-info">
        <div className="city-name">{name}</div>
        <div>{temperature}</div>
      </div>
    </div>
  );
};

export default City;
