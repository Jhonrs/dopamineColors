import React from "react";

export const SectionFour = () => {
  return (
    <section>
      <div className="title-container visible container pt-lg-5">
        <h2 className="section-four-title">
          <i>Print</i>
        </h2>
        <h3 className="section-four-subtitle">Dopamínico</h3>
      </div>
      <section className="section-four min-height-100">
        <article className="container">
          <div className="title-container hidden pt-5">
            <h2 className="section-four-title">
              <i>Print</i>
            </h2>
            <h3 className="section-four-subtitle">Dopamínico</h3>
          </div>
          <div className="row py-5">
            <div className="col-lg-4 col-6 position-relative">
              <div className="ps-md-5 d-flex flex-column  aling-items-center container-paragraph" >
                <p className="">
                  Un estampado tropical protagonizado por tonos vibrante es la
                  mejor forma de darle todo el color a tu estilo para empezar el
                  2023.
                </p>
                <button className="btn btn-warning">Comprar ahora</button>
              </div>
            </div>
            <div className="col-lg-8 d-none d-lg-block position-relative">
              <img
                className="model-four position-absolute"
                src="./src/assets/5.png"
                alt=""
              />
            </div>
          </div>
        </article>
      </section>
    </section>
  );
};
