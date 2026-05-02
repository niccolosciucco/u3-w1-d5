import { Col } from "react-bootstrap";
import MySettingSubTitle from "./MySettingSubTitle";
import MySettingButton from "./MySettingButton";

const MySettingTitleSections = function (props) {
  return (
    <Col xs={12} lg={4} xl={3} className="mb-3 mb-lg-o">
      <MySettingSubTitle text={props.text} />
      {props.button && <MySettingButton text={props.buttonText} />}
    </Col>
  );
};

export default MySettingTitleSections;
