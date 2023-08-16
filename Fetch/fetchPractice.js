// fetch("https://swapi.dev/api/people/1/")
//     .then(res => {
//         console.log(res);
//         return res.json()
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     })




// fetch("https://swapi.dev/api/people/1/")
//     .then(res => {
//         console.log(res);
//         return res.json()
//     })
//     .then((data) => {
//         console.log(data);
//         return fetch("https://swapi.dev/api/people/2/")
//     })
//     .then(res => {
//         console.log('res 2', res);
//         return res.json()
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     })




const loadStarWarsPeople = async () => {
    try {
        const res = await fetch("https://swapi.dev/api/people/1/")
        const data = await res.json();
        console.log(data);
    } catch (e) {
        console.log(e);
    }
}

loadStarWarsPeople()