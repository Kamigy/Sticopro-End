import { useNavigate } from "react-router-dom";

export const Return = (props: any) => {

    const navigate = useNavigate(); 

    return (
      <>
        <link rel="stylesheet" href={process.env.PUBLIC_URL + '/css/components/return.css'} />
    
        <div className="top-left">
            <i className="fa-solid fa-chevron-left cursor" onClick={() => navigate(props.url)}></i>        
        </div>
      </>
    );
  };

