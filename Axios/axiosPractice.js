// axios.get("https://swapi.dev/api/people/1/")
//     .then(res => {
//         console.log(res.data);
//     })
//     .catch(e => {
//         console.log(e);
//     })

// const getStarWarsPerson = async (id) => {
//     try {
//         const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//         console.log(res.data);
//     } catch (e) {
//         console.log(e);
//     }
// }

// getStarWarsPerson(2)
// getStarWarsPerson(5)
// getStarWarsPerson(10)
// getStarWarsPerson(8)

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');


const addNewJoke = async () => {
    const jokeText = await getDadJoke()
    const newLi = document.createElement('LI');
    newLi.append(jokeText);
    jokes.append(newLi);
}

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } };
        const res = await axios.get('https://icanhazdadjoke.com', config);
        return res.data.joke
    } catch (e) {
        return 'NO JOKES TODAY :('
    }
}

button.addEventListener('click', addNewJoke)
