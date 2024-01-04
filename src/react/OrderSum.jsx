import "../scss/grid.scss";
const items = [
  {
    title: "SEDANS",
    p: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
  },
  {
    title: "SUVS",
    p: "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
  },
  {
    title: "LUXURY",
    p: "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
  },
];

function OrderSum() {
  const listItems = items.map((item) => {
    return (
      <li key={self.crypto.randomUUID()}>
        <div>
          <div className="icon"></div>
          <h2>{item.title}</h2>
          <p>{item.p}</p>
        </div>
        <div>
          <button>
            <a href="#">Learn More</a>
          </button>
        </div>
      </li>
    );
  });

  return <ul className="container">{listItems}</ul>;
}

export default OrderSum;
