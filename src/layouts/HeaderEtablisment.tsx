export const Header = (props: any) => (
  <>
    <link rel="stylesheet" href={process.env.PUBLIC_URL + '/css/components/header.css'} />

    <header className="header">

      <img src={process.env.PUBLIC_URL + '/pictures/sticopro--glass-iso-color.svg'} alt="arrow"/>

      <div className="title">

        {props.title}

      </div>
        
    </header>
  </>
);