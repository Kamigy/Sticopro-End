import { useEffect } from "react";
import StatsCard from "../components/stats/StatsCard";
import { useAuth } from "../components/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Wrapper(props: any) {

    useEffect(() => {
        document.title = props.title;
    }, [props.title]);

    const navigate = useNavigate();
    
    const { isAuthenticated } = useAuth();

    return (
    <>
        <link rel="stylesheet" href={process.env.PUBLIC_URL + '/css/stats.css'} />  

        {isAuthenticated ? (
        <>
            <div className="carte stats">

            <p className="stats-description">Voici <span className="bold">quelques statistiques</span> sur votre utilisation de sticopro.</p>

            <div className="statsCards">
            <StatsCard isSpecial={false} title="Cartes vin" number={5} />
            <StatsCard isSpecial={false} title="Stickers différents" number={236} />
            <StatsCard isSpecial={true} title="Stickers scannés" number={900} />
            <StatsCard isSpecial={false} title="Stickers collés" number={345} />
            <StatsCard isSpecial={false} title="Visites de page" number={700} />
            <StatsCard isSpecial={false} title="Avis reçus" number={56} />
            </div>   
            </div>
        </>
        ) : (
            <div className="carte stats">
                <p>Vous devez être connecté pour accéder à cette page, <a onClick={() => navigate('/login')}>veuillez vous connecter</a></p>
            </div>
            
        )}
  
    </>
    );
}