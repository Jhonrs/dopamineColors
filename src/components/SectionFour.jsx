import React from "react";

export const SectionFour = () => {
  return (
    <section className="sectionFour min-height-100">
      <article className="container">
        <div className="title-container pt-5">
          <h2 className="sectionFourTitle">
            <i>Print</i>
          </h2>
          <h3 className="sectionFourSubtitle">Dopamínico</h3>
        </div>
        <div className="row py-5">
          <div className="col-lg-4">
            <div className="ps-5">
              <p className="">
                Un estampado tropical protagonizado por tonos vibrante es la
                mejor forma de darle todo el color a tu estilo para empezar el
                2023.
              </p>
              <button className="btn btn-warning">Comprar ahora</button>
            </div>
          </div>
          <div className="col-lg-8 position-relative">
            <img className="position-absolute" src="./src/assets/5.png" alt="" />
          </div>
        </div>
      </article>
    </section>
  );
};
