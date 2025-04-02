////OBJECT LITeral

const user = {
    username: 'sanju',
    loginedIn: 8,
    signedIn: true,

    getUserDetails: function(){
       // console.log('get user details from database');
       // console.log(`username:${this.username}`);  ///current constent janan li
      // console.log(this);
       
        
        
    }
}
// console.log(user.getUserDetails());

// console.log(user.username);
// console.log(this);


//CONSTRUCTOR fun

function User (username, loginCount, isLoginedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoginedIn = isLoginedIn;

    return this
}
 

const userone = User('sanjay', 10, true)
const usertwo = User('sanjay' , 2, false)
const userthree = User('sanjay' , 3, false)

console.log(userone);
