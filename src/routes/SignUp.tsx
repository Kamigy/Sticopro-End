import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../layouts/Header"
import { PrimaryButton } from "../components/PrimaryButton";
import { Input } from "../components/Input";
import axios from 'axios';
import { useAuth } from "../components/AuthContext";

export default function Wrapper(props: any) {

    const navigate = useNavigate();

    const { isAuthenticated, login } = useAuth();

    useEffect(() => {
        document.title = props.title;
    }, [props.title]);

    const [, setMessage] = useState<string | null>(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const handleSubmit = async () => {

        console.log("try sending register")

        try {
          const formData = JSON.stringify({
            email: email,
            password: password,
            username: username,
          });
      
          const response = await axios.post('http://10.25.130.204:1337/api/auth/local/register', formData , {
            headers: {
                'Authorization': `Bearer 4c43f2cd8b5eafb2f12e69fc45e83162db7fd008556456ea5df39515ebd53458e4ef8fba342337ca6bcaab7bbe0028947fafffe6c9e24129a802e92f6d12a5a6f7612ed7ef18e6b793efe14288f43afd714895deda87c70306c23eb03fda869f6266882e9eb802ec267deef8d8d19f1c216efd095bc9cedec13c0e03aa0559ee`,
                "Content-Type": "application/json",
            }
          });
          console.log('Réponse du serveur', response.data);

          const data = await response.data;
          login();
            localStorage.setItem("username", data.user.username);
          navigate('/home')

        setEmail('');
        setPassword('');
        setUsername('');

        setMessage('Le compte a été créée avec succès');
        } catch (error) {
          console.error('Une erreur est survenue', error);

          setMessage('Une erreur est survenue lors de la création du compte');
        }
    };

    return (
    <>
        <link rel="stylesheet" href={process.env.PUBLIC_URL + '/css/login.css'} />

        <Header title="Inscription"/>

        <div className="main">

            <div className="container mt-4">

                <div className="row justify-content-center">

                    <div className="col-12 diot">

                        <div className="form">

                            <div className="mb-3">
                                <Input type="email" id="inputEmail" placeholder="Adresse e-mail" onChange={(e: any) => setEmail(e.target.value)} required/>
                            </div>

                            <div className="mb-3">
                                <Input type="text" id="inputUsername" placeholder="Nom d'utilisateur" onChange={(e : any) => setUsername(e.target.value)} required/>
                            </div>
                            
                            <div className="mb-3">
                                <Input type="password" id="inputPassword" placeholder="Mot de passe" onChange={(e : any) => setPassword(e.target.value)} required/>
                            </div>

                            <div className="mt-5 col-10 down">

                                <PrimaryButton title="S'inscrire" onClick={() => {handleSubmit()}}/>

                                <div className="text-center mt-3 label">
                                    Tu as déjà un compte ?
                                </div>

                                <div className="text-center">
                                    <div className="link" onClick={() => navigate('/login')}>Se connecter</div>
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