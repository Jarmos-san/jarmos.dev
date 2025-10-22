import { CommonFooter } from "#components";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import { describe, test } from "vitest";

describe("components/common/Footer", () => {
  test("hello world!", async () => {
    const wrapper = await mountSuspended(CommonFooter);
    console.log(wrapper);
  });
});
