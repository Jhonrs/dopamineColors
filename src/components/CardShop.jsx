import React from 'react'

export const CardShop = ({ url, Styleclass, heightImg }) => {
  return (
    <article className={ Styleclass }>
        <div className="d-flex flex-column align-items-center">
              <img className ={heightImg} src={url} alt="" />
              <button className="btn btn-warning mt-3"> Comprar ahora </button>
          </div>
    </article>
  )
}
