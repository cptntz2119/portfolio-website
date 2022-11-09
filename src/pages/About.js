// import { Link } from "react-router-dom";
import Techstack from "./Techstack";
import {SKILLS} from '../data';
const About = () => {
  return (
    <section className="section">
      <h2>About me</h2>
      {/* <Link to='/' className='btn'>
        Back Home
      </Link> */}
      <div className="about-container">
        <p>
          Greetings! I am <strong>Dong</strong>, living in{" "}
          <strong>Richmond</strong>, Beautiful British Columbia, Canada.
          <br />
          Full-stack web developer, former electrical engineer specializing in
          wireless communications, is always fascinated by technologies and its
          innovations.
          <br />
          Eager to learn, and enjoy diving into depth of web development. Aim to
          make contributions to the web development community, while making best
          balance between work and family life.
          <br />
          Aparting from engineering, something else about me!
        </p>
        <ul>
          <li>Love arts: own a small art studio business.</li>
          <li>
            Sports enthusiasts: snow-borading, soccer, tennis, golf, and
            fishing.
          </li>
          <li>
            Foodie: enjoy exploring and sharing all kinds of delecious food.
          </li>
          <li>Fashionable: favorite brands are Dior, LV, and Gucci.</li>
        </ul>
      </div>
      <div className="skills-container">
      <h1>
              Professional <strong >Skillset </strong>
            </h1>
            {SKILLS.map((skill, index) => (
              <Techstack
                name={skill.name}
                initialRating={skill.initialRating}
                key={index}
              />
            ))}
      </div>
    </section>
  );
};
export default About;
