import React from 'react'

export default function ProjectCard(props) {

    const logo = {
        maxWidth: '100px',
        height: '130px'
    }

    return (
        <>
            <div className="CARD col-12 col-lg-6 col-xl-6 description p-3 d-flex row " >
                <div className="order-lg-1 order-1 pr-3 pl-3 thumbnailContainer text-center">
                    <img className='img-thumbnail' style={logo} src={props.thumbnail} alt="tech" />
                    
                </div>
                <div className="order-lg-2 order-2 pl-3 pr-3 col CARDdescriptionContainer pr-0">
                    <div className='CARDTitle'>
                        {props.name}
                    </div>
                    <div className="CARDText">
                        {props.description}
                    </div>
                    <div className="buttonContainer ">
                        {props.github ?
                            <button onClick={() => window.open(props.github)} className='blackButton m-1 mr-3'>GitHub</button>
                            : ""}
                        {props.site ?
                            <button onClick={() => window.open(props.site)} className='blackButton m-1 '>Site</button>
                            : ""}

                    </div>
                </div>
            </div>
        </>
    )
}
