
const loadAllProduct = () => {
    // fetch('https://fashionstyle-qmo0.onrender.com/all_product/')
    // fetch('http://127.0.0.1:8000/all_product/')
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
                    <a href="product_details.html?productId=${product.id}"   class="btn"><i class="fa-solid fa-eye text-danger"></i></a>
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



const BuyProduct=(id)=>{

    fetch(`https://fashionstyle-qmo0.onrender.com/buy/${id}`)
    .then((response)=>{
        return response.json()
    }).then ((data)=>{
       console.log(data);
    })

}

const loadCategories = () => {
  const parent = document.querySelector('.button_section');
  const productContainer = document.querySelector('.slider-container');

  fetch('https://fashionstyle-qmo0.onrender.com/categories')
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => {
        const child = document.createElement('div');
        child.innerHTML = `<button type="button" class="btn btn-primary" data-category-slug="${element.slug}">${element.name}</button>`;
        parent.appendChild(child);

        // Add click event listener to each button
        child.querySelector('button').addEventListener('click', () => {
          const categorySlug = element.slug;
          console.log(element.slug);

          // Clear existing products
          productContainer.innerHTML = '';

          fetch(`https://fashionstyle-qmo0.onrender.com/category/${categorySlug}/products/`)
            .then((response) => response.json())
            .then((products) => {
              // Handle the products data as needed
              showAllProduct(products);
            })
            .catch((error) => {
              console.error('Error fetching products:', error);
            });
        });
      });
    });
}

// Call the function to load categories
loadCategories();

loadAllProduct()





