export default function Results() {
  const dateBuilder = (d) => {
    const months = [
      'Janvier',
      'Février',
      'Mars',
      'Avril',
      'Mai',
      'Juin',
      'Juillet',
      'Août',
      'Septembre',
      'Octobre',
      'Novembre',
      'Décembre',
    ];
    const days = [
      'Dimanche',
      'Lundi',
      'Mardi',
      'Mercredi',
      'Jeudi',
      'Vendredi',
      'Samedi',
    ];

    const day = days[d.getDay()];
    const date = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div className="result">
      <div className="location-box">
        <div className="location">Lille, FR</div>
        <div className="date">{dateBuilder(new Date())}</div>
      </div>
      <div className="weather-box">
        <div className="weather-icon">image soleil</div>
        <div className="temp">20°C</div>
        <div className="weather">ensoleillé</div>
      </div>
      <div className="weather-details">
        <div className="temp-max">22°C</div>
        <div className="temp-min">15°C</div>
        <div className="wind">20 km/h</div>
        <div className="humidity">50%</div>
        <div className="sunrise">Lever 7h42</div>
        <div className="sunset">Coucher 19h18</div>
      </div>
    </div>
  );
}
