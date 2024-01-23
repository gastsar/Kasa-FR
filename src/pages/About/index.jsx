
import Banner from '../../components/Banner';
import bannerImage from '../../assets/baner_2.png';
import Collapse from '../../components/Collapse';

function About() {

const companyValues =  [
  {title: 'Fiabilité', details: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."},
  {title: 'Respect', details: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."},
  {title: 'Service', details: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."},
  {title: 'Sécurité',details: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."}
];

  return (
    <main className='about-container'>
    <Banner src={bannerImage} />
    <article className='about-collapse'>
       {companyValues.map((about, index)=>{
        return(
           <Collapse key={index} 
           details={about.details} 
           title={about.title}/>  
        )
      }
      )}   
    </article>
     
    </main>
  );
}

export default About;
