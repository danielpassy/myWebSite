import React from 'react'
import css from '../assets/techlogos/css.png'
import django from '../assets/techlogos/django.png'
import git from '../assets/techlogos/git.png'
import html from '../assets/techlogos/html.png'
import javascript from '../assets/techlogos/javascript.png'
import linux from '../assets/techlogos/linux.png'
import postgresql from '../assets/techlogos/postgresql.png'
import python from '../assets/techlogos/python.png'
import react from '../assets/techlogos/react.png'

function mainView(props) {




    return (
        <div className="container d-flex flex-column flex-md-row flex-lg-row">
            <div className="col col-md-5 p-0">
                <div className="title">
                    Olá!
                </div>
                <div className="col-8 col-md-12 col-xl-10 description pl-2 pr-3">
                    Meu nome é Daniel Passy e eu sou desenvolvedor Web
                </div>
            </div>
            <div className="col col-md-7 pl-0 pr-0 d-flex justify-content-md-end justify-content-sm-center techWrapperWrapper">
                <div className="techWrapper container">
                    <div className='techTitle subtitle'>
                        Stack
                    </div>
                    <div className="row">
                        <div className="div col-4 text-center">
                            <div className="techContainer">
                                <img className='img-thumbnail techLogo' src={css} alt="tech" />
                                <p>css</p>
                            </div>
                        </div>
                        <div className="div col-4 text-center">
                            <div className="techContainer">
                                <img className='img-thumbnail techLogo' src={django} alt="tech" />
                                <p>Django</p>
                            </div>
                        </div>
                        <div className="div col-4 text-center">
                            <div className="techContainer">
                                <img className='img-thumbnail techLogo' src={git} alt="tech" />
                                <p>Git</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="div col-4 text-center">
                            <div className="techContainer">
                                <img className='img-thumbnail techLogo' src={html} alt="tech" />
                                <p>HTML</p>
                            </div>
                        </div>
                        <div className="div col-4 text-center">
                            <div className="techContainer">
                                <img className='img-thumbnail techLogo' src={javascript} alt="tech" />
                                <p>Javascript</p>
                            </div>
                        </div>
                        <div className="div col-4 text-center">
                            <div className="techContainer">
                                <img className='img-thumbnail techLogo' src={linux} alt="tech" />
                                <p>Linux</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="div col-4 text-center">
                            <div className="techContainer">
                                <img className='img-thumbnail techLogo' src={postgresql} alt="tech" />
                                <p>PostgreSQL</p>
                            </div>
                        </div>
                        <div className="div col-4 text-center">
                            <div className="techContainer">
                                <img className='img-thumbnail techLogo' src={python} alt="tech" />
                                <p>Python</p>
                            </div>
                        </div>
                        <div className="div col-4 text-center">
                            <div className="techContainer">
                                <img className='img-thumbnail techLogo' src={react} alt="tech" />
                                <p>React</p>
                            </div>
                        </div>
                    </div>

                </div></div>
        </div>
    )
}

export default mainView;