/**
 * Composable for toggling a boolean state.
 *
 * @remarks
 * This composable provides a reactive boolean state along with a simple
 * function to toggle its value between `true` and `false`.
 *
 * @example
 * ```ts
 * const { state: isOpen, toggle } = useToggle()
 *
 * toggle()        // flips isOpen between true and false
 * ```
 *
 * @param initialValue - The initial value of the state (default: `false`).
 * @returns An object containing:
 * - `state` - a reactive `Ref<boolean>` representing the current boolean value.
 * - `toggle` - a function to flip the value of `state`.
 */
export const useToggle = (initialValue = false) => {
  const state = ref(initialValue);
  const toggle = () => (state.value = !state.value);

  return { state, toggle };
};
