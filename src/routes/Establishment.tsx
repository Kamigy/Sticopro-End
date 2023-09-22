import { useEffect } from "react";
import { Header } from "../layouts/HeaderEtablisment"
import { PrimaryButton } from "../components/PrimaryButton";

export default function Wrapper(props: any) {

  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  return (
    <>
        <link rel="stylesheet" href={process.env.PUBLIC_URL + "/css/establishment.css"}/>

        <Header className="header"/>

        <div className="containers">

            <div className="row">

                <div className="col-12">

                    <div className="wrapper d-flex flex-column align-items-center">

                        <div className="svg">
                            <img src= {process.env.PUBLIC_URL +"/pictures/sticopro--logo-cave-eclaire.svg"} alt="" />
                        </div>

                        <div className="heading">
                            <h1> La cave éclairée </h1>
                            <h2 className="subtitle"> Bar à vin - Caviste </h2>
                        </div>

                        <div className="image">
                            <img src= {process.env.PUBLIC_URL +"/pictures/sticopro--caviste.jpg"} alt="" />
                            <div className="content d-flex">
                                <img className="svg--spe" src= {process.env.PUBLIC_URL +"/pictures/sticopro--map-icon.svg"} alt="" />
                                <p className="place">33 Rue Aimé Levet - Annecy</p>
                            </div>
                        </div>

                    </div>

                    <div className="inner">

                        <div className="title--description">
                            <h3>Un passioné de vin...</h3>
                        </div>

                        <div className="description">
                            <p className="text">Je suis Jérôme, amoureux et passioné de vin depuis des dizaine d’années. Je tiens la cave Wine in ze City sur Annecy et vous accueillerait avec plaisir !</p>
                        </div>

                    </div>

                    <PrimaryButton title="Visiter le site" onClick={() => window.open("https://lacave-eclairee.fr/", "_blank")}/>

                </div>

            </div>
            
        </div>
    </>
  );
}
