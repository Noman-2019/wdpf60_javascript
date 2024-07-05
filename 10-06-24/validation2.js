class valida {
    constructor(x) {
        this.eemail = x;
    }
    validate() {

        var pattern = /[A-z0-9]+@[A-z0-9]+\.[A-z]{2,4}/
        let check=this.eemail.search(pattern)
        if (check==-1) {
            document.write("<h1>Email is Wrong</h1>")
            // alert("not valid")
        } else {
            document.write("<h1>Email is correct</h1>")
            // alert(" valid")


        }
    }
}