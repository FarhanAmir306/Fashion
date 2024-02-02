
const loadAllProduct = () => {
    fetch('https://fashionstyle-qmo0.onrender.com/all_product/')
      .then((response) => {
        // Handle the response, e.g., parse it as JSON
        return response.json();
      })
      .then((data) => {
        // Process the data
        // console.log(data);
        showAllProduct(data);
      
        // Call a function or perform actions based on the data
      })
      .catch((error) => {
        console.error('Error during fetching all products:', error);
      });
  };


  


  const showAllProduct = (products) => {
    const parent = document.querySelector('.slider-container');
  
    products.forEach((product) => {
    
        const div = document.createElement('li');
        div.innerHTML = `
            <div class="card shadow h-100 card_iteam rounded-4">
                <div class="ratio ratio-1x1">
                    <img src="${product.image}" class="card-img-top" loading="lazy" alt="...">
                    <div class="icon_section bg-black">
                    <a onclick=BuyProduct(${product.id}) class="btn"> <i class="fa-solid fa-cart-plus text-danger"></i> </a>
                    <a  onclick=LoadDetails(${product.id}) class="btn"><i class="fa-solid fa-eye text-danger"></i></a>
                    </div>
                </div>
                <div class="card-body d-flex flex-column flex-md-row">
                    <div class="flex-grow-1">
                        <strong>${product.name}</strong>
                        <p><i class="fa-solid fa-star"></i> ${product.rating}</p>
                        <p class="card-text">Basketball Shoes</p>
                    </div>
                    <div class="px-md-2 fw-bold ">
                        <h5 class="fw-bold">$${product.price}</h5>
                        <div>Quantity: ${product.quantity}</div>
                    </div>
                </div>
            </div>
        `;
        parent.appendChild(div);
    });

};

const LoadDetails = (productId) => {
  fetch(`https://fashion-cloth.onrender.com/details/${productId}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.name);

      const parent = document.querySelector('.Details_section');
      const div = document.createElement('li');
      div.innerHTML = `
        <div class="card rounded-0 h-100">
          <div class="row g-0 h-100">
            <div class="col-md-6 col-xl-5 d-flex align-items-center p-2 p-md-3 p-xl-5">
              <div class="card-body p-1 p-md-3 p-xl-5">
                <p class="lead">Why use this slider</p>
                <h2 class="card-title" style="color:#DF1E1E;">Swiffy Slider Benefits</h2>
                <p class="card-text mt-3">Super fast lightweight slider and carousel with amazing touch support and user experience.</p>
                <p>Super simple setup using just markup and few powerful configuration options</p>
                <p class="card-text"><small class="text-muted">Remember to check out on mobile</small></p>
              </div>
            </div>
            <div class="col-md-6 col-xl-7">
              <img src="${data.image}" class="card-img d-none d-md-block" loading="lazy" style="height: 100%; object-fit: cover;" alt="...">
            </div>
          </div>
        </div>
      `;

      // Append the created element to the parent container
      parent.appendChild(div);
    });
};

const BuyProduct=(id)=>{

    fetch(`https://fashionstyle-qmo0.onrender.com/buy/${id}`)
    .then((response)=>{
        return response.json()
    }).then ((data)=>{
       console.log(data);
    })

}


  
loadAllProduct()





