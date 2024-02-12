const api = 'https://randomuser.me/api/';
const btn = document.querySelector('#btn')
const xhr = new XMLHttpRequest();
xhr.open('GET',api)
xhr.onreadystatechange = function(){
         console.log(xhr.readyState);
               
         if (xhr.readyState === 3){
              const data = JSON.parse(this.responseText);


            btn.addEventListener('click',()=>{
                document.body.innerHTML = `
                  
                  <div class="container">

                     <img src="${data.results[0].picture.large
                     }" height="200px" width="200px"> 
                     


                     <div class="details">
                     
                     <label>Email: </label>
                     <span>${data.results[0].email}</span>
                     </p>
                     
                     <label>FullName: </label>
                     <span> ${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}</span>
                     
                     <label>Age: </label>
                      <span>${data.results[0].dob.age}</span>
                     
                     <label>Phone no. </label>
                      <span>${data.results[0].phone}</span>
                     
                     <label>Cell:  </label>
                      <span>${data.results[0].cell}</span>
                    
              
                     
                      </div>
                     

                     </div>
                      
                  </div>
                
                `
            })



             console.log(data);
             console.log(data.followers);
             console.log(data.following);
             console.log(data.login);
             console.log(data.public_repos
                );
         } 
    // if (xhr.readyState === 4) {
    //     const data = JSON.parse(this.responseText)
    //     console.log(data);
    //        console.log(data.followers);
    // }
}


xhr.send()