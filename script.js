// const loadregister = async () => {
//     const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
//     const targetUrl = 'https://fashion-cloth.onrender.com/accounts/register/';

//     try {
//         const response = await fetch(proxyUrl + targetUrl, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(info),
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         // Process the response if needed
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Error during fetch:', error);
//     }
// };

// loadregister();

const fetchData = async () => {
    try {
        const response = await fetch('http://fashion-cloth.onrender.com/products/all_product/');
        // Process the response if needed
        const data = await response.json();
        console.log(data);
    } 
    catch (error) {
        console.error('Error during fetch:', error);
    }
};

fetchData();





