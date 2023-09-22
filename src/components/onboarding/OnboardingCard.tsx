export default function OnboardingCard(props: {
  currentStep: number;
  step: number;
  title: string;
  description: string;
}) {
  return (
  <>
      <link rel="stylesheet" href={process.env.PUBLIC_URL + '/css/onboarding.css'} />

      <div className={props.currentStep === props.step ? "cardsItem cardsItem-visible" : "cardsItem"} >
          <h2>{ props.title }</h2>

          <img className="cardsItem-img" alt="onboarding" src={`${process.env.PUBLIC_URL}/pictures/onboarding_step${props.step}.svg`}></img>
      
          <p>{ props.description }</p>
      </div>
  </>
  );
}