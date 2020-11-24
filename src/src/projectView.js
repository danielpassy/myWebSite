import React from 'react'
import git from '../assets/techlogos/git.png'


function projectView(props) {


    return (
        <div className="container">
            <div className="title">
                Projeto
            </div>
            <div className="projectContainer">
                <div className="cardContainer row pb-3 pt-3">
                    <div className="CARD col-12 col-lg-6 col-xl-6 description p-3 d-flex row">
                        <div className="order-lg-1 order-1 pr-3 pl-3 thumbnailContainer text-center">
                            <img className='img-thumbnail techLogo' src={git} alt="tech" />
                            <p>Git</p>
                        </div>
                        <div className="order-lg-2 order-2 pl-3 pr-3 col CARDdescriptionContainer pr-0">
                            <div className='CARDTitle'>
                                some title
                            </div>
                            <div className="CARDText">
                            ThumsThuThums Thums ThumsThums dfsdfkjs dfkjdhafkl jashdflkjhas lkfjhasldjkf halskdfh banial Example
                            </div>
                            <div className="buttonContainer ">
                                <button className='blackButton m-1 mr-3'>Test one</button>
                                <button className='blackButton m-1 '>Test one</button>
                            </div>
                        </div>
                    </div>
                    <div className="CARD col-12 col-lg-6 col-xl-6 description p-3 d-flex row " >
                        <div className="order-lg-1 order-2 pr-3 pl-3 thumbnailContainer text-center">
                            <img className='img-thumbnail techLogo' src={git} alt="tech" />
                            <p>Git</p>
                        </div>
                        <div className="order-lg-2 order-1 pl-3 pr-3 col descriptionContainer">
                            <div className='CARDTitle '>
                                some title
                            </div>
                            <div className="CARDText">
                                Thums dfsdfkjs dfkjdhafkl jashdflkjhas lkfjhasldjkf halskdfh banial Example
                            </div>
                            <div className="buttonContainer ">
                                <button className='blackButton m-1 mr-3'>Test one</button>
                                <button className='blackButton m-1 '>Test one</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cardContainer row pb-3 pt-3">
                    <div className="cardContainer row">
                        <div className="CARD col-12 col-lg-6 col-xl-6 description p-3 d-flex row">
                            <div className="order-lg-1 order-1 pr-3 pl-3 thumbnailContainer text-center">
                                <img className='img-thumbnail techLogo' src={git} alt="tech" />
                                <p>Git</p>
                            </div>
                            <div className="order-lg-2 order-2 pl-3 pr-3 col CARDdescriptionContainer pr-0">
                                <div className='CARDTitle'>
                                    some title
                            </div>
                                <div className="CARDText">
                                    Thums dfsdfkjs dfkjdhafkl jashdflkjhas lkfjhasldjkf halskdfh banial Example
                            </div>
                                <div className="buttonContainer ">
                                    <button className='blackButton m-1 mr-3'>Test one</button>
                                    <button className='blackButton m-1 '>Test one</button>
                                </div>
                            </div>
                        </div>
                        <div className="CARD col-12 col-lg-6 col-xl-6 description p-3 d-flex row " >
                            <div className="order-lg-1 order-2 pr-3 pl-3 thumbnailContainer text-center">
                                <img className='img-thumbnail techLogo' src={git} alt="tech" />
                                <p>Git</p>
                            </div>
                            <div className="order-lg-2 order-1 pl-3 pr-3 col descriptionContainer">
                                <div className='CARDTitle '>
                                    some title
                            </div>
                                <div className="CARDText">
                                    Thums dfsdfkjs dfkjdhafkl jashdflkjhas lkfjhasldjkf halskdfh banial Example
                            </div>
                                <div className="buttonContainer ">
                                    <button className='blackButton m-1 mr-3'>Test one</button>
                                    <button className='blackButton m-1 '>Test one</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default projectView;