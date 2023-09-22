import { useEffect, useState } from "react";
import { SecondaryButton } from "../components/SecondaryButton";
import OnboardingCards from "../components/onboarding/OnboardingCards";
import { useNavigate } from "react-router-dom";

export default function Wrapper(props: any) {
    
    const [currentStep, setCurrentStep] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        document.title = props.title;
    }, [props.title]);

    return (
    <>
        <link rel="stylesheet" href={process.env.PUBLIC_URL + '/css/onboarding.css'} />

        <div className="main">

            <h1>sticopro</h1>

            <OnboardingCards currentStep={currentStep} />

            <div className="buttons">

                <SecondaryButton 
                    title={ currentStep === 3 ? "C'est parti !" : "Continuer"}
                    onClick={() => currentStep < 3 ? setCurrentStep(currentStep + 1) : navigate('/login') } />

                <button 
                    className="nextButton" hidden={currentStep === 1} 
                    onClick={() => {if (currentStep > 1) setCurrentStep(currentStep - 1)}}
                    >Revenir</button>

            </div>
            
        </div>
    </>
    );
}