import { useEffect } from "react";

export default function Wrapper(props: any) {

    useEffect(() => {
        document.title = props.title;
    }, [props.title]);

    return (
    <>
        <link rel="stylesheet" href={process.env.PUBLIC_URL + '/css/onboarding.css'} />

        <div className="main">

            <h1>sticopro</h1>

            <div className=" m-auto text-center">
                <div className="row wheat">
                    <div className="col-md-12">
                        <h1 className="error">404</h1>
                        <p className="lead">La page que vous recherchez est introuvable.</p>
                        <p>Il semble que vous ayez suivi un lien incorrect ou que la page ait été supprimée.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}