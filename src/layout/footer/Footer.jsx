import {

  FooterStyled,
} from "./Footer.styled";


const Footer = () => {


  return (
    <footer className="flex justify-center bg-grey fixed bottom-0 w-full mx-auto">
      <FooterStyled>
        <ul className=" mx-auto">
          <li>© 2024 </li>
          <li className="flex">
            <p className="mr-5">
              Made by
            </p>
              <a
                href="https://www.linkedin.com/in/polishchuk-olha/"
                target="_blank"
                className="name"
                rel="noopener noreferrer"
              >
                Olha Polishchuk
              </a>
          </li>
        </ul>
      </FooterStyled>
    </footer>
  );
};

export default Footer;
