import { useLocation } from 'react-router-dom';

export const Main = (props: any) => {
  const location = useLocation();
  const locationsWithCarte = ["/home", "/addcard", "/stats", "/search"];

  const titleMap: { [key: string]: string } = {
    "/home": "Mes cartes vin",
    "/addcard": "Ajout d'une carte",
    "/stats": "Mon dashboard",
    "/search": "Mes recherches",
  };

  const currentTitle = titleMap[location.pathname];

  const shouldDisplayCarte = locationsWithCarte.includes(location.pathname);

  if (!shouldDisplayCarte) {
    return <>{props.element}</>;
  }

  return (
    <>
      <link rel="stylesheet" href={process.env.PUBLIC_URL + '/css/components/carte.css'} />

      <div className="title">{currentTitle}</div>

      <div className="carte">
        {props.element}
      </div>
    </>
  );
};
