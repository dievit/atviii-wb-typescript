import React from 'react';
import backgroundImage from "../images/wb_background.png";

type Props = {
    tema: string;
}

const App: React.FC = () => {
    return (
        <>
            <div>
                <h1></h1>
            </div>
        </>
    );
}

const PaginaInicial: React.FC<Props> = () => {
    return (
        <div className="centered" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <header>
                <App />
            </header>
        </div>
    );
}

export default PaginaInicial;
