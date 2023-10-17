import { useEffect } from "react";
import { useAuth } from "../components/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Wrapper(props: any) {

    useEffect(() => {
        document.title = props.title;
    }, [props.title]);

    const navigate = useNavigate();
    
    const { isAuthenticated } = useAuth();

    return (
    <>
        <link rel="stylesheet" href={process.env.PUBLIC_URL + '/css/search.css'} />

        <div className="title">Mes recherches</div>

        <>
            <div className="carte">

            <span>Travail en cours</span>

            </div>
        </>
    </>
    );
}