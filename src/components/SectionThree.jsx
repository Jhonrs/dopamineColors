import React from "react";

export const SectionThree = () => {
  return (
    <section className="my-5">
      <article className="sectionThree min-height-100">
        <div className="container">
          <div className="row ">
            <div className="col-6 d-none d-lg-block position-relative">
              <img
                className="img-fluid modelThree--dos position-absolute "
                src="./src/assets/3.2.jpg"
                alt=""
              />
              <img
                className="img-fluid modelThree position-absolute "
                src="./src/assets/3.png"
                alt=""
              />
            </div>
            <div className="col-lg-6">
              <h3 className="h3">Complementos</h3>
              <h2 className="h2">Audaces</h2>
              <p>
                Un bolso de color llamativo le aporta dinamismo y creatividad a
                tu look
              </p>
              <div className="d-flex flex-column justify-content align-items-center">
                <img className="w-50" src="./src/assets/bolso.png" alt="" />
                <button className="btn btn-warning mt-3">
                  {" "}
                  Comprar ahora{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
