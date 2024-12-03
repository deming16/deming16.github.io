const Skills = () => {
  return (
    <section className="mt-[-10vh] bg-[#2e3830] py-[13rem]" id="skills">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary heading-secondary--light wow fadeInUp">
          Skills
        </h2>
      </div>

      <div className="row">
        <div className="col-1-of-2 wow fadeInUp">
          <div className="skill-box">
            <span className="skill-box__icon devicons devicons-java"></span>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Languages/Frameworks
            </h3>
            <div className="skill-box__text">
              <ul>
                <li>
                  <b>Currently Using:</b> TypeScript · React/Redux · Cypress ·
                  MapboxGL · Node/Express
                </li>
                <li>
                  <b>Previously Used:</b> PostgreSQL/Sequelize · Ruby on Rails ·
                  Python · Flutter · Unity/C#
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-1-of-2 wow fadeInUp">
          <div className="skill-box">
            <span className="skill-box__icon devicons devicons-git"></span>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Technologies
            </h3>
            <div className="skill-box__text">
              <ul>
                <li>
                  <b>Currently Using:</b> Git/GitHub · Docker · Microsoft Azure
                </li>
                <li>
                  <b>Previously Used:</b> AWS · Electron
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
