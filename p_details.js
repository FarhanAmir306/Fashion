const getparams = () => {
    const param = new URLSearchParams(window.location.search).get("productId");
    console.log(param);
    fetch(`https://fashionstyle-qmo0.onrender.com/all_product/${param}`)
      .then((res) => res.json())
      .then((data) => details_card(data));
  };


const details_card=(data)=>{
console.log(data);
const parent = document.querySelector('#Details_section');
parent.innerHTML = `
<div class="card rounded-0 ">
  <div class="row g-0 ">
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
      <img src="${data.image}" class="card-img d-none d-md-block" loading="lazy" style=" object-fit: cover;" alt="...">
    </div>
  </div>
</div>
`;

// // Append the created element to the parent container

}

getparams()