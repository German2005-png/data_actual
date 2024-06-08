import './navegation.css';
import search from "../../../public/svg/search.svg";
import { useEffect } from 'react';
export function Navegation(){
    useEffect(()=>{
        if(window.location.pathname == "/"){
            document.getElementById("nav-a-home").classList.add("x");
        }
        if(window.location.pathname == "/politica"){
            document.getElementById("nav-a-politica").classList.add("x");
        }
        if(window.location.pathname == "/deporte"){
            document.getElementById("nav-a-deporte").classList.add("x");
        }
    },[])
    return(
        <nav className='navegation-page'>
            <div className='cont-nav-icon'>
                <a href='/' className='nav-icon' title='Data actual'>DATA<span className='nav-icon-span'>ACTUAL</span></a>
            </div>
            <ul className='nav-ul'>
                <li className='nav-li'>
                    <a className='nav-a' id='nav-a-home' href="/">GENERAL</a>
                </li>
                <li className='nav-li'>
                    <a className='nav-a' id='nav-a-politica' href="/politica">POLITICA</a>
                </li>
                <li className='nav-li'>
                    <a className='nav-a' id='nav-a-deporte' href="/deporte">DEPORTE</a>
                </li>
                <li className='nav-li-input'>
                    <input className='nav-input' placeholder='Busca tu Data' type="text" />
                    <button className='nav-submit'>
                        <img src={search} alt="" />
                    </button>
                </li>
            </ul>
        </nav>
    )
}