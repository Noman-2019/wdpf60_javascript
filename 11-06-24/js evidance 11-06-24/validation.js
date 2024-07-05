class m {
    constructor(em,pa){
        this.email=em;
        this.passwr =pa;
    }

checkvalue(){
    var pattern=/[A-z0-9]+@[A-z0-9]+\.[A-z]{2,4}/
    // let validation =
    if(this.email.search(pattern)==-1){
        alert("Invalid Email");
    }
    else if(this.passwr.length<6){
        alert(" password is very short");
    }else{
        document.write("login succesfull")
    }
}
}