import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import './styles.scss';



const Home = () => (

    <div className="home-container">
        <div className="row home-content">
            <div className="col-6">
                <h1 className="text-title">
                    Desafio do Capítulo 3, <br /> Bootcamp DevSuperior
                 </h1>

                <div className=" col-9 text-subtitle">
                    <p>
                        Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.
                    </p>
                    <p>
                        Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto.
                    </p>
                    <p>
                        Este design foi adaptado a partir de Ant Design System for Figma, de <br/> Mateusz Wierzbicki: <span>antforfigma@gmail.com</span> 
                    </p>

                </div>


            </div>

         

        </div>

        <Link to="./search">

            <Button text="Começar"/>
        
        </Link>

               

    </div>
)




export default Home;