const MySettingAvatar = function (props) {
  return (
    <p class="fw-bold mb-0 d-flex align-items-center">
      <img
        src={props.src}
        class="avatar-size me-1"
        style={{ height: "auto", width: "3em" }}
      />
      {props.text}
    </p>
  );
};

export default MySettingAvatar;
