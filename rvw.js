//first code for the next buttons i.e pagination

let NumberofClick = 0; //it tell how many stars are given by  user

let pageNumber = document.getElementsByClassName('pagenumber');  //it contains all the pages tag

let questionNumber = document.getElementsByClassName('ask');  //it contains all the questions and videos tags

let starElment = document.getElementsByClassName('main')[0] //inside this element stars are present

let SingleStar = document.getElementsByClassName('fa-star') //this is the i tag for star icons


//we are setting na event so when user clicks next ,next question will appear


////////////////////////////////////////////////for the questions
let numberOfQuestion = 1;
let videoOfquestions =  document.getElementsByTagName('video')[0] ;//for video
let nextbtn = document.getElementsByClassName('nextbtn')[0]
let numberofStar =document.getElementsByClassName('fa fa-star checked')
let comment = document.getElementById('comment');

nextbtn.addEventListener('click',(element)=>{

    if (NumberofClick == 0) {
        /*if there is no rating given then we will warn user*/
        document.getElementsByClassName('alert-danger')[0].style.display = "block";

        return ;

    }

    numberOfQuestion++;

    if(numberOfQuestion == 2)
    {   
        
        // to save the number star and comment of first question 
        sessionStorage.setItem('1Rat',numberofStar.length)
        sessionStorage.setItem('1comm',comment.value)
        comment.value = '';

        document.getElementById('q_num').innerText ="What is Database .... ?"
        videoOfquestions.innerHTML = `<source src="./videos/v2.mp4" type="video/mp4" >`
        videoOfquestions.load()
        videoOfquestions.play()
        pageNumber[0].innerText = numberOfQuestion;
      

    }else if(numberOfQuestion == 3){

        sessionStorage.setItem('2Rat',numberofStar.length)
        sessionStorage.setItem('2comm',comment.value)
        comment.value = '';

        document.getElementById('q_num').innerText ="What is self join ?"
        videoOfquestions.innerHTML =`<source src="./videos/v3.mp4" type="video/mp4" >`
        pageNumber[0].innerText = numberOfQuestion;
        videoOfquestions.load()
        videoOfquestions.play()

    }else if(numberOfQuestion == 4){


        sessionStorage.setItem('3Rat',numberofStar.length)
        sessionStorage.setItem('3comm',comment.value)
        comment.value = '';

        document.getElementById('q_num').innerText ="Tell me about yourself and why do you want this job ?"
        videoOfquestions.innerHTML =`<source src="./videos/v4.mp4" type="video/mp4" >`
        videoOfquestions.load()
        videoOfquestions.play()
        pageNumber[0].innerText = numberOfQuestion;

    }else if(numberOfQuestion == 5){

        sessionStorage.setItem('4Rat',numberofStar.length)
        sessionStorage.setItem('4comm',comment.value)
        comment.value = '';

        document.getElementById('q_num').innerText ="What is MySql ?"
        videoOfquestions.innerHTML =`<source src="./videos/v5.mp4" type="video/mp4" >`
        videoOfquestions.load()
        videoOfquestions.play()
        pageNumber[0].innerText = numberOfQuestion;

    }else
    {
        sessionStorage.setItem('5Rat',numberofStar.length)
        sessionStorage.setItem('5comm',comment.value)
        comment.value = '';

       
          location.href ='./finalRVW.html'
    }

    Array.from(SingleStar).forEach(ele =>{
        NumberofClick =0;
        ele.className ="fa fa-star unchecked"
    })


})




// //////////////////////////////////////////////for the rating code 






Array.from(SingleStar).forEach(ekFunction)

function ekFunction(element, index) {


    element.addEventListener('click', (elema) => {

        
        document.getElementsByClassName('alert-danger')[0].style.display = "none"



for(i = 0 ; i < parseInt(elema.target.id) ; i++){
    NumberofClick++;
    SingleStar[i].className ="fa fa-star checked";
  


}

for(i = 1 ; i <= (5 - parseInt(elema.target.id)) ; i++){
    NumberofClick--;
    SingleStar[(parseInt(elema.target.id) + (i-1))].className ="fa fa-star unchecked";
  
}




    })

}






//now we need to show the user data 
let showUserProfile =document.getElementsByClassName('about')[0]

function showinfo (){

    
    
    let UrlImageOFUser = localStorage.getItem('User_image');
    let nameofhr = localStorage.getItem('name');
    let emailofhr =localStorage.getItem('email');

    if(UrlImageOFUser)
    {
        document.getElementsByClassName('imgages')[1].setAttribute('src',UrlImageOFUser)
    }else
    {
        document.getElementsByClassName('imgages')[1].setAttribute('src','./images/user.png')
    }

    if(nameofhr)
    {
        document.getElementById('uname').innerText = localStorage.getItem('name')
    }else
    {
        document.getElementById('uname').innerText ="Unknown"
    }

    if(emailofhr)
    {
        document.getElementById('uemail').innerText = localStorage.getItem('email')
    }else
    {
        document.getElementById('uname').innerText ="Unknown email"
    }

  

    showUserProfile.style.display ="block"



}

document.getElementById('hide').addEventListener('click',()=>{
    showUserProfile.style.display ="none"
})
//////////////////////////////////////////////////////finish the code...
