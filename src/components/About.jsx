const About = () => {
  return (
    <section>
      <div>
        <h2>
          <Trans i18nKey="about.title"></Trans>
        </h2>
        <p>
          <Trans i18nKey="about.description"></Trans>
        </p>
        <ul>
          <Slide cascade direction="up" duration="500" damping="0.3">
            <li>{"about.item1"}</li>
            <li>{"about.item2"}</li>
            <li>{"about.item3"}</li>
            <li>{"about.item4"}</li>
          </Slide>
        </ul>
        <button>{"about.button"}</button>
      </div>
    </section>
  );
};

export default About;
