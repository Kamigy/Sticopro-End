import { useEffect } from "react";
import { HeaderProfile } from "../layouts/HeaderProfile";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";

export default function Wrapper(props: any) {

    const navigate = useNavigate();

    const { isAuthenticated } = useAuth();

    const username = localStorage.getItem("username");

    useEffect(() => {
        document.title = props.title;
    }, [props.title]);

    return (
    <>
        <link rel="stylesheet" href={process.env.PUBLIC_URL + '/css/profile.css'} />

        <HeaderProfile navigate={navigate}/>

        {isAuthenticated ? (
        <>
            <div className="main">

            <div className="container-fluid mt-5">

                <div className="row justify-content-center">

                    <div className="col-12 text-center mx-auto">
                        <h2 className="my-4">{username}</h2> 
                    </div>

                    <div className="col-10 mt-5">

                        <div className="row bordering m-0 g-0">

                            <div className="col-6 px-1 border-bottom border-end topLeft">
                                <div className="d-flex w-100 h-100 align-items-center m-0 py-4" onClick={() => { navigate('/home'); }}><span className="mx-auto">Boutique sticoo</span></div>
                            </div>

                            <div className="col-6 px-1 border-bottom topRight">
                                <div className="d-flex w-100 h-100 align-items-center m-0 py-4" onClick={() => { navigate('/establishment'); }}><span className="mx-auto">Fiche établissement</span></div>
                            </div>
                            
                            <div className="col-6 px-1 border-end bottomLeft">
                                <div className="d-flex w-100 h-100 align-items-center m-0 py-4" onClick={() => { navigate('/home'); }}><span className="mx-auto">Assigner lot de stickers</span></div>
                            </div>

                            <div className="col-6 px-1 bottomRight">
                                <div className="d-flex w-100 h-100 align-items-center m-0 py-4" onClick={() => { navigate('/home'); }}><span className="mx-auto">Base info produits</span></div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            </div>
        </>
        ) : (
            <div className="carte">
                <p>Vous devez être connecté pour accéder à cette page, <a onClick={() => navigate('/login')}>veuillez vous connecter</a></p>
            </div>
            
        )}

        
    </>
    );
}