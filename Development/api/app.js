// 1. fetch()

// fetch("https://api.tvmaze.com/search/shows?q=girls")
// .then((data) => { return data.json() })
// .then((resp) => {console.log(resp, "resp")})
// .then((err) => console.log(err))


// async function callApi(){
//     let data = await fetch("https://api.tvmaze.com/search/shows?q=girls");
//     let resp = await data.json()
//     console.log(resp);
// }

// callApi();



// -----------------------------------------------------------
// cdn= content delivery network
// 2. axios: 3rd party library > return a ppromise

// axios.get("https://api.tvmaze.com/search/shows?q=girls")
// .then((res) => console.log(res.data, "data"))
// .catch((err) => console.log(err, "err"))

async function callAxios(){
    let data = await axios.get("https://api.tvmaze.com/search/shows?q=girls")
    console.log(data.data);
}
callAxios()
