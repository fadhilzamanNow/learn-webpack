function hello(name : string) : void {
    console.log(`Hello ${name}`);
};

setTimeout(() => {
    import("./lazy").then(({default : data}) => console.log(`Isi data`, data))
},3000)

export {hello}