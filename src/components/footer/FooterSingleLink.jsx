const FooterSingleLink = function (props) {
  return props.link.map((link) => {
    return (
      <p className="small mb-2" key={link}>
        {link}
      </p>
    );
  });
};

export default FooterSingleLink;
