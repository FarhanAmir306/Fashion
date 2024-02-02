// // const loadAllProduct = () => {
// //     fetch('')
// //       .then((response) => {
// //         // Handle the response, e.g., parse it as JSON
// //         return response.json();
// //       })
// //       .then((data) => {
// //         // Process the data
// //         console.log(data);
// //         showAllProduct(data);
      
// //         // Call a function or perform actions based on the data
// //       })
// //       .catch((error) => {
// //         console.error('Error during fetching all products:', error);
// //       });
// //   };






// const showAllProduct = (products) => {
//     const parent = document.querySelector('.slider-container');
//     products.forEach((product) => {
//       const div =document.createElement('div')
//       div.innerHTML=`
//       <div class="card_iteam bg-secondary h-auto">
//             <div>
//                 <div class="">
//                     <img src="${product.image}" class="" alt="..." style="max-width: 100%; height:400px;">
//                     <div class="icon_section">
//                         <i class="fa-solid fa-cart-plus"></i>
//                         <i class="fa-solid fa-eye"></i>
//                     </div>
//                 </div>
//                 <div class="title_section text-center py-2">
//                     <h5>Rating</h5>
//                     <h4>Name the title</h4>
//                     <p class="fw-bold">$300</p>
//                     <p>Category</p>
//                     <p>Quantity</p>
//                 </div>
//             </div>
//         </div>
      
//       `;
//     parent.appendChild(div);
      
      
//     });
//   };
  

  
  
//   loadAllProduct()