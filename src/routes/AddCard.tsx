import { useEffect, useState } from "react";
import { Input } from "../components/Input";
import axios from 'axios';
import { PrimaryButton } from "../components/PrimaryButton";
import { SelectOptionList } from '../components/SelectOptionList';
import { useAuth } from "../components/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Wrapper(props: any) {
    useEffect(() => {
        document.title = props.title;
    }, [props.title]);
    
    const navigate = useNavigate();
    
    const { isAuthenticated } = useAuth();

    const [selectedImage, setSelectedImage] = useState<any>(null);
    const [message, setMessage] = useState<string | null>(null);

    const [nom, setNom] = useState('');
    const [description, setDescription] = useState('');
    const [couleur, setCouleur] = useState('');
    const [categorie, setCategorie] = useState('');
    const [image, setImage] = useState<File | null>(null);

    const handleSubmit = async () => {
        try {
          const formData = new FormData();
          formData.append('data', JSON.stringify({
            Name: nom,
            Description: description,
            Color: couleur,
            Type: categorie,
          }));

          if(image) {
            formData.append('files.image', image);
          }
      
          const response = await axios.post('http://10.25.130.204:1337/api/wine-bottles', formData , {
            headers: {
                'Authorization': `Bearer 4c43f2cd8b5eafb2f12e69fc45e83162db7fd008556456ea5df39515ebd53458e4ef8fba342337ca6bcaab7bbe0028947fafffe6c9e24129a802e92f6d12a5a6f7612ed7ef18e6b793efe14288f43afd714895deda87c70306c23eb03fda869f6266882e9eb802ec267deef8d8d19f1c216efd095bc9cedec13c0e03aa0559ee`,
                "Content-Type": "multipart/form-data",
            }
          });
          console.log('Réponse du serveur', response.data);

        setNom('');
        setDescription('');
        setCouleur('');
        setCategorie('');
        setImage(null);
        setSelectedImage(null);

        setMessage('La fiche a été créée avec succès');
        } catch (error) {
          console.error('Une erreur est survenue', error);

          setMessage('Une erreur est survenue lors de la création de la fiche');
        }
      };
      
      const handleImageChange = (e: any) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
            const reader = new FileReader();
            
            reader.onload = function (e) {
                setSelectedImage(e.target?.result);
            }
    
            reader.readAsDataURL(e.target.files[0]);
        }
    };
    

    return (
    <>
        <link rel="stylesheet" href={process.env.PUBLIC_URL + '/css/addcard.css'} />

        {isAuthenticated ? (
            <>
                <Input type="text" value={nom} onChange={(e: any) => setNom(e.target.value)} placeholder="Nom du Vin" required/>

                <div className="dropdowns">

                    <SelectOptionList value={couleur} onChange={(e: any) => setCouleur(e.target.value)}
                        options={{rouge: 'Rouge', blanc: 'Blanc', rose: 'Rosé'}}/>

                    <SelectOptionList value={categorie} onChange={(e: any) => setCategorie(e.target.value)}
                        options={{type: 'Type de vins', mousseux: 'Mousseux', other: 'Autre'}}/>

                </div>

                <div className="content">
                    <div className="addImage-wrapper">
                        <div className="addImage-input">
                            <input type="file" accept="image/*" className="addImage-input-selector" onChange={handleImageChange} />
                            <div className="add-symbol">+</div>
                            Ajouter une image
                        </div>

                        {selectedImage && 
                        <div className="addImage-image">
                            <img src={selectedImage} alt="Selected" />
                        </div>
                        }
                    </div>

                    <textarea className="addDescription" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Ajouter une description"></textarea>

                    <PrimaryButton title="Ajouter la carte" onClick={handleSubmit}></PrimaryButton>

                    {message && <div className="message">{message}</div>}

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
