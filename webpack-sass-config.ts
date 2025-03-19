import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack  from "webpack";

const config : webpack.Configuration = {
    module : {
        rules :  [
            {
                test: /\.s[ac]ss$/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                  },
                  {
                    loader: "css-loader",
                    /* options or query : {
                      
                    } */
                  },
                  {
                    loader: "sass-loader",
                  },
                ],
            }
         ],
    }
}

export default config;