import React from 'react'
import git from '../../assets/techlogos/git.png'
import CurriculoItem from './CurriculoItem'


function curriculoView(props) {


    return (
        <div className="container">
            <div className="title">
                Currículo Vitae
            </div>
            <div className="curriculoContainer pt-1 row">
                <div className="col-12 col-lg-6 column1  ">
                    <div className="expPreviasWrap">
                        <div className="expPrevias pl-0 pb-3 pt-1 container">
                            <div className="subtitle">
                                Experiências Anteriores
                        </div>
                            <CurriculoItem title='Consultoria Estrátegica — Signals Analytics '
                                date='Estagiario — 09/2019 - 01/2020 '
                                text={<><div>• Análise de Dados, pesquisa de mercado para multinacionais americanas.</div></>}
                                 />
                            <CurriculoItem title='R&D em Engenharia — LabCFD'
                                date='Estagiario —  09/2018 - 03/2019 '
                                text={<><div>• Análise de dados e implementação em C++ de modelos físicos</div></>}
                                 />
                            <CurriculoItem title='Pesquisa básica em química — UFRJ/IQ'
                                date='Assistente de pesquisa — 04/2014 - 07/2016 '
                                text={<><div>• Desenvolvimento de catalisadores para produção de biodiesel </div></>} 
                                />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6 column2 ">
                    <div className="EducacaoWrapper">
                        <div className="Educacao pl-0 pb-0 pt-1 container">
                            <div className="subtitle">
                                Educação
                        </div>
                            <CurriculoItem
                                title='Engenharia Química — Universidade Federal do Rio de Janeiro'
                                date='Bacharel -  2013 - 2020' />
                        </div>
                    </div>
                    <div className="OutrosWrapper">
                        <div className="Outros pl-0 pb-0 pt-0 container">
                            <div className="subtitle">
                                Outros
                        </div>
                            <CurriculoItem title='Tecnologias adicionais'
                                text={<><div>• C/MATLAB/VBA  </div>
                                    <div>• Photoshop/Lightroom/Fireworks </div>
                                    <div>• Pacote Office</div></>} />
                            <CurriculoItem title='Línguas'
                                text={<><div>• Inglês Fluente  </div>
                                    <div>• Espanhol Avançado</div>
                                    <div>• Hebraico Intermediário</div></>} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default curriculoView;