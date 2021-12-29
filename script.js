async function foo(){

    
        let name = document.getElementById("t1").value;
        console.log(name);
    try{let res = await fetch(`https://api.covid19api.com/total/country/${name}`);
    let result = await res.json();
    console.log(result)
for (var i in result){
    console.log(`Confirmed:${result[i].Confirmed} Active:${result[i].Active} Recovered:${result[i].Recovered} Deaths:${result[i].Deaths}`)
}
    }catch(error){
        console.log(error);
    }
}








