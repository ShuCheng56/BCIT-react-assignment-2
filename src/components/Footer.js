import React from "react";

function Footer(props) {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>
        &copy; {currentYear} {props.author}
      </p>
    </footer>
  );
}

Footer.defaultProps = {
  author: "Shu Cheng",
};

export default Footer;
