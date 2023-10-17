import { useEffect, useState } from "react";
import { SecondaryButton } from "../components/SecondaryButton";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { SelectOptionList } from '../components/SelectOptionList';
import { useAuth } from "../components/AuthContext";

export default function Wrapper(props: any) {

  const [activeFilter, setActiveFilter] = useState<string>("");
  const [wineCards, setWineCards] = useState<any[]>([]);
  const [activeType, setActiveType] = useState<string>("");

  const navigate = useNavigate();

  const { isAuthenticated } = useAuth();
  useEffect(() => {
    document.title = props.title;
    const fetchWineCards = async () => {
      try {
        const response = await axios.get('http://10.25.130.204:1337/api/wine-bottles?populate=*', {
          headers: {
            'Authorization': `Bearer 4c43f2cd8b5eafb2f12e69fc45e83162db7fd008556456ea5df39515ebd53458e4ef8fba342337ca6bcaab7bbe0028947fafffe6c9e24129a802e92f6d12a5a6f7612ed7ef18e6b793efe14288f43afd714895deda87c70306c23eb03fda869f6266882e9eb802ec267deef8d8d19f1c216efd095bc9cedec13c0e03aa0559ee`,
          },
        });
        console.log(response.data)
        setWineCards(response.data.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données', error);
      }
    };
    fetchWineCards();
  }, [props.title]);

  return (
    <>
      <link rel="stylesheet" href={process.env.PUBLIC_URL + '/css/home.css'} />

      <div className="title">Mes cartes vins</div>

      
        <>
          <div>

          <div className="filterOptions">
            {["Rouge", "Blanc", "Rosé"].map((filter) => (
              <div
                key={filter}
                className={`filterOption ${filter === activeFilter ? "active" : ""}`}
                onClick={() => setActiveFilter(filter)}>
                {filter}
              </div>
            ))}
          </div>

        <div className="select-container">
          <select onChange={(e) => setActiveType(e.target.value)}>
            <option value="">Tous les types</option>
            {/* Vous pouvez ajouter d'autres options en fonction des types de vins disponibles */}
            <option value="Mousseux">Mousseux</option>
            <option value="Tranquille">Tranquille</option>
            <option value="Autre">Autre</option>
          </select>
        </div>


        { wineCards.length === 0 
          ?
          <p>Tu n’as ajouté <b>aucun vin {activeFilter}</b> dans la catégorie “{activeFilter}”. Ajoute ton <b>premier {activeFilter}</b> en cliquant sur le bouton ci-dessous !</p>
          :
          <div className="wineCardsContainer">
            {
              wineCards
                .filter(card => card.attributes.Color === activeFilter)
                .filter(card => activeType ? card.attributes.Type === activeType : true)
                .map((card, index) => (
                  <div key={index} className="wineCard">
                    <img src={`${card.attributes.Image?.data?.attributes.url}`} alt={card.attributes.Name} />
                    <div>{card.attributes.Name}</div>
                  </div>
                ))
            }
          </div>
        }

          <SecondaryButton title="Ajouter une carte vin" onClick={() => navigate('/addcard')}/>
          </div>
        </>
    </>
  );
}