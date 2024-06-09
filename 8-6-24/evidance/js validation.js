class validation{
    constructor (email){
        this.eemail=email;
    }
    validate(){
        var pattern=/[A-z0-9._]+@[A-z0-9]+\.[A-z]{2,4}/
        
         if(this.eemail.search(pattern)==-1){
            alert("Please Enter valid  email address")
        }else{
            alert("Vaild email Address")
        }
    }
}