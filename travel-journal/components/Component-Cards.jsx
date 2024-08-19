import locationimage from "../assets/location-img.png";

export default function Cards(props) {
  return (
    <div className="card-main-flex">
      <img className="main--img" src={props.image} alt="" />
      <div className="cars--details">
        <div className="map--flex">
          <img src={locationimage} alt="" />
          <p className="map--place"> {props.destination} </p>
          <a href="">View on {props.viewOn}</a>
        </div>
        <h1 className="main--card-place">{props.location}</h1>
        <h2 className="from-to-date"> {props.date} </h2>
        <p className="place--bio">{props.details}</p>
      </div>
    </div>
  );
}
