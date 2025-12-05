async function getdata() {
    try{
        let data = await fetch('https://fakestoreapi.com/products/1');
        let response = await data.json();
        console.log(response);
    }
    catch(err){
        console.log(err);
    
    }
}

getdata();