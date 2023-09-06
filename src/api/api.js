// Define the URL

const apiUrl = 'https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos';

// Define the parameters

const params = {

q: 'your_search_query_here', // Replace 'your_search_query_here' with the actual search query

numResults: '10', // Replace '10' with the desired number of results

};

// Convert the parameters to a query string

const queryString = Object.keys(params)

.map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))

.join('&');

// Construct the final URL with the query string

const finalUrl = `${apiUrl}?${queryString}`;
console.log(finalUrl);

// export default finalUrl

// Make the GET request

// fetch(finalUrl)

// .then(response => {

// if (!response.ok) {

// throw new Error(`HTTP error! Status: ${response.status}`);

// }

// return response.json();

// })

// .then(data => {

// // Handle the API response data here

// console.log(data);

// })

// .catch(error => {

// // Handle errors here

// console.error('Error:', error);

// });