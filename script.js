let liste = []

const getTVShow = async () => {

    const res = await fetch("tv-shows.json");

    const data = await res.json();

    liste = data;

    ekranaBastir(liste)     
}

getTVShow()

function ekranaBastir(tvShowList){

    document.querySelector(".tvShowList").innerHTML = ""

    tvShowList.forEach((item) => {

        document.querySelector(".tvShowList").innerHTML += `
            
            <div class = "col col-sm-6 col-md-4 col-lg-3">
                <div class="card">
                    <img src= ${item.show.image.medium} class="card-img-top w-100">
                    <div class="card-body">
                
                        <h5 class="card-title">${item.show.name}</h5>
        
                        <a href="${item.show.url}" class="btn btn-success" target = "_blank">Detaylar</a>
                    </div>
                </div>
            </div>
                    
        `
        
    })}
    

document.querySelector("input").oninput = (e) => {
    
   let newArr = liste.filter((a) =>
     a.show.name.toLowerCase().includes(e.target.value.toLowerCase())
   );
 
   ekranaBastir(newArr); 
 };

