import React from 'react'

const Card = ({name,points}) =>{
    return(
        <div className="card">
            <div className="name">{name}</div>
            <div className="points">{points}</div>
        </div>
    )
}

export default Card;