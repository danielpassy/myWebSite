import { React, useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { LanguageContext } from '../util/context'


function NavBar(props) {

    const [hover, setHover] = useState(null)
    const [language, setLanguage] = useState(null)
    const LanguageStatus = useContext(LanguageContext)

    useEffect(() => {
        setLanguage(LanguageStatus.language);
    }, [LanguageStatus.language])





    return (
        <div className='p-3 navBar '>
            <div className="row justify-content-between">
                <div className="col-10 col-lg-11 row pt-2">
                    <Link className={'col ' + (hover === 'flex home' ? "hovered" : [])} to="/"
                        onMouseEnter={() => setHover('home')}
                        onMouseLeave={() => setHover(false)}>
                        Home
                    </Link>
                    <Link className={'col ' + (hover === ' flex projetos' ? "hovered" : [])} to="/projetos"
                        onMouseEnter={() => setHover('projetos')}
                        onMouseLeave={() => setHover(false)}>
                        Projetos
                    </Link>
                    <Link className={'col ' + (hover === ' flex CV' ? "hovered" : [])} to="/curriculo"
                        onMouseEnter={() => setHover('CV')}
                        onMouseLeave={() => setHover(false)}>
                        CV
                    </Link>
                    <Link className={'col ' + (hover === 'contato' ? "hovered" : [])} to="/contato"
                        onMouseEnter={() => setHover('contato')}
                        onMouseLeave={() => setHover(false)}>
                        Contato
                    </Link>
                </div>
            </div>
            <div className="langBAR">
                <span onClick={() => LanguageStatus.changeLanguage(!language)}
                    className={'border-dark p-2 borderNAVLangBTN ' + (language ? 'selectedLan': '')}>
                    PT
                    </span>
                <span onClick={() => LanguageStatus.changeLanguage(!language)}
                    className={'border-dark p-2 borderNAVLangBTN ' + (language ?  '': 'selectedLan')}>
                    EN
                    </span>
            </div>
        </div>
    )
}

export default NavBar;