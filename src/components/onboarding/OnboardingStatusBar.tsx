export default function OnboardingStatusBar(props: {
  currentStep: number;
}) {
  return (
  <>
      <link rel="stylesheet" href={process.env.PUBLIC_URL + '/css/onboarding.css'} />

      <div className="statusBar">
        <span className={props.currentStep === 1 ? 'selected' : ''}></span>
        <span className={props.currentStep === 2 ? 'selected' : ''}></span>
        <span className={props.currentStep === 3 ? 'selected' : ''}></span>
      </div>
  </>
  );
}