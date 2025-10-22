import type { LegalDoc, NavLink } from "~/types/models/links";

/**
 * Type definition of the props to pass to the component.
 *
 * @example
 * ```vue
 * <template>
 *   <CommonFooter
 *     :nav-links="navLinks"
 *     :legal-docs="legalDocs"
 *     :logo="footerLogo"
 *   >
 *     <span>Hello World!</span>
 *   </CommonFooter>
 * </template>
 *
 * <script setup lang="ts">
 * const navLinks: NavLink[] = [
 *   { label: "Home", href: "/" },
 *   { label: "About", href: "/about-me" },
 *   { label: "Blogs", href: "/blogs" },
 * ];
 *
 * const legalDocs: LegalDoc[] = [
 *   { label: "Terms and Conditions", href: "/terms-and-conditions" },
 *   { label: "Distribution Rights", href: "/distribution-rights" },
 *   { label: "Privacy Policy", href: "/privacy-policy" },
 * ];
 *
 * const footerLogo = "/icons/logo.svg";
 * </script>
 * ```
 *
 * @public
 */
export interface FooterProps {
  /**
   * The (optional) navigation links.
   */
  navLinks?: NavLink[];

  /**
   * The (optional) links to the legal documents.
   */
  legalDocs?: LegalDoc[];

  /**
   * The logo to render on the footer.
   */
  logo?: string;
}
