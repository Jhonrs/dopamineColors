import React from "react";

export const MainSection = () => {
  return (
    <section>
      <article className="main-sectionbg">
        <div className="container">
          <div className="row justify-content-end row justify-content-end  align-items-lg-center min-height-100">
            <div className="col-6">
              <h1 className="text-large text-end">DOPAMINE <br /> COLORS</h1>
              <hr className="hr" />
              <p className="hidden ">
                Nuestra nueva colección se inspira en la vibrancia del trópico
                con un estampado que refleja la biodiversidad mediante colores
                dopamina. Descubre un estilo ideal para darle vivacidad a tu
                look{" "}
              </p>
            </div>
          </div>
        </div>
      </article>
      <div className="container ">
        <p className=" visible" >
          Nuestra nueva colección se inspira en la vibrancia del trópico con un
          estampado que refleja la biodiversidad mediante colores dopamina.
          Descubre un estilo ideal para darle vivacidad a tu look{" "}
        </p>
      </div>
    </section>
  );
};
