import path from "path";
import webpack from "webpack"
import { fileURLToPath } from "url";
const config : webpack.Configuration = {
    mode : "production",
    entry : "./src/index.ts",
    output : {
        path : "/home/progz/Documents/projects/learn-webpack/dist",
        filename : "final-bundle.js"
    },
    module : {
        rules : [
            {
                test : /\.tsx?$/,
                use : "ts-loader",
                exclude : /node_modules/,
            }
        ]
    },
    resolve : {
        extensions : [".tsx",".ts",".js"]
    },
}

export default config;