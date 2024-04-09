import inst from "../../assets/icons/instagram.svg";
import face from "../../assets/icons/facebook.svg";
import arrow from "../../assets/icons/contacts_arrow.svg";
import { NavLink } from "react-router-dom";
import {

  FooterStyled,
} from "./Footer.styled";


const Footer = () => {


  return (
    <footer className="flex flex-col justify-center bg-grey max-w-[1980px] mx-auto">
      <FooterStyled>
        <ul>
          <li>© 2024 </li>
          <li>
            <p>
              Made by{" "}
              <a
                href="https://www.linkedin.com/in/polishchuk-olha/"
                target="_blank"
                className="name"
                rel="noopener noreferrer"
              >
                Olha Polishchuk
              </a>
            </p>
          </li>
        </ul>
      </FooterStyled>
    </footer>
  );
};

export default Footer;
