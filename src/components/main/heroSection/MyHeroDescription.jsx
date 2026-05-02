const MyHeroDescription = function (props) {
  return (
    <p
      className="text-white fs-5 mb-4"
      style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
    >
      {props.text}
    </p>
  );
};

export default MyHeroDescription;
