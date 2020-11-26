import React from 'react'


function CurriculoItem(props) {

    return (
        <div className="order-lg-2 order-1 pl-2 pt-1 pb-3 pr-3 col description">
            <div className='CARDTitle '>
                {props.title}
            </div>
            <div className="pl-2">
                {props.date ? (
                    <div className='CARDSubTitle Date '>
                        {props.date}
                    </div>) : []
                }

                {props.text ? (
                    <div className="CARDText">
                        {props.text}
                    </div>) : []
                }

            </div>
        </div>
    )
}



export default CurriculoItem;