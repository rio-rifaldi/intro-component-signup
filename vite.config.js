import { defineConfig } from "vite";


export default defineConfig({
	//..other config
	css: {
		preprocessorOptions: {
			scss: {
				silenceDeprecations: ["legacy-js-api"],
			},
		},
	},
});
