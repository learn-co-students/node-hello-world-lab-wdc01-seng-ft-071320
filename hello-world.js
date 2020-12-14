function hello() {
    return "Hello World!"
}
    if(require.main === module){
        console.log(hello())
    } else {
        module.exports = hello
    }


hello()
