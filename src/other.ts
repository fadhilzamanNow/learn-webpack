function hello(name : string) : void {
    console.log(`Hello guyss s${name}`);
};

setTimeout(() => {
    import("./lazy").then(({default : data}) => console.log(`Isi datass`, data))
},3000)

export {hello}