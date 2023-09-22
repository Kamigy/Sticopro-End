import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";

export const HeaderProfile = (props: any) => {
  const navigate = useNavigate(); 

  const { logout } = useAuth();

  const handleLogOut = async () => {
    logout();
    localStorage.setItem("username", "");
    navigate('/login');
  };

  return (
    <>
      <link rel="stylesheet" href={process.env.PUBLIC_URL + '/css/components/headerProfile.css'} />

      <header className="header">
        
        <div className="position-absolute top-0 end-0 btn me-3 mt-4 fw-bold btnDeco" onClick={() => {handleLogOut()}}>Déconnexion</div>

        <div className="position-absolute top-100 start-50 translate-middle mb-3">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png" alt="" className="img-thumbnail rounded-circle img-taille" />
        </div>

      </header>
    </>
  );
};
