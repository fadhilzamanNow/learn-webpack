import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const config: webpack.Configuration = {
  context: import.meta.dirname + "/src",
  mode: "production",
  //multiple main entry
  //entry : ["./index.ts","./index2.ts"],
  //object multiple  entry
  entry: {
    main: {
      import: "./index.ts",
      dependOn: "together",
    },
    other: {
      import: "./index2.ts",
      dependOn: "together",
    },
    together: {
      import: "./source.ts",
      filename: "addtogether",
      //runtime : "a1"
    },
  },
  output: {
    asyncChunks: true,
    path: import.meta.dirname + "/dist",
    filename: "[name]-[contenthash].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./index.html" }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
};
export default config;
