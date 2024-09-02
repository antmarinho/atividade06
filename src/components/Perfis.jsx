import perfil1 from '../assets/perfil1.jpg';
import perfil2 from '../assets/perfil2.png';
import './Perfis.css';
import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Perfis = () => {
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        document.body.style.background = `#141414`;
    }, []);

    function handlePerfil(string) {

        localStorage.setItem('perfil', string);
        setRedirect(true);
    }

    if (redirect) {
        return <Navigate to='/' />;
    }

    return (
        <div id='perfis'>
            <h1>Quem está assistindo?</h1>
            <div id='cards'>
                <div className='cards' onClick={() => handlePerfil(1)}>
                    <img src={perfil1} className='cardsImg' />
                    <p>Jose</p>
                </div>
                <div className='cards' onClick={() => handlePerfil(2)}>
                    <img src={perfil2} className='cardsImg' />
                    <p>Maria</p>
                </div>
            </div>
        </div>
    );
};

export default Perfis;
