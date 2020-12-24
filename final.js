// first show the hr details 

let hrname =localStorage.getItem('name')
let hremail =localStorage.getItem('email')
let hrimg   = localStorage.getItem('User_image')

if(hrname)
{
    document.getElementsByClassName('hname')[0].innerText =hrname;

}

if(hremail)
{
    document.getElementsByClassName('hemail')[0].innerText =hremail;
    
}

if(hrimg)
{
    document.getElementsByClassName('hrimg')[0].setAttribute('src',hrimg)
}else
{
    document.getElementsByClassName('hrimg')[0].setAttribute('src','./images/user.png')
}

////////////////////////////////////////////////////////////////////////////////////////////

// for question Details
for(i=1;i<=5;i++)
{
    document.getElementsByClassName('qdtails')[0].innerHTML += ` <div class="each">
    <h5 class='bg-warning'> Question Number ${i}</h5>
    <div class="star">
 
    </div>
 

    <div class="comit"></div>
  
  
  </div>`

  for(j=1;j<=sessionStorage.getItem(`${i}Rat`);j++)
  {
      document.getElementsByClassName('star')[i-1].innerHTML += "<i class='fas fa-star'></i>"

  }

  if(sessionStorage.getItem(`${i}comm`))
  {
    document.getElementsByClassName('comit')[i-1].innerHTML +=  `${sessionStorage.getItem(`${i}` +'comm')}`
  }
  else
  {
    document.getElementsByClassName('comit')[i-1].innerHTML +=  `No Comments`
  }
}
