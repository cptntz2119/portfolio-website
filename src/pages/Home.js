import myPic from "../myPic.png";
import SocialMedia from "./SocialMedia";
import TypeWriter from "./TypeWriter";
import "../styles/Home.css";

const Home = () => {
  return (
    <section className="home-container">
      <div className="content-container">
        <div className="description-container">
          <h1 style={{ paddingBottom: 15 }} className="heading">
            Hi There!{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h1>

          <h1 className="heading-name">
            I'M
            <strong className="main-name"> Dong Zhang (tony)</strong>
          </h1>

          <p className="heading-description blockquote">
            Welcome to my portfolio webpage. I am always fascinated by full
            stack web development, and enjoy diving into depth of it. I am
            aiming to make contributions to the web development community, while
            making best balance between work and family life.
          </p>
          <div className="typeWriter-container">
            <TypeWriter />
          </div>
        </div>
        <div className="img-container">
          <img src={myPic} className="profile-pic" alt="avatar" />
        </div>
      </div>
      <div className="home-about-section" id="about">
        <div className="home-about-social">
          <h1>Get in Touch</h1>
          <p>
            {" "}
            Whether you want to get in touch, or talk about a project
            collaboration.
            <br />
            <strong>Feel free to connect with me</strong>
          </p>
          <SocialMedia />
        </div>
      </div>
    </section>
  );
};
export default Home;
