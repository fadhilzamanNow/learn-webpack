import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
const config : webpack.Configuration = {
    context : import.meta.dirname + "/src",
    mode : "production",
    //multiple main entry
    //entry : ["./index.ts","./index2.ts"],  
    //object multiple  entry 
    entry : {
        "main" : {
            import : "./index.ts",
            dependOn : "together"
        },
        "other" : {
            import : "./index2.ts",
            dependOn : "together"
        },
        "together" : {
            import : "./source.ts",
            filename : "addtogether",
            //runtime : "a1"
        }
    },
    output : {
        path : import.meta.dirname + "/dist",
        filename : "[name]-[contenthash].bundle.js",
    },
    module : {
        rules : [
            {
                test : /\.tsx?$/,
                use : "ts-loader",
                exclude : /node_modules/,
            },
            {
                test : /\.css$/,
                use : [
                    "style-loader","css-loader"
                ],
                exclude : /node_modules/,
            }
        ]
    },
    resolve : {
        extensions : [".tsx",".ts",".js"]
    },
    plugins : [new HtmlWebpackPlugin({template : "./index.html"})]
}
export default config;