import React from 'react'


function Footer(props){

    const footerContainer = {
        backgroundColor: 'red',
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
        backgroundColor: 'rgba(40, 30, 40, 0.7)',
        color: 'white',
        textAlign: 'center'
    }
    return(
        <div style={footerContainer} className='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-3">I like boyx</div>
                    <div className="col-3"></div>
                    <div className="col-3">Hello</div>
                </div>
            </div>
        </div>
    )
}

export default Footer;