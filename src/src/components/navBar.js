import { React, useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { LanguageContext } from '../util/context'
import { Button, Collapse } from 'react-bootstrap'






function NavBar(props) {

    const [hover, setHover] = useState(null)
    const [language, setLanguage] = useState(null)
    const LanguageStatus = useContext(LanguageContext)
    const [open, setOpen] = useState(false);




    useEffect(() => {
        setLanguage(LanguageStatus.language);
    }, [LanguageStatus.language])

    return (
        <div className='navBar container'>
            <div className="row justify-content-between">
                <div className="col-10 col-lg-11 row pt-2 desktopNav">
                    <Link className={'col center hardCodeHOME ' + (hover === 'home' ? "hovered" : [])} to="/"
                        onMouseEnter={() => setHover('home')}
                        onMouseLeave={() => setHover(false)}>
                          Home
                    </Link>
                    <Link className={'col center ' + (hover === 'projetos' ? "hovered" : [])} to="/projetos"
                        onMouseEnter={() => setHover('projetos')}
                        onMouseLeave={() => setHover(false)}>
                        Projetos
                    </Link>
                    <Link className={'col center hardCodeCV ' + (hover === 'CV' ? "hovered" : [])} to="/curriculo"
                        onMouseEnter={() => setHover('CV')}
                        onMouseLeave={() => setHover(false)}>
                        CV
                    </Link>
                    <Link className={'col center ' + (hover === 'contato' ? "hovered" : [])} to="/contato"
                        onMouseEnter={() => setHover('contato')}
                        onMouseLeave={() => setHover(false)}>
                        Contato
                    </Link>
                </div>
            </div>


            <div className="col-10 col-lg-11 row pt-2 mobileNav">
                <div className="hovered menuNav" 
                onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                >
                    Menu
                </div>
                <Collapse in={open}>
                    <div id="example-collapse-text position-absolute">
                        <div className="d-flex flex-column dropDownNav">
                            <Link className={'center ' + (hover === 'home' ? "hovered" : [])} to="/"
                                onMouseEnter={() => {setHover('home')}}
                                onClick ={() => setOpen(!open)}
                                onMouseLeave={() => setHover(false)}>
                                Home
                            </Link>
                            <Link className={'center ' + (hover === 'projetos' ? "hovered" : [])} to="/projetos"
                                onMouseEnter={() => setHover('projetos')}
                                onClick ={() => setOpen(!open)}
                                onMouseLeave={() => setHover(false)}>
                                Projetos
                        </Link>
                            <Link className={'center hardCodeCV ' + (hover === 'CV' ? "hovered" : [])} to="/curriculo"
                                onMouseEnter={() => setHover('CV')}
                                onClick ={() => setOpen(!open)}
                                onMouseLeave={() => setHover(false)}>
                                CV
                        </Link>
                            <Link className={'center ' + (hover === 'contato' ? "hovered" : [])} to="/contato"
                                onMouseEnter={() => setHover('contato')}
                                onClick ={() => setOpen(!open)}
                                onMouseLeave={() => setHover(false)}>
                                Contato
                        </Link>
                        </div>
                    </div>
                </Collapse>

            </div>
            <div className="langBAR">
                <span onClick={() => LanguageStatus.changeLanguage(!language)}
                    className={'border-dark p-2 borderNAVLangBTN ' + (language ? 'selectedLan' : '')}>
                    PT
                    </span>
                <span onClick={() => LanguageStatus.changeLanguage(!language)}
                    className={'border-dark p-2 borderNAVLangBTN ' + (language ? '' : 'selectedLan')}>
                    EN
                    </span>
            </div>
        </div>
    )
}

export default NavBar;