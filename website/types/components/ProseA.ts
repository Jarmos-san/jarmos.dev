/**
 * The type definition of the props for the `ProseA` component.
 */
export interface ProseAProps {
  href?: string;
  target?:
    | "_blank"
    | "_parent"
    | "_self"
    | "_top"
    | (string & object)
    | null
    | undefined;
}
