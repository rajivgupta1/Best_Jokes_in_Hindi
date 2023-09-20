// // GET https://icanhazdadjoke.com/

const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');

// ///////////Promisies method
// // Fetch()    =================1st method; 
// // const generateJokes = () => {

// //     const setHeader = () => {
// //     Headers: {
// //         Accept: "application/json" 
// //     }
// //     } 

// //     fetch('https://icanhazdadjoke.com/', setHeader)
// //     .then((res) => res.json())
// //     .then((data) => {
// //             jokes.innerHTML = data.joke;
// //     }).catch ((error) =>  console.log(error));
// // }





// /// async and await method =======2nd
const generateJokes = async() => {
    try{ 
            const res = await fetch("https://hindi-jokes-api.onrender.com/jokes?api_key=c7fdbbc4a0a7e6829b91f9af16ac", {
                    headers: {
                    Accept: "application/json" 
                         }
                   });
            const data = await res.json();
            console.log(data);
            jokes.innerHTML = data.jokeContent;
             
    } catch(error) {
         console.log(" api fail to fetch the data() ");
    }  

}

jokeBtn.addEventListener('click', generateJokes);
generateJokes();


// /// async and await method =======2nd   chat gpt
// const jokes = document.querySelector('#joke');
// const jokeBtn = document.querySelector('#jokeBtn');

// const generateJokes = async () => {
//     try {
//         const res = await fetch("https://icanhazdadjoke.com/", {
//             headers: {
//                 Accept: "application/json"
//             }
//         });
//         const data = await res.json();
//         jokes.innerHTML = data.joke;
//     } catch (error) {
//         console.log(error);
//     }
// }

// // Remove the parentheses after generateJokes in the event listener
// jokeBtn.addEventListener('click', generateJokes);

// // Call generateJokes initially to load a joke
// generateJokes();
