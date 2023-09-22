import OnboardingCard from "./OnboardingCard";
import OnboardingStatusBar from "./OnboardingStatusBar";

export default function OnboardingCards(props: {currentStep: number}) {
    return (
    <>
        <link rel="stylesheet" href={process.env.PUBLIC_URL + '/css/onboarding.css'} />

        <div className="cards">
            <OnboardingStatusBar currentStep={props.currentStep} />

            <div className="cardsSlider">
            <OnboardingCard
              currentStep={props.currentStep}
              step={1}
              title="Créez votre établissement" 
              description="Une photo, une petite description, et c’est parti ! Votre cave sera disponible sur sticopro !"
            /> 

            <OnboardingCard
              currentStep={props.currentStep}
              step={2}
              title="Gérez vos cartes de vins" 
              description="Pour chaque fin, présentez à vos clients le vin, la cuvée, et toutes les infos que vous voulez !"
            /> 

            <OnboardingCard
              currentStep={props.currentStep}
              step={3}
              title="Récoltez des avis clients" 
              description="Récoltez un max d’avis clients et devenez le meilleur caviste sur sticopro !"
            /> 
            </div>
            
        </div>
    </>
    );
}