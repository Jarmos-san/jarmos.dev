/**
 * Interface representing a personal project.
 */
export interface Project {
  /**
   * The name of the project.
   */
  name: string;

  /**
   * The description of the project.
   */
  desc: string;

  /**
   * The URL to the source code of the project.
   */
  href: string;

  /**
   * Development status of the project.
   */
  isExperimental?: boolean;
}
