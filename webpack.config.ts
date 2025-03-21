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
    /*  devtoolFallbackModuleFilenameTemplate: "ok aman fallback module",
    devtoolModuleFilenameTemplate: "webpack-[loaders]",
    hashDigest: "hex",
    hashDigestLength: 30,
    hashFunction: "sha256",
    hotUpdateChunkFilename: "chunkUpdate-[chunkhash]-[id].js",
    iife: true,
    ignoreBrowserWarnings: true,
    importFunctionName: "__theimport__", */
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
    /* module: false, */
    //pathinfo: "verbose",
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
      /* asset: {
        binary: true,
        dataUrl: {
          encoding: "base64",
          mimetype: "",
        },
        emit: true,
        filename: "static-[path]-[name][ext]",
        publicPath: "", // if library from sources
        outputPath: "", //location for assets path
      }, */
      /*  "asset/inline" : {
        binary : false,
        dataUrl :  {
          encoding : "base64",
          mimetype : "",
        },
      }, */
      /*  "asset/resource" : {
        binary : false,
      }, */
      /*  javascript : {
        
      }, */
      /*     "javascript/auto" : {

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

      }, */
    },
    /*  parser : {
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
    }, */
    //noParse : /b$/,
    //unsafeCache : false
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
        resourceQuery: /(inline)?/,
        sideEffects: true,
        //scheme : "http"
        /* parser : {
          parse : {
              // only useful if type is rule.type is json
          }
        } */
        //issuer : /\.tsx/,
        //assert : { type : /ts/ }
        //compiler :
        //enforce : "" just normal loader,
        //"issuer" : "" the module that request an import
        //layer : "" we give the layer that match the test as a specific layer ,
        //issuerLayer : "", check wether the issuer layer name is matched
      },
      {
        test: /\.css$/,
        type: "asset",
        //mimetype : /s/,
        //oneOf : [],
        //options,
        /*      generator : {
          
        }, */
        parser: undefined,

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
    ],
    //fullySpecified : false
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".scss", ".css"],
    alias: {
      //"laziest" : import.meta.dirname + "src/other"
      other: import.meta.dirname + "/src/other.ts",
    },
    aliasFields: ["browser"],
    /* byDependency :{
      //can resolve the fields for every module type
   } */
    cache: true,
    //cachePredicate : () => true
    //cacheWithContext :
    //conditionNames : ["import"]
    descriptionFiles: ["package.json"],
    enforceExtension: false,
    //exportsFields : [],
    /* extensionAlias : {

  } */
    /* extensions : [] */
    fallback: {
      other: import.meta.dirname + "/src/other.ts",
    },
    //fullySpecified : false,
    //importsFields : [],
    //mainFields : [],
    //mainFiles : [],
    //plugins : []
    modules: ["node_modules"],
    unsafeCache: false,
    symlinks: false,
    //roots : [],
    //restrictions : []
    preferRelative: true,
    preferAbsolute: false,
  },
  /*  resolveLoader : {
      find the loader js/json in node_modules
  }, */
  plugins: [
    new HtmlWebpackPlugin({ template: "./index.html" }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({ filename: "hasil-[id]-[name].css" }),
    //false && new webpack.CleanPlugin()
    true && new webpack.CleanPlugin(),
    new webpack.ids.DeterministicChunkIdsPlugin({ maxLength: 3 }),
    new webpack.ids.DeterministicModuleIdsPlugin({ maxLength: 6 }),

  ],
  optimization: {
    // chunkIds : "deterministic",
    concatenateModules: true,
    emitOnErrors: true,
    avoidEntryIife: true,
    flagIncludedChunks: true,
    innerGraph: false,
    mangleExports: "size",
    mangleWasmImports: true,
    mergeDuplicateChunks: false, // it should be true
    minimize: true, // using terserplugin
    //minimizer : "custom" //custom minimizer
    // moduleIds : "deterministic",
    nodeEnv: "production",
    portableRecords: true,
    realContentHash: true,
    removeAvailableModules: true,
    removeEmptyChunks: true,
    runtimeChunk: {
      //name : (entrypoint : any) => `runtime-${entrypoint?.name}`,
      name: "allruntime-in-one",
    },
    sideEffects: true,
    splitChunks : {
      minSize : 1,
      //maxAsyncSize : 30,
      //maxInitialSize : 30,
      //maxSize : 2,
      chunks : "all",
      //maxAsyncRequests : 1,
      //maxInitialRequests : 1,
      //defaultSizeTypes : ['unknown']
      minChunks : 1,
      //minSizeReduction : 2000
      //enforceSizeThreshold : 20,
      name : "splitting",
      //usedExports : true,
     /*  cacheGroups : {
        default : false,
        
      } */
    }
  },
  performance : {
    hints : "error",
    maxAssetSize : 250000,
    maxEntrypointSize : 250000,
    //assetFilter : (fileName : string) => 
  },
 /*  node : {
    global : true,
    __dirname : false,
    __filename : false
  } */
 watch  : false,
 watchOptions : {
  aggregateTimeout : 2000,
  ignored : /node_modules/,
  poll : 1000,
  stdin : true
 },
 cache : {
  type : "filesystem",
  allowCollectingMemory : true,
  //buildDependencies
  cacheDirectory : import.meta.dirname + "/cache",
  cacheLocation : import.meta.dirname + "/cache/.cache_loc",
  memoryCacheUnaffected : true,
  compression : "gzip",
  hashAlgorithm : "sha256",
  idleTimeout : 2000,
  idleTimeoutAfterLargeChanges : 2000,
  idleTimeoutForInitialStore : 2000,
  //managedPaths : ["./node_modules"],
  maxAge : 1,
  maxMemoryGenerations : 0,
  name : `custom-cache`,
  profile : true,
  readonly : false,
  store : "pack"
 },
 extends : [import.meta.dirname + "/webpack-sass-config.ts"],
 //target : ["node23.8"]
 target : ["web"],
 
};
export default config;
