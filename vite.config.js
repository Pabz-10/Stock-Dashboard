import { defineConfig } from "vite";
import replace from "@rollup/plugin-replace";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		replace({
			"process.env.VITE_REACT_APP_API_KEY": JSON.stringify(
				process.env.VITE_REACT_APP_API_KEY
			),
			preventAssignment: true,
		}),
	],
});
