const Experience = () => {
  return (
    <section className="section-experience" id="experience">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary heading-secondary--dark wow fadeInUp">
          Experience
        </h2>
      </div>

      <div className="row wow fadeInUp">
        <div className="experience">
          <div className="experience__text">
            <h3 className="experience__heading">Software Engineer</h3>
            <p className="u-margin-bottom-small">
              <b>Govtech DSAID</b> - Singapore
            </p>
            <p>
              <b>
                I worked on the Trusted Centre for Sensor Data's frontend
                platform
              </b>
            </p>
            <ul>
              <li>
                Built geospatial and time-series visualisation feature for
                consumption data using MapboxGL, TileServerGL and React/Redux
              </li>
              <li>
                Built the frontend for Team Access Requests and Recurrent
                Concierge Requests features using React/Redux
              </li>
              <li>
                Wrote frontend integration and end-to-end tests using Cypress
              </li>
              <li>
                Introduced parallelisation to frontend test suite using Cypress
                director service reducing run time by 100%
              </li>
              <li>
                Planned and executed migration of UI library from Mui v4 to v5
              </li>
              <li>
                Shared on various software engineering related topics during
                division level engineering sharing
              </li>
            </ul>
            <p className="experience__date">Jun 2019 - PRESENT</p>
          </div>
        </div>
      </div>

      <div className="row wow fadeInUp">
        <div className="experience">
          <div className="experience__text">
            <h3 className="experience__heading">
              Software Developer (Freelance)
            </h3>
            <p className="u-margin-bottom-small">
              <b>Vide</b> - Singapore
            </p>
            <ul>
              <li>
                Implemented frontend dashboard and forms for upcoming beta
                launch using Nextjs
              </li>
              <li>
                Wrote basic UI test cases using Jest and React Testing Library
              </li>
            </ul>
            <p className="experience__date">Sep 2020 - Dec 2020</p>
          </div>
        </div>
      </div>

      <div className="row wow fadeInUp">
        <div className="experience">
          <div className="experience__text">
            <h3 className="experience__heading">Software Engineer Intern</h3>
            <p className="u-margin-bottom-small">
              <b>Edison Inc.</b> - San Francisco Bay Area
            </p>
            <p>
              <b>
                I worked on UI features for Edison Mail macOS(Electron) app used
                by 1.5 million users worldwide
              </b>
            </p>
            <ul className="u-margin-bottom-small">
              <li>
                Implemented email account colors support for better email
                viewing experience
              </li>
              <li>
                Redesigned and built in-app translation with i18n library to
                abstract codebase out for translators
              </li>
              <li>
                Enhanced composer related features (fonts, popups, etc) for
                greater capabilities and convenience during email crafting
              </li>
            </ul>
            <p>
              <b>
                I led the development for a new calendar app that was highly
                requested from user feedback (~30%)
              </b>
            </p>
            <ul>
              <li>
                Built support for sync with users' personal calendar provider
                using Caldav and Google Calendar API
              </li>
              <li>
                Improved responsiveness (&gt;1sec) by setting up
                local/external/sync operations to run asynchronously using Redux
                Observables
              </li>
              <li>
                Designed and built UI and backend logic for the calendar with
                React
              </li>
              <li>
                Integrated Edison Calendar app into Edison Mail as a plugin to
                serve users' productivity needs better
              </li>
            </ul>
            <p className="experience__date">Jan 2020 - Dec 2020</p>
          </div>
        </div>
      </div>

      <div className="row wow fadeInUp">
        <div className="experience">
          <div className="experience__text">
            <h3 className="experience__heading">Software Engineer Intern</h3>
            <p className="u-margin-bottom-small">
              <b>NodeFlair</b> - Singapore
            </p>
            <p>
              <b>
                I worked on features allowing companies to manage and bridge
                communication with tech talents
              </b>
            </p>
            <ul>
              <li>
                Implemented backend APIs for the new talent management page
                using Ruby on Rails and PostgreSQL
              </li>
              <li>
                Enabled real-time in-app chat between companies and tech talents
                using Rails Action Cable
              </li>
              <li>
                Built a new onboarding form and increased user sign ups by 100%
                using React
              </li>
              <li>
                Maintained various AWS services powering NodeFlair's operations
              </li>
              <li>
                Introduced Agile/Scrum based workflow to the engineering team
              </li>
            </ul>
            <p className="experience__date">May 2019 - Aug 2019</p>
          </div>
        </div>
      </div>

      <div className="row wow fadeInUp">
        <div className="experience">
          <div className="experience__text">
            <h3 className="experience__heading">Web Development Instructor</h3>
            <p className="u-margin-bottom-small">
              <b>National University of Singapore</b> - Singapore
            </p>
            <ul>
              <li>
                Served as instructor for Full Stack Web Development and Git
                workshops
              </li>
              <li>Debugged issues faced by students</li>
              <li>
                Helped students to better understand concepts in web development
              </li>
              <li>Provided tips to students on web development</li>
            </ul>
            <p className="experience__date">May 2019 - July 2019 </p>
          </div>
        </div>
      </div>

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary heading-secondary--dark wow fadeInUp">
          Education
        </h2>
      </div>

      <div className="row wow fadeInUp">
        <div className="experience">
          <div className="experience__text">
            <h3 className="experience__heading">
              National University of Singapore
            </h3>

            <h4 className="u-margin-bottom-small">
              Bachelor's Degree, Computer Science
            </h4>
            <p>
              <b>Software Engineering Focus Area (Merit): </b>
            </p>
            <ul className="u-margin-bottom-small">
              <li>Software Engineering</li>
              <li>Software Design Principles and Patterns</li>
              <li>Formal Methods for Software Engineering</li>
            </ul>
            <p>
              <b>Other Relevant Coursework: </b>
            </p>
            <ul>
              <li>Relational Databases</li>
              <li>Data Structures and Algorithms</li>
              <li>Design and Analysis of Algorithms</li>
              <li>Computer Networks</li>
              <li>Internet Architecture</li>
              <li>Operating Systems</li>
            </ul>
            <p className="experience__date">Aug 2017 - Present</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
