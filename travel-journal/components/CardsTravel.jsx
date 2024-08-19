import Cards from "./Component-Cards.jsx";
import carddata from "../data/card-data.jsx";

export default function CardsTravel() {
  return (
    <section className="travel--flex-sec">
      {carddata.map((items, index) => (
        <Cards key={items.id} {...items} />
      ))}
    </section>
  );
}
