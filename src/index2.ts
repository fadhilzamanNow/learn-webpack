import Mantap from "./source";

console.log("Part 2");

setTimeout(() => {
    import("./lazy").then(({default : data}) => console.log(`Isi datass`, data))
},3000)

Mantap();