import { useState, useEffect } from 'react';

export const Loader = (props: any) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, props.duration);

    return () => clearTimeout(timer); // Nettoyer le timer si le composant est démonté avant la fin du chargement.
  }, [props.duration]);

  return isLoading ? (
    <>
        <link rel="stylesheet" href={process.env.PUBLIC_URL + '/css/components/loader.css'} />
        
        <div className="loader">
            <div className="loader-container">
                <div className="loader-spinner"></div>
            </div>
        </div>
    </>
  ) : null;
};