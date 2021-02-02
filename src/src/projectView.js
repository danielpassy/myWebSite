import React from 'react'
import git from '../assets/techlogos/git.png'
import translang from '../assets/projects/translang.png'
import Ame from '../assets/projects/ame.png'
import Ceramica from '../assets/projects/igor.png'
import Social from '../assets/projects/social.png'
import Project from './components/ProjectCard'


function projectView(props) {


    return (
        <div className="container">
            <div className="title">
                Projetos
            </div>
            <div className="projectContainer">
                <div className="cardContainer row pb-3 pt-3">
                    <Project
                        name={"Translang"}
                        description={"Hebraico é uma língua pouco falada, possuindo poucos materiais de estudo. \
                        Translang automatiza a criação de ferramentos de estudo, flash cards, \
                        Deployed na AWS EC2 "}
                        github={'https://github.com/me50/danielpassy/tree/web50/projects/2020/x/network'}
                        site={'false'}
                        thumbnail={translang} />
                    <Project
                        name={"Ame - Pequenos Negócios"}
                        description={"Projeto desenvolvido para o Hackathon Shawee, desafio AME Pequenos Negócios. \
                    Criação de um marketplace para comerciantes locais sob o formato de uma rede social. \
                    Conquistou o #4 lugar na competição "}
                        github={'https://github.com/me50/danielpassy/tree/web50/projects/2020/x/network'}
                        site={'false'}
                        thumbnail={Ame} />
                </div>



                <div className="cardContainer row pb-3 pt-3">
                    <Project
                        name={"Social Network"}
                        description={'Uma rede social desenvolvida \
                    em Django e React Demonstrando funcionalidades \
                    básicas de autenticação, separação front/back e deploy no Heroku'}
                        github={'https://github.com/me50/danielpassy/tree/web50/projects/2020/x/network'}
                        site={'https://calm-journey-62982.herokuapp.com'}
                        thumbnail={Social} />
                    <Project
                        name={"Igor Ceramicas"}
                        description={'Ecommerce e portfolio desenvolvido em WordPress e WooCommerce para ceramista'}
                        github={false}
                        site={'https://www.igorlins.com'}
                        thumbnail={Ceramica} />
                </div>
            </div>
        </div >
    )
}

export default projectView;