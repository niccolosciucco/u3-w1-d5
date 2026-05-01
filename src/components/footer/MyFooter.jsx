import FooterButton from "./FooterButton";
import FooterIcons from "./FooterIcons";
import FooterLicense from "./FooterLicense";
import FooterLinks from "./FooterLinks";

const MyFooter = function () {
  return (
    <section className="mt-5 pb-5 text-secondary pointer">
      <FooterIcons />
      <FooterLinks />
      <FooterButton />
      <FooterLicense />
    </section>
  );
};

export default MyFooter;
