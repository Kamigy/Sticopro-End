import { Outlet, useOutlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { Footer } from '../layouts/Footer';
import { Main } from '../layouts/Main';
import { Loader } from '../components/Loader';

declare global {
    interface Window {
        mobileCheck: any;
    }
}

export default function Wrapper(props: any) {
    const isPhone = window.mobileCheck();
    const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);

    useEffect(() => {
        document.title = props.title;

        if (isPhone) {
            const appElement = document.getElementById('app') as HTMLElement;
            const footerElement = document.querySelector('.footer') as HTMLElement;
            if (appElement) appElement.style.maxWidth = 'none';
            if (footerElement) footerElement.style.maxWidth = 'none';
        }

        function handleOrientationChange() {
            setIsPortrait(window.innerHeight > window.innerWidth);
        }

        window.addEventListener("orientationchange", handleOrientationChange);
        window.addEventListener("resize", handleOrientationChange);

        return () => {
            window.removeEventListener("orientationchange", handleOrientationChange);
            window.removeEventListener("resize", handleOrientationChange);
        };
    }, [isPhone, props.title]);

    return (
        <>
            {(isPhone && !isPortrait) ? (
                <div className="return">
                    <p>Veuillez tourner votre téléphone en mode portrait pour utiliser l'application</p>
                </div>
            ) : (
                <>
                    <Main element={<><Loader duration={1000}/><Outlet /></>} />
                    <Footer />
                </>
            )}
        </>
    );
}