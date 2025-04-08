import { defineBuildConfig } from "unbuild";
import Vue from "unplugin-vue/rollup";
import VueMacros from "vue-macros/rollup";
import { join } from "desm";

export default defineBuildConfig({
  entries: [
    "src/index.ts"
  ],
  rollup: {
    inlineDependencies: true,
  },
  declaration: true,
  hooks: {
    async "rollup:options"(ctx, options) {
      options.plugins = [
        VueMacros({
          plugins: {
            vue: Vue(),
          },
        }),
        ...options.plugins,
      ];
    },
  },
});
