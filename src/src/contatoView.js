import React from 'react'
import ProjectCard from './components/ProjectCard'
import me from '../assets/projects/me.png'
function contatoView(props) {


    const photoSize = {
        maxWidth: '70%',
        maxHeight: `70%`,
        border: `solid 3px`,
        borderColor: `rgba(30, 30, 30, 0.3)`
    }


    return (
        <div className="container">
            <div className="title">
                Contato
            </div>
            <div className="row description pt-2 mr-0 ml-0">
                <div className="col-12 col-xl-6 ">
                    <div className="subtitle">
                        Vamos conversar? Fazer um projeto ou trocar uma ideia?
                    </div>
                    <div className="contact">
                        
                    </div>
                </div>
                <div className="col-12 col-xl-6 center justify-content-center d-flex">
                    <img style={photoSize} src={me} alt="Foto de Daniel Passy" />
                </div>
            </div>
        </div>
    )
}

export default contatoView;