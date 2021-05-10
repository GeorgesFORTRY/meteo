import styled from 'styled-components';

const SDate = styled.div`
  text-align: center;
  font-size: 30px;
`;
export default function CurrentDay() {
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
    <SDate>
      <div className="date">{dateBuilder(new Date())}</div>
    </SDate>
  );
}
