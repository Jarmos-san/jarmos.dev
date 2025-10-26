import type { NavLink } from "../models/links";

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

/**
 * Type definition of the props for the `MobileMenu` component.
 */
export interface MobileMenuProps {
  /**
   * The navigation links to the various sections of the site.
   */
  navLinks: NavLink[];

  /**
   * The social links to render on the mobile menu component.
   */
  socialLinks?: SocialLink[];
}
