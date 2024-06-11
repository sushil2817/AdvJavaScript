const xhr =  new XMLHttpRequest();
const requestUrl ='https://api.github.com/users/sushil2817'
xhr.open('GET', requestUrl)
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if(xhr.readyState === 4){
        console.log(this.responseText);
        const data = JSON.parse(this.responseText)
        console.log(data.followers);
        console.log(data.following);
        console.log(data.avatar_img);
        document.querySelector('.image').innerHTML = data.avatar_img
    }
}
// console.log(xhr.readyState);
xhr.send()