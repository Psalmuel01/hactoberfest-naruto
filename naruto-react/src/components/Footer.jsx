const Footer = () => {
  function tap() {
    const link = document.getElementById("idblink");
    window.location.href = "https://github.com/vikhyatsingh123";
  }
  return (
    <footer className="footer">
      Developed and Designed By{" "}
      <span id="idblink" onClick={tap} style={{ cursor: "pointer" }}>
        <u>Vikhyat Singh</u>
      </span>{" "}
      | © All Rights Reserved
      <h5>Follow Me on : </h5>
      <div className="icon">
        <a
          href="https://facebook.com/vikhyatsingh123/"
          className="fa fa-facebook"
          target="_blank"
        ></a>
        <a href="#" className="fa fa-twitter"></a>
        <a
          href="https://github.com/vikhyatsingh123/"
          className="fa fa-github"
          target="_blank"
        ></a>
        <a
          href="https://www.linkedin.com/in/vikhyat-singh-337777197/"
          className="fa fa-linkedin"
          target="_blank"
        ></a>
        <a
          href="https://www.instagram.com/vikhyat552/"
          className="fa fa-instagram"
          target="_blank"
        ></a>
      </div>
    </footer>
  );
};

export default Footer;
