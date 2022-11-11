// import { Link } from "react-router-dom";
import "../styles/About.css";
import Techstack from "./Techstack";
import { SKILLS } from "../data";
const About = () => {
  return (
    <section className="section">
      <h2>About me</h2>
      {/* <Link to='/' className='btn'>
        Back Home
      </Link> */}
      <div className="about-container">
        <p>
          Greetings, again! I am <strong>Dong</strong>, a proud father of boy &
          girl twins, living in <strong>Richmond</strong>, BC, Canada.
          <br />
          <br />
          I have an electrical engineering background, and now I am transfering
          into software. In any field, I believe continuing study is the key to
          success.
          <br />
          <br />I am willing and eager to learn, and enjoy diving into the depth
          of web development. Currently, my study list includes:
          <ul>
            <li>
              <span className="color-words">Java</span>
            </li>
            <li>
              <span className="color-words">AWS</span>
            </li>
            <li>
              <span className="color-words">
                "Computer Systems - A programmer's perspective"
              </span>{" "}
            </li>
          </ul>
          I am restudying <span className="color-words">Java</span> as my second
          main programming language, and learning best practices about{" "}
          <span className="color-words">AWS</span>.
          <br />
          The third is the most popular book in software engineering, in which I
          am reading to enhance my understanding of what is under the hood of a
          computer system.
          <br />
          <br />
          Tennis is my new hobby after snowboarding, because my two future
          tennis champions are in a tennis club and really enjoy it. I don't
          want to fall behind, so I registered myself for a beginner class in
          the same club. At lease doing some sports will keep me energizing for
          the coding.
          <br />
          <br />
          Aparting from those above, something else about me!
        </p>
        <ul>
          <li>Love arts: own a small art studio business.</li>
          <li>Sports enthusiasts: snow-borading, soccer, golf, and fishing.</li>
          <li>
            Foodie: enjoy exploring and sharing all kinds of delicious food.
          </li>
          <li>Fashionable: favorite brands are Dior, LV, and Arc'Teryx</li>
        </ul>
      </div>
      <div className="skills-container">
        <h1>
          Professional <strong>Skillset </strong>
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
