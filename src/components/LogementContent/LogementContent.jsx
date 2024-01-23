import Carousel from '../Carousel';
import Collapse from '../Collapse';
import Host from '../Host';
import Rating from '../Rating';

import Tag from '../Tag';
export default function LogementContent({ ...logement }) {
  return (
    <main className="lgm">
      
      <section className='lgm__carousel' >
        <Carousel  images={logement.pictures}/>
      </section>
        
      <section className="lgm__info">
        <div className='info location-tag'>
          <div className='location'>
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
          </div>
          <Tag tags={logement.tags} />
        </div>
<div className=' info host-rating'>
    <Host
          nameHost={logement.host.name}
          pictureHost={logement.host.picture}
        />
    
        <Rating  rating={logement.rating}/>
</div>
      
      </section>
      <section className="lgm__collapse">
        <Collapse details={logement.description} title={'description'} />
        <Collapse
          details={logement.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
          title={'equipements'}
        />
      </section>
    </main>
  );
}
