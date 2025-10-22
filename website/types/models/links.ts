/**
 * Interface representing a link.
 */
interface Link {
  /**
   * The label for the link.
   */
  label: string;

  /**
   * The URL of the link.
   */
  href: string;
}

/**
 * Interface representing a link to an internal page of the website.
 */
export interface NavLink extends Link {
  /**
   * The label of the link.
   */
  label: "Home" | "About" | "Blogs" | "Projects";
}

/**
 * Interface representing a link to a legal document.
 */
export interface LegalDoc extends Link {
  label: "Terms and Conditions" | "Distribution Rights" | "Privacy Policy";
  href: "/terms-and-conditions" | "/distribution-rights" | "/privacy-policy";
}
