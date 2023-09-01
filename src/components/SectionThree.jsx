import React from "react";
import { CardShop } from "./cardShop";

export const SectionThree = () => {
  return (
    <section className="my-5">
      <article className="section-three min-height-100">
        <div className="container">
          <div className="row ">
            <div className="col-6 position-relative">
              <img
                className="img-fluid d-none d-lg-block  model-three--dos position-absolute "
                src="./src/assets/3.2.jpg"
                alt=""
              />
              <img
                className="img-fluid model-three position-absolute "
                src="./src/assets/3.png"
                alt=""
              />
            </div>
            <div className="col-lg-6 col-7 py-5">
              <div>
                <h2 className=" text-medium text-medium-section--three">Complementos</h2>
                <h3 className="text-large text-large-section--three">
                  Audaces
                </h3>
              </div>
              <p className="text-paragraph">
                Un bolso de color llamativo le aporta dinamismo y creatividad a
                tu look
              </p>
             <CardShop heightImg={"w-75"} url={"./src/assets/bolso.png"}/>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
