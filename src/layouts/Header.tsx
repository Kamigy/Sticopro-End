export const Header = ({ title, picture }: any) => (
  <>
    <link rel="stylesheet" href={process.env.PUBLIC_URL + '/css/components/header.css'} />

    <header className="header">

      <img src={process.env.PUBLIC_URL + '/pictures/arrow.png'} alt="arrow"/>

      <div className="title">

        {title}

      </div>
        
    </header>
  </>
);