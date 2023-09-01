import React from 'react'

export const CardShop = ({ url, Styleclass }) => {
  return (
    <article className={ Styleclass }>
        <div className="d-flex flex-column justify-content align-items-center">
              <img className ="w-50" src={url} alt="" />
              <button className="btn btn-warning mt-3"> Comprar ahora </button>
          </div>
    </article>
  )
}
