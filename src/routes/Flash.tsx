import { useEffect, useState } from "react";
import axios from "axios";
import { QrScanner } from '@yudiel/react-qr-scanner';
import { useNavigate } from "react-router-dom";


export default function Wrapper(props: any) {
    const [wineList, setWineList] = useState([]);
    const [selectedWine, setSelectedWine] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        document.title = props.title;

        axios.get('http://10.25.130.204:1337/api/wine-bottles', {
        headers: {
        'Authorization': `Bearer 4c43f2cd8b5eafb2f12e69fc45e83162db7fd008556456ea5df39515ebd53458e4ef8fba342337ca6bcaab7bbe0028947fafffe6c9e24129a802e92f6d12a5a6f7612ed7ef18e6b793efe14288f43afd714895deda87c70306c23eb03fda869f6266882e9eb802ec267deef8d8d19f1c216efd095bc9cedec13c0e03aa0559ee`
            },
        }).then(response => {
            setWineList(response.data.data);
        }).catch(error => {
            console.error("Error fetching wine list:", error);
        });

    }, [props.title]);
    const handleQRScan = (result: string) => {
        if (selectedWine) {
            console.log(selectedWine)
            console.log(result)
            axios.post('http://10.25.130.204:1337/api/qr-code-bottles', {
                data:{
                    wine_bottle: selectedWine,
                    code: result
                }
                
            }, {
                headers: {
                    'Authorization': `Bearer 4c43f2cd8b5eafb2f12e69fc45e83162db7fd008556456ea5df39515ebd53458e4ef8fba342337ca6bcaab7bbe0028947fafffe6c9e24129a802e92f6d12a5a6f7612ed7ef18e6b793efe14288f43afd714895deda87c70306c23eb03fda869f6266882e9eb802ec267deef8d8d19f1c216efd095bc9cedec13c0e03aa0559ee`
                },
            }).then(() => {
                console.log("QR Code saved successfully!");
                alert("Le QR Code est bien enregistré")
                navigate('/Home')
            }).catch(error => {
                console.error("Error saving QR Code:", error);
            });
        }
    };    

    return (
        <>
            <link rel="stylesheet" href={process.env.PUBLIC_URL + '/css/flash.css'} />
            
            <select
                value={selectedWine || ''}
                onChange={(e) => setSelectedWine(e.target.value)}
            >
                <option value="">Sélectionnez un vin</option>
                {wineList.map((wine: any) => (
                    <option key={wine.attributes.id} value={wine.id}>{wine.attributes.Name}</option>
                ))}
            </select>

            <QrScanner
                onDecode={handleQRScan}
                onError={(error) => console.log(error?.message)}
            />
        </>
    );
}
