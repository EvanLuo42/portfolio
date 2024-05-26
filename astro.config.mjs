import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    }
  },
  integrations: [react(), tailwind({
    applyBaseStyles: false
  }), mdx()]
});