import { EuiHeader, EuiHeaderLink, EuiHeaderLinks, EuiHeaderLogo, EuiHeaderSectionItem } from "@elastic/eui";
import headerLogo from '../assets/header-logo.svg';

export const Header = () => {
  return (
    <EuiHeader>
      <EuiHeaderSectionItem border="right">
        <EuiHeaderLogo iconType={headerLogo}>Gifts exchange</EuiHeaderLogo>
      </EuiHeaderSectionItem>

      <EuiHeaderSectionItem>
        <EuiHeaderLinks>
          <EuiHeaderLink isActive>Link</EuiHeaderLink>

          <EuiHeaderLink>Link</EuiHeaderLink>

          <EuiHeaderLink iconType="user">Log in</EuiHeaderLink>
        </EuiHeaderLinks>
      </EuiHeaderSectionItem>
    </EuiHeader>
  );
}