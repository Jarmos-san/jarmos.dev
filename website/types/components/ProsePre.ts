/**
 * Props for the `ProsePre` component.
 *
 * This interface defines the metadata and configurations for rendering a
 * pre-formatted code block inside MDC/Markdown content via the Nuxt Content
 * module or some customised `ProsePre` component.
 */
export interface ProsePreProps {
  /**
   * The raw code content to be rendered which will render an empty block if
   * omitted.
   *
   */
  code?: string;

  /** The language identifier used for syntax highligting using Shiki. If `null`
   * or `undefined` then no syntax highlighting is applied.
   */
  language?: string | null;

  /** Optional file name to display above the code block. If `null` then no file
   * names are rendered above the code block.
   */
  filename?: string | null;

  /** The list of line numbers to highlight in the code block. **/
  highlights?: number[];

  /**
   * Metadata string extracted from the code fence for manipulating the
   * rendering behaviour of the code blocks.
   **/
  meta?: string | null;

  /** Additional CSS class names to apply to the container element. **/
  class?: string | null;
}
