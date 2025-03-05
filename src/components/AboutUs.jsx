import Carousel from "react-bootstrap/Carousel";

import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";

// TODO: add the video de fondo, repeat onclick, fades in and out. when video ends.
// leaves place for the text. add mute button.

let items = [
  {
    title: "QUIENES SOMOS",
    content: (
      <p>
        EN <span className="text-white">ABSOLUTO GROUP</span>, NOS DEDICAMOS A
        TRANSFORMAR ESPACIOS CON MATERIALES DE CONSTRUCCIÓN DE ALTA CALIDAD Y
        DISEÑO INNOVADOR. CON AÑOS DE EXPERIENCIA EN EL MERCADO, OFRECEMOS UNA
        AMPLIA GAMA DE PRODUCTOS QUE INCLUYEN MESADAS DE MÁRMOL, GRANITO Y
        CUARZO, BALDOSAS ATÉRMICAS Y DE ALTO TRÁNSITO, BALDOSAS CALCÁREAS,
        REVESTIMIENTOS Y PISOS DE PVC. ADEMÁS, DISEÑAMOS Y FABRICAMOS MUEBLES A
        MEDIDA PARA SATISFACER LAS NECESIDADES Y GUSTOS DE CADA CLIENTE. NUESTRA
        PASIÓN POR EL DETALLE Y EL COMPROMISO CON LA EXCELENCIA NOS PERMITEN
        CREAR AMBIENTES ÚNICOS Y FUNCIONALES, ASEGURANDO LA SATISFACCIÓN DE
        NUESTROS CLIENTES EN CADA PROYECTO QUE EMPRENDEMOS.
      </p>
    ),
  },
  {
    title: "NUESTRA MISION",
    content: (
      <p>
        NUESTRA MISION ES SUPERAR LAS EXPECTATIVAS DE NUESTROS CLIENTES,
        OFRECIENDO
        <span className="text-white">SOLUCIONES INNOVADORAS Y SOSTENIBLES</span>
        CON UN SERVICIO EXCEPCIONAL. TRABAJAMOS CON PASIÓN Y DEDICACIÓN PARA
        MEJORAR CONTINUAMENTE NUESTROS PRODUCTOS Y SERVICIOS, CONTRIBUYENDO AL
        BIENESTAR Y LA SATISFACCIÓN DE QUIENES CONFÍAN EN NOSOTROS PARA SUS
        PROYECTOS.
      </p>
    ),
  },
  {
    title: "NUESTROS VALORES",
    content: (
      <p>
        HONRAMOS EL ARTE DEL MARMOLERO Y OTRASESPECIALIDADES EN
        LACONSTRUCCIÓN,VALORANDO EL TRABAJOMANUAL Y LA TRADICIÓNQUE RESPALDA
        CADA UNO DE NUESTROS PRODUCTOS. ESTAMOS CONSTANTEMENTE BUSCANDO
        NUEVASFORMAS DE MEJORAR Y EXPANDIR NUESTRA OFERTA, MANTENIÉNDONOS A
        LAVANGUARDIA DE LAS TENDENCIAS Y TECNOLOGÍAS DEL MERCADO.
      </p>
    ),
  },
];

const AboutUs = () => {
  return (
    <Container
      className="box box--margin offset border-top-0 border-bottom-0"
      fluid
    >
      <Carousel interval={null} wrap touch id="about">
        {items.map((item, index) => (
          <Carousel.Item key={index}>
            <Stack className="about__stack m-3 text-center text-secondary align-items-center justify-content-center">
              <h2 className="mb-4 text-white">{item.title}</h2>
              {item.content}
            </Stack>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default AboutUs;
