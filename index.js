// code for the new user 
let newusers = document.getElementById('newusers')
let newuser =document.getElementsByClassName('newuser')[0]
let login =document.getElementsByClassName('login')[0] //login is hidden here





newusers.addEventListener('click',()=>{ 
   
    login.style.display ="none"
    newuser.style.display="block"
    // success.style.display ="none"



})



document.getElementsByClassName('submit')[0].addEventListener('click',(elema)=>{
    
    elema.preventDefault();

 let password = document.getElementById('password').value  //store password value
 
 let cnfpassword = document.getElementById('cnfpassword').value //store confirm password  value 

 let email = document.getElementById('email').value //to store email value

 let name = document.getElementById('name').value //for  name value 
 
//  validation check 
     if(name ==""){

        document.getElementsByClassName('alert-danger')[0].innerText ="Name cannot be blank"
        document.getElementsByClassName('alert-danger')[0].style.display ="block"
        return ;

    }
    else if(password != cnfpassword)
    {
        // to give warning
        document.getElementsByClassName('alert-danger')[0].style.display ="block"
        return ;

    }else if(email == "")
    {
        document.getElementsByClassName('alert-danger')[0].innerText ="Email cannot be blank"
        document.getElementsByClassName('alert-danger')[0].style.display ="block"
        return ;
        
    }else if(!email.includes('@'))
    {
        document.getElementsByClassName('alert-danger')[0].innerText ="incorrect email id"
        document.getElementsByClassName('alert-danger')[0].style.display ="block"
        return ;
        
    }

    else if(password == "")
    {
        document.getElementsByClassName('alert-danger')[0].innerText ="Password cannot be blank"
        document.getElementsByClassName('alert-danger')[0].style.display ="block"
        return ;
        
    }else
    {
    //  to save the data in local storage
  
    localStorage.setItem('email', email)
    localStorage.setItem('password', password) 
    localStorage.setItem('name', name)

  

    

    newuser.style.display="none"
    
    location.href ="./rvw.html"


    



    
    }



})




      //also we have to save image....

      document.getElementById('userimage').addEventListener('change', function (){
        
        const reader = new FileReader();
    
        reader.addEventListener('load',function (){
           
            //save to the local database 
            try {

                localStorage.setItem('User_image',reader.result)

            } catch (error) {
                
                
                document.getElementsByClassName('alert-danger')[0].innerText ="Image is too large it should be less than 100kb , it is optional you can skip this"
                document.getElementsByClassName('alert-danger')[0].style.display ="block"
                return ;
            }
             
            
            
        })
    
        reader.readAsDataURL(this.files[0])
    
    })
    







Array.from(document.getElementsByTagName('input')).forEach(element => {
    element.addEventListener('click',()=>{
        document.getElementsByClassName('alert-danger')[0].style.display ="none"
    })
});







// now come for the login code 

let loginLink = document.getElementById('login') //it is the link of nav bar named log in





loginLink.addEventListener('click',()=>{

 login.style.display ="block"
 newuser.style.display="none"
 success.style.display ="none"

})




//  now we will check karenge user ka email id and password 
  var checkValidationForLogin  = function (){
    
 let givenEmail =document.getElementById('emaillog').value; // value of email given by user for login

 let givenPassword =document.getElementById('passwordlog').value //value of password given by user for login


 if(givenEmail  != localStorage.getItem('email'))
 {
     //to give warning if incorrect data is filled
    document.getElementsByClassName('alert-danger')[0].innerText ="Incorrect Email or Password"
    document.getElementsByClassName('alert-danger')[0].style.display ="block"
    return false;

 }
 else if(givenPassword != localStorage.getItem('password'))

 {
    document.getElementsByClassName('alert-danger')[0].innerText ="Incorrect Email or Password"
    document.getElementsByClassName('alert-danger')[0].style.display ="block"
    return false;

 }
 else
 {
     return true;
 }


  }


