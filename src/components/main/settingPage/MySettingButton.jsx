const MySettingButton = function (props) {
  return (
    <button class="text-black px-4 py-2 border-0 btn-background shadow-sm p-3 bg-body-tertiary text-nowrap">
      {props.text}
    </button>
  );
};

export default MySettingButton;
