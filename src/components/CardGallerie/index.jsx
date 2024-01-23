
import Card from '../../components/Card';
import Logement from '../../data/logements.json';



export default function CardGalerrie(){

  const listCard = Logement.map((logement) => (
    <Card
      key={`${logement.id}`}
      href={logement.id}
      cover={logement.cover}
      title={logement.title}
      
    />))

    return(
        <div className="cardGalerry">
        {listCard}
      </div>
    )
}




