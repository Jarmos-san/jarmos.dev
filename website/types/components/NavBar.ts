import type { NavLink } from "../models/links";
import type { SocialLink } from "./MobileMenu";

/**
 * Type definitions for the props of the `NavBar` component.
 */
export interface NavBarProps {
  navLinks: NavLink[];
  socialLinks?: SocialLink[];
}
