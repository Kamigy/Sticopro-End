import { NavLink, useLocation } from 'react-router-dom';

export const Footer = (props: any) => {
  const location = useLocation();
  const locationsWithFooter = ["/home", "/addcard", "/stats", "/flash", "/search", "/profile"];

  // Vérifier si l'emplacement actuel nécessite un pied de page
  const shouldDisplayFooter = locationsWithFooter.includes(location.pathname);

  if (!shouldDisplayFooter) {
    return null; // Rien à afficher
  }

  return (
    <>
      <link rel="stylesheet" href={process.env.PUBLIC_URL + '/css/components/footer.css'} />
    
      <footer className="footer">

        <div className="d-flex h-100 align-items-center justify-content-evenly">
        
          <NavLink to="/home">
            <i className="fa-solid fa-house"></i>
          </NavLink>
    
          <NavLink to="/stats">
            <i className="fa-solid fa-signal"></i>
          </NavLink>
    
          <NavLink to="/flash">
            <div className="hexagon">
              <img src={process.env.PUBLIC_URL + '/pictures/hexagon.svg'} alt="hexagon" />
              <i className="fa-solid fa-plus center-icon fa-lg"></i>
            </div>
          </NavLink>
    
          <NavLink to="/search">
            <i className="fa-solid fa-search"></i>
          </NavLink>
    
          <NavLink to="/profile">
            <i className="fa-solid fa-user"></i>
          </NavLink>

        </div>
        
      </footer>
    </>
  );
};
