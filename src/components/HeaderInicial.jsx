import perfil1 from '../assets/perfil1.jpg';
import perfil2 from '../assets/perfil2.png';
import logo from '../assets/Netflix-Logo-500x281.png'
import { FaSistrix } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import './HeaderInicial.css'
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const DivBusca = styled.form`
    display: flex;
    box-sizing: border-box;
    flex-direction: row;
    gap: 1rem;  
    
    @media only screen and (max-width: 950px) {
        gap: 0.3rem;    
}
`
const Input = styled.input`
    border: none;
    background-color: rgba(255,255,255, 0.6);
    width: 15rem;
    border-radius: 5px;
    @media only screen and (max-width: 950px) {
        width: 5rem;
    
}
`
const Button = styled.button`
    background: transparent;
    border: none;
    padding: 0;
    margin: 0 auto;
    width: 2rem;
    color: rgba(255, 255, 255, 0.8);
`
const Div = styled.div`
    display: none;
    flex-direction: row;
    gap: 1rem;

    @media only screen and (max-width: 950px) {
        display: flex;
    }
`
const Select = styled.select`
    background-color: transparent;
    color: rgba(255,255,255,0.8);
    border: none;
`
const Option = styled.option`
    font-size: 0.8rem;
    color: rgba(255,255,255,0.6);
    background-color: rgb(20,20,20);
`

const HeaderInicial = () => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!search) return;

        navigate(`/search?q=${search}`);
        setSearch('');
    }

    let imgPerfil = perfil1;
    const dataPerfil = localStorage.getItem('perfil')

    if (dataPerfil == 2) {
        imgPerfil = perfil2
    }

    useEffect(() => {
        var nav = document.getElementById('Header');
        window.addEventListener("scroll", function (event) {
            if (window.scrollY > 10) {
                nav.style.background = "rgb(20, 20, 20)";
            }
            else {
                nav.style.background = "transparent";
            }
        });
    }, []);

    return (
        <div className='Header' id='Header'>
            <div className='Header'>
                <Link to={'/'}><img src={logo} id='logo' /></Link>
            </div>
            <Div>
                {/* <label htmlFor="nav">Navegar</label> */}
                <Select name="nav" onChange={(e) => { navigate(e.target.value) }}>
                    <Option>Navegar</Option>
                    <Option value="/">Início</Option>
                    <Option value="/">Séries</Option>
                    <Option value="/">Filmes</Option>
                    <Option value="/">Bombando</Option>
                </Select>
            </Div>
            <div id='nav'>
                <Link to={'/'}>Início</Link>
                <a href="#">Séries</a>
                <a href="#">Filmes</a>
                <a href="#">Bombando</a>
                <a href="#">Minha lista</a>
                <a href="#">Navegar por idiomas</a>
            </div>
            <div id='div-busca'>
                <DivBusca onSubmit={handleSubmit}>
                    <Button type='submit'><FaSistrix className='icon-lupa' /></Button>
                    <Input
                        type="text"
                        onChange={(e) => setSearch(e.target.value)}
                        value={search} />
                </DivBusca>
                <a href="#" className='infantil'>Infantil</a>
                <FaRegBell className='icon-sino' />
                <img src={imgPerfil} id='avatar' />
            </div>
        </div>
    )
}

export default HeaderInicial