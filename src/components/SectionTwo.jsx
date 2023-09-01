import React from "react";
import { CardShop } from "./cardShop";

export const SectionTwo = () => {
  return (
    <div className="sectionTwo position-relative pt-5">
      <section className="container">
        <div className="row min-height-100">
          <div className="col-lg-6">
            <h2 className="text-large text-large--sectionTwo"><i>Looks</i></h2>
            <h3 className="text-medium text-white">Equilibrados</h3>

            <p>
              Combina los colores vibrantes con tonos naturales para tener un
              outfit divertido y sofisticado.
            </p>
          </div>
        </div>
      </section>
      <CardShop  Styleclass={"cardShop"} url={"./src/assets/calzado.png"}/>
    </div>
  );
};
