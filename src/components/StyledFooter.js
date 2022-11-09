import SocialMedia from "../pages/SocialMedia";
import "../styles/StyledFooter.css";

const StyledFooter = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div>
      <div className="div-spacer"></div>
      <div className="footer-container">
        <div className="footer-copyright">
          <h3>Developed by Dong Zhang</h3>
        </div>
        <div className="footer-copyright">
          <h3>Copyright © {year} </h3>
        </div>
        <div className="footer-body">
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};
export default StyledFooter;
