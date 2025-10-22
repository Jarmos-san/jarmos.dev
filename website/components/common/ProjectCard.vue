<template>
  <div class="container" :style="{ borderLeft: `4px solid ${borderColor}` }">
    <div class="header">
      <span>{{ props.name }}</span>
      <span v-if="props.isExperimental">
        <img
          src="/icons/wip.svg"
          alt="work-in-progress project"
          title="WIP Project"
        >
      </span>
    </div>
    <p>{{ props.desc }}</p>
    <a :href="props.href" target="_blank">Source Code</a>
  </div>
</template>

<script lang="ts" setup>
import type { ProjectCardProps } from "~/types/components/ProjectCard";

// Define the props for the component
const props = defineProps<ProjectCardProps>();

// A predefined list of hex colour codes which will be assigned to each project after
// they're hashed to ensure visually distinct left-side borders
const borderColors = [
  "#FF5733",
  "#FF8D1A",
  "#FFC300",
  "#DAF7A6",
  "#28B463",
  "#17A589",
  "#2E86C1",
  "#5B2C6F",
  "#C70039",
  "#900C3F",
  "#F39C12",
  "#8E44AD",
  "#E74C3C",
  "#1ABC9C",
  "#2C3E50",
  "#F1C40F",
  "#9B59B6",
  "#34495E",
  "#7D3C98",
  "#16A085",
];

/**
 * Converts a string into a numeric hash.
 *
 * @param str - Any string to be hashed.
 * @returns A positive 32-bit integer representing the hash of the string.
 *
 * @example
 * hashStringToNumber('ProjectName')
 */
const hashStringToNumber = (str: string): number => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0; // convert to 32bit integer
  }

  return Math.abs(hash);
};

/**
 * Maps a given project name to one of the predefined border colors.
 *
 * @param name - The project name string used to generate a color.
 * @returns A hex color string selected from borderColors.
 *
 * @example
 * getBorderColor('ProjectName') // -> "#FF5733"
 */
const getBorderColor = (name: string): string | undefined => {
  const hash = hashStringToNumber(name);
  const index = hash % borderColors.length;
  return borderColors[index];
};

/**
 * The color assigned to the current project's left border.
 * This ensures the same project name will always map to the same color.
 */
const borderColor = getBorderColor(props.name);
</script>

<style lang="scss" scoped>
.container {
  border-radius: 0.5rem;
  background-color: #1c2c35;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.75rem;
  border-top: 1px solid #b0fbbc;
  border-right: 1px solid #b0fbbc;
  border-bottom: 1px solid #b0fbbc;

  .header {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  a,
  span {
    font-weight: 400;
    color: #ecf8ff;
  }

  a,
  p {
    font-size: 1rem;
  }

  span {
    font-size: 1.5rem;
  }

  p {
    font-weight: 700;
    color: #c9e2f0;
  }

  a {
    border: 2px solid #7cc9ff;
    padding: 0.5rem;
    border-radius: 0.37rem;
    font-weight: normal;
    font-size: 1rem;
    width: 7.5rem;
    text-align: center;
  }
}
</style>
