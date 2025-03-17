import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const config: webpack.Configuration = {
  context: import.meta.dirname + "/src",
  mode: "development",
  //multiple main entry
  //entry : ["./index.ts","./index2.ts"],
  //object multiple  entry
  entry: {
    main: {
      import: "./index.ts",
    },
    other: {
      import: "./index2.ts",
    },
    /*  together: {
      import: "./source.ts",
      filename: "addtogether", */
    //runtime : "together-runtime"
    //},
  },
  output: {
    //assetModuleFilename  : "hasil-[hash]",
    asyncChunks: true,
    //auxiliaryComment : "test comment doang dari auxiliary",
    charset: true,
    //chunkFormat : "" format of the chunk , e.g module, commonjs, the default is on the target options ,
    //chunkLoadTimeout : 3600,
    path: import.meta.dirname + "/dist",
    filename: "new1-[name]-[chunkhash].bundle.js",
    chunkFilename: "chunk-[chunkhash]-[id].js",
    //chunkFormat : ""
    //chunkLoadingGlobal : ""
    //chunkLoading : "require", //changed how its being async ,
    clean: true,
    //compareBeforeEmit : false,
    crossOriginLoading: "anonymous",
    cssChunkFilename(pathData, assetInfo) {
      return `cssChunk-${pathData}-[id]-${assetInfo?.contenthash}.css`;
    },
    cssFilename: "hasil.css",
    devtoolFallbackModuleFilenameTemplate: "ok aman fallback module",
    devtoolModuleFilenameTemplate: "webpack-[loaders]",
    hashDigest: "hex",
    hashDigestLength: 30,
    hashFunction: "sha256",
    hotUpdateChunkFilename: "chunkUpdate-[chunkhash]-[id].js",
    iife: true,
    ignoreBrowserWarnings: true,
    importFunctionName: "__theimport__",
    //library : [],
    /*   library : {
      name : "libr",
      type : "commonjs",
      export : ["default"],
      auxiliaryComment : "commnet library",
      umdNamedDefine : false,
    }, */
    /* libraryExport : ["default"],
    libraryTarget : "module", */
    module: false,
    pathinfo: "verbose",
    //publicPath : "",
    /* scriptType : "module", */

    //enabledChunkLoadingTypes : [], is it required, import, jsonc
    //enabledLibraryTypes : [], type of library module that will be bundled from 3rd pary
    //enabledWasmLoadingTypes : [],
    /* environment : {
      //every es features to be enabled or disabled
    } */
  },
  module: {
    //defaultRules : [], fallback if the module.rules is not set
    generator: {
      asset: {
        binary: true,
        dataUrl: {
          encoding: "base64",
          mimetype: "",
        },
        emit: true,
        filename: "static-[path]-[name][ext]",
        publicPath: "", // if library from sources
        outputPath: "", //location for assets path
      },
      "asset/inline" : {
        binary : false,
        dataUrl :  {
          encoding : "base64",
          mimetype : "",
        },
      },
      "asset/resource" : {
        binary : false,
      },
      javascript : {
        
      },
      "javascript/auto" : {

      },
      "javascript/dynamic": {

      },
      "javascript/esm" : {

      },
      "css/auto" : {

      },
      "css/global " : {

      },
      "css/module" : {

      },
      "css" : {

      },
    },
    parser : {
      "css" : {
        url : true
      },
      "javascript" : {
        commonjsMagicComments  : false,
        dynamicImportFetchPriority : "high",
        dynamicImportMode : "lazy",
        dynamicImportPrefetch : true,
        dynamicImportPreload : false,
        importExportsPresence : "error",
        importMeta : undefined,
        importMetaContext : true,
        overrideStrict : "non-strict",
        reexportExportsPresence : "error",
        url : false,
      },
    },
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
    new MiniCssExtractPlugin({ filename: "hasil-[id]-[name].css" }),
  ],
  watch: true,
};
export default config;
