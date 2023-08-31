import React from "react";

export const SectionTwo = () => {
  return (
    <div className="sectionTwo">
      <section className="container ">
      <div className="row min-height-100 pt-4">
        <div className="col-lg-6">
          <h2 className="text-large">Looks</h2>
          <h3 className="text-medium">Equilibrados</h3>

          <p>
            Combina los colores vibrantes con tonos naturales para tener un
            outfit divertido y sofisticado.
          </p>
          <div className="d-flex flex-column justify-content align-items-center">
            <img className ="w-50" src="./src/assets/calzado.png" alt="" />
            <button className="btn btn-warning mt-3"> Comprar ahora </button>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};
