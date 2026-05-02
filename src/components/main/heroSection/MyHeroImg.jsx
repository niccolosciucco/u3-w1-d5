const MyHeroImg = function (props) {
  return (
    <img
      src={props.url}
      alt="Friends Logo"
      className="img-fluid mb-4"
      style={{ maxWidth: "350px", borderRadius: "10px" }}
    />
  );
};

export default MyHeroImg;
