/**
 * Composable to detect whether the current viewport width corresponds to a
 * mobile device.
 *
 * @remarks
 * This composable listens for the `resize` event on the `window` object
 * and updates the reactive {@link isMobile} value whenever the viewport width
 * crosses the defined breakpoint (default: `768px`).
 *
 * @example
 * ```ts
 * const { isMobile } = useIsMobile()
 *
 * watch(isMobile, (value) => {
 *   console.log(value ? 'Mobile layout' : 'Desktop layout')
 * })
 * ```
 *
 * @returns An object containing:
 * - `isMobile` - a reactive `Ref<boolean>` that is `true` if the viewport
 *   width is less than or equal to `768px`, otherwise `false`.
 */
export const useIsMobile = () => {
  const isMobile = ref<boolean>(false);

  /**
   * Updates the `isMobile` ref based on the current viewport width.
   */
  const checkIsMobile = (): void => {
    isMobile.value = window.matchMedia("(max-width: 768px)").matches;
  };

  onMounted(() => {
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", checkIsMobile);
  });

  return { isMobile };
};
