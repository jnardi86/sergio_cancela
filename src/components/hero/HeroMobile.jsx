import Arrow from "../icons/Arrow";
import Layout from "../Layout";

const HeroMobile = () => {
  return (
    <section
      className="relative bg-cover bg-center"
      style={{ backgroundImage: "url('images/hero_bg_mobile.png')" }}
    >
      <Layout>
        <div className="mt-4 px-6 py-16 col-span-4 items-center text-center space-y-6">
          {/* Título */}
          <h1 className="font-montserrat text-h1 text-lightBg font-bold py-8">
            Soluciones <span className="text-secondary">textiles</span> pensadas
            para tu negocio
          </h1>

          {/* Descripción */}
          <p className="font-montserrat text-body text-lightBg text-center border-solid border-white">
            Máquinas y repuestos de calidad, que acompañan cada paso de tu
            producción.
          </p>

          {/* Botón */}
          <div className="flex items-center justify-center">
            <a
              href="#maquinaria"
              className="mt-4 px-6 py-3 bg-secondary text-lightBg font-montserrat text-bodyLink font-semibold rounded-lg shadow-md flex items-center gap-4"
            >
              NUESTRA MAQUINARIA
              <Arrow
                width="24"
                height="24"
                fill="#FAFAFA"
              />
            </a>
          </div>
        </div>
      </Layout>

    </section>
  );
};

export default HeroMobile;
