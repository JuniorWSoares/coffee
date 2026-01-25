import React from "react"

interface CardProp {
    name:string, 
    price: string, 
    imagePath: string
}

export const Card: React.FC<CardProp> = ({name, price, imagePath}) => {
  return (
    <div className="card">
      <img src={imagePath} alt="Imagem de um produto" />
      <div className="content">
        <h3>{name}</h3>
        <div>
          <img src="/cesta.png" alt="" />
          <span>R$ {price}</span>
        </div>
      </div>
    </div>
  )
}
