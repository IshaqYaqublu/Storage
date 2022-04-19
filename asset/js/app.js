let btn = document.querySelector('#baku');

btn.addEventListener('click', function(){
    fetch('https://randomuser.me/api/?results=30')
    .then(response =>response.json())
    .then(data => {
        var x =""
        data.results.forEach(users =>{
         x+=`
            <div class="col-lg-3 mt-5">
             <div class="card">
                <img src="${users.picture.large}" class="card-img-top" alt="...">
                <div class="card-body">
                   <h5 class="card-title">${users.name.last}  ${users.name.last}</h5>
                   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   <a href="#" class="btn btn-primary">Salam</a>
                </div>
             </div>

            </div>
               
            `
        })
        document.getElementById('row').innerHTML = x ;

            
    })
    .catch(error => console.log(error))
})