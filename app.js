axios
.get('https://www.themealdb.com/api/json/v1/1/random.php')
.then((data)=>{
    var i=0;
    document.getElementById("random").innerHTML+=
    `<div class="randomMeal">
    <div id="ss1">${data.data.meals[0].strMeal}</div>
    <div id="ss"><img src=${data.data.meals[0].strMealThumb}></div>
    <div><button id="hh" class="ing1" id=${data.data.meals[0].idMeal}>ingredients</button></div>
    </div>
    `
    console.log(data.data.meals[0])
    document.getElementById("hh").onclick=displays;
    console.log(data.data.meals[0].idMeal)
                        function displays(){
                            document.getElementById("ingredients").style.display="flex"
                            // console.log(e.target)
                            axios
                            .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${data.data.meals[0].idMeal}`)
                            .then((datas)=>{
                                document.getElementById("ingredients").innerHTML=`<div  id="close" onclick="closes()"><button id="cancel">❌</button></div>`
                                console.log( document.getElementById("close"))
                                
                                // document.getElementById("cancel").onclick=closes;
                               
                                
                                    console.log(`${datas.data.meals[0]}`)
                                    for(let j=1;j<21;j++){
                                        console.log(`${datas.data.meals[0][`strIngredient${j}`]}`)
                                        document.getElementById("ingredients").innerHTML+=
                                        `<div id="popup">
                                            <div>${datas.data.meals[0][`strIngredient${j}`]}</div>
                
                                        </div>`
                                    }
                                
                               
                            })
                            .catch((errr)=>{
                                console.log(errr,"error")
                            })
                        }
                        // displays()
                    
// console.log(data)
})
.catch((err)=>{
    console.log(err,"error")
})
axios
.get('https://www.themealdb.com/api/json/v1/1/categories.php').then((data)=>{
    // console.log(data)
}).catch((err)=>{
    console.log(err,"error")
})
function search(){
    axios
    .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${document.getElementById("search").value}`)
    .then((data)=>{
        document.getElementById("catagory").innerHTML="";
        // document.getElementById("catagory").innerHTML=
        for(let i=0;i<data.data.meals.length;i++){
            document.getElementById("catagory").innerHTML+=
            `<div class="foodCatagory">
            <div class="name">${data.data.meals[i].strMeal}</div>
            <div  ><img src=${data.data.meals[i].strMealThumb}></div>
            <div><button class="ing" id=${data.data.meals[i].idMeal}>ingredients</button></div>
            </div>
            `

            window.location.href=("#catagory") 
            function display(e){
                document.getElementById("ingredients").style.display="flex"
                console.log(e.target)
                axios
                .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${e.target.id}`)
                .then((datas)=>{
                    document.getElementById("ingredients").innerHTML=`<div  id="close" onclick="closes()"><button id="cancel">❌</button></div>`
                    console.log( document.getElementById("close"))
                    
                    // document.getElementById("cancel").onclick=closes;
                   
                    for(let j=1;j<21;j++){
                        console.log(`${datas.data.meals[0][`strIngredient${j}`]}`)
                        document.getElementById("ingredients").innerHTML+=
                        `<div id="popup">
                            <div>${datas.data.meals[0][`strIngredient${j}`]}</div>

                        </div>`
                    }
                   
                })
                .catch((errr)=>{
                    console.log(errr,"error")
                })
            }
            document.querySelectorAll(".ing").forEach(element => {
                element.onclick=display;
            });
           
        }
        
        console.log(data)
    })
    .catch((err)=>{
        console.log(err,"error")
    })


   
}

function closes(){
    console.log("efvz")
    document.getElementById("ingredients").style.display="none"
}




document.getElementById("button").onclick=search;
// document.getElementById("button").onclick=()=>window.location.href=("http://127.0.0.1:5500/index.html#catagory")

