import { useEffect, useState } from "react";
import { Header } from "../layouts/Header"
import { PrimaryButton } from "../components/PrimaryButton";
import { Input } from "../components/Input";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../components/AuthContext";

export default function Wrapper(props: any) {

    const navigate = useNavigate();

    useEffect(() => {
        document.title = props.title;
    }, [props.title]);

    const { isAuthenticated, login } = useAuth();

    const [message, setMessage] = useState<string | null>(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        try {
            const values = JSON.stringify({
                identifier: email,
                password: password,
            });
           console.log(values);
            const response = await axios.post('http://10.25.130.204:1337/api/auth/local', values , {
                headers: {
                    'Authorization': `Bearer 4c43f2cd8b5eafb2f12e69fc45e83162db7fd008556456ea5df39515ebd53458e4ef8fba342337ca6bcaab7bbe0028947fafffe6c9e24129a802e92f6d12a5a6f7612ed7ef18e6b793efe14288f43afd714895deda87c70306c23eb03fda869f6266882e9eb802ec267deef8d8d19f1c216efd095bc9cedec13c0e03aa0559ee`,
                    "Content-Type": "application/json",
                }
            });
            console.log(response.data);
            const data = await response.data;
            if (data?.error) {
                setEmail('');
                setPassword('');  
                setMessage('Email ou mot de passe incorrecte');
            } else {
                login();
                console.log(data.user.username);
                localStorage.setItem("username", data.user.username);
                navigate('/home');
                setMessage('Vous êtes connecté !');
            }               
                    
        } catch (error) {
            console.error('Une erreur est survenue', error);
            setMessage('Email ou mot de passe incorrecte');
        }
      };

    return (
    <>
        <link rel="stylesheet" href={process.env.PUBLIC_URL + '/css/login.css'} />

        <Header title="Connexion"/>

            <div className="main">

                <div className="container mt-4">

                    <div className="row justify-content-center">

                        <div className="col-12 diot">

                            <div className="form">

                                <div className="mt-3">
                                    <Input type="email" value={email} onChange={(e: any) => setEmail(e.target.value)} id="EmailInput" placeholder="Adresse e-mail" required/>
                                </div>

                                <div className="mt-3">
                                    <Input type="password" value={password} onChange={(e: any) => setPassword(e.target.value)} id="passwordInput" placeholder="Mot de passe" required/>
                                </div>

                                {message && <div className="label">{message}</div>}

                                <div className="mt-4 fw-bold text-end label" onClick={() => navigate('/home')}>
                                    Mot de passe oublié ?
                                </div>  

                                <div className="mt-5 col-10 down">

                                    <PrimaryButton title="Se connecter" onClick={() => {handleSubmit()}}/>

                                    <div className="text-center mt-3 label">
                                        Pas encore de compte ?
                                    </div>

                                    <div className="text-center">
                                        <div className="link" onClick={() => navigate('/signup')}>S'inscrire</div>
                                    </div>

                                </div>

                            </div>
                            
                        </div>

                    </div>

                </div>

            </div> 
    </>
    );
}