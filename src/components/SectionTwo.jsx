import React from "react";
import { CardShop } from "./cardShop";

export const SectionTwo = () => {
  return (
    <div className="section-two position-relative pt-5">
      <section className="container">
        <div className="row min-height-100">
          <div className="col-lg-6 col-6">
            <h2 className="text-large text-large-section--two"><i>Looks</i></h2>
            <h3 className="text-medium  text-white">Equilibrados</h3>

            <p className="">
              Combina los colores vibrantes con tonos naturales para tener un
              outfit divertido y sofisticado.
            </p>
          </div>
        </div>
      </section>
      <CardShop heightImg={"w-50"} Styleclass={"card-shop card-shop-section--two"} url={"/assets/calzado.png"}/>
    </div>
  );
};
