import { StyledFooter } from "./styles/Footer";
import { Icon } from "./styles/Icon";

export function Footer() {
  return (
    <StyledFooter>
      <div>
        <ul>
          <li>About</li>
          <li>Contact</li>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
        </ul>
        <span>&copy;</span>Your website 2020. All Rights Reserved.
      </div>
      <div>
        <Icon src="src/assets/facebookIcon.png" size="footer" />
        <Icon src="src/assets/icons8-twitter-50.png" size="footer" />
        <Icon src="src/assets/icons8-instagram-50.png" size="footer" />
      </div>
    </StyledFooter>
  );
}
