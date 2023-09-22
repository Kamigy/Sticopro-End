import React ,{ useEffect, useState } from 'react';
import { SecondaryButton } from '../components/SecondaryButton';
import axios from 'axios';
import { NavLink, useLocation } from 'react-router-dom';

export default function Wrapper(props: any) {
  const location = useLocation();
  const [wineCards, setWineCards] = useState<any[]>([]);

  
  const wineBottleID = location.pathname.slice(location.pathname.lastIndexOf("/")).replace('/', '');
  console.log(wineBottleID);


  useEffect(() => {
    document.title = props.title;

    // Fonction pour récupérer les données QR code et le titre
    const fetchData = async () => {
      try {
        // const qrCodeResponse = await axios.get('http://10.25.130.204:1337/api/qr-code-bottles', {
        //   headers: {
        //     'Authorization': `Bearer 4c43f2cd8b5eafb2f12e69fc45e83162db7fd008556456ea5df39515ebd53458e4ef8fba342337ca6bcaab7bbe0028947fafffe6c9e24129a802e92f6d12a5a6f7612ed7ef18e6b793efe14288f43afd714895deda87c70306c23eb03fda869f6266882e9eb802ec267deef8d8d19f1c216efd095bc9cedec13c0e03aa0559ee`,
        //   },
        // });
        // console.log(qrCodeResponse.data);
        
        
        // Récupérer le titre depuis les données QR code (ajuster selon votre structure de données)

        // Récupérer les données de bouteilles de vin
        const wineResponse = await axios.get('http://10.25.130.204:1337/api/wine-bottles', {
          headers: {
            'Authorization': `Bearer 4c43f2cd8b5eafb2f12e69fc45e83162db7fd008556456ea5df39515ebd53458e4ef8fba342337ca6bcaab7bbe0028947fafffe6c9e24129a802e92f6d12a5a6f7612ed7ef18e6b793efe14288f43afd714895deda87c70306c23eb03fda869f6266882e9eb802ec267deef8d8d19f1c216efd095bc9cedec13c0e03aa0559ee`,
          },
        });
        console.log(wineResponse.data);
        console.log(wineResponse.data.data.filter((wine :any) => wine.id == wineBottleID));
        setWineCards(wineResponse.data.data.filter((wine :any) => wine.id == wineBottleID));
      } catch (error) {
        console.error('Erreur lors de la récupération des données', error);
      }
    };

    fetchData(); // Appel de la fonction pour récupérer les données lors du chargement du composant
  }, [props.title]);

  return (
    <>
      <link rel="stylesheet" href={process.env.PUBLIC_URL + "/css/advice.css"} />

      <div className="main">
        <h1>Sticopro</h1>
        <div className="cards">
          <div className="heading">
            <h2 className="title">Les conseils du caviste</h2>
          </div>
          <div className="video">
            {/* <video controls src={process.env.PUBLIC_URL + "/video/138891.mp4"}></video> */}
            <img src= {process.env.PUBLIC_URL +"/pictures/sticopro--caviste.jpg"} alt="" />
          </div>
          <div className="wrapper">
            {wineCards.map((wine) => (
                <h2 key={wine.id}>{wine.attributes.Name}</h2>
            ))}
            <p className="text">Proposé par Wine in Ze City</p>
            <div className="content d-flex">
              <img src={process.env.PUBLIC_URL + "/pictures/sticopro--rating.svg"} alt="" />
              <p className="text"><strong>4.8</strong> (230)</p>
              <a href="/establishment">Voir l'etablissement</a>
            </div>
            <div className="description">
              <h2 className="title-description">Description</h2>
              {wineCards.map((wine) => (
                <p className="text">{wine.attributes.Description}<strong>En savoir plus</strong></p>
              ))}
            </div>
          </div>
        </div>
        <SecondaryButton title="Partager ce vin" onClick={() => { console.log("Bouton cliqué par défaut"); }} />
      </div>
    </>
  );
}
