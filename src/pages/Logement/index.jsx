import React, {  useNavigate, useParams } from 'react-router-dom';
import dataLogement from '../../data/logements.json';
import LogementContent from '../../components/LogementContent/LogementContent';
import { useEffect } from 'react';

function Logement() {
  const {id}= useParams();
 const navigate = useNavigate();
  const redirectLogement = dataLogement.filter(
    (logement) => logement.id === id
  );

  useEffect(() => {
    // Si finalLogement est vide, l'ID n'existe pas, rediriger vers la page d'erreur
    if (redirectLogement.length === 0) {
      navigate('/error'); 
    }
  }, [redirectLogement, navigate]);
 

  return (
    <main className='logement-container'>
    {redirectLogement.map((logement) => (
     <LogementContent key={logement.id} {...logement}/>
  ))}
    
    </main>
  );
}
export default Logement;
