import react from "@vitejs/plugin-react";
import sass from "vite-plugin-sass-dts";
import {defineConfig} from "vite";

export default defineConfig(
    {
        plugins:[sass(), react()],
        base:"/v1/"
    }
);