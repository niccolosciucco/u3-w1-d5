const FooterSingleLink = function (props) {
  return props.link.map((link, index) => {
    return (
      <p className="small mb-2 footer-link" key={index}>
        {link}
      </p>
    );
  });
};

export default FooterSingleLink;
