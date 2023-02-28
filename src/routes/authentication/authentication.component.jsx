import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sigin-in-form/sign-in-form.component";
///Users/karthikrashinkar/Downloads/Developers.com /crwn-clothing/src/components/sigin-in-form/sign-in-form.component.jsx
import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
