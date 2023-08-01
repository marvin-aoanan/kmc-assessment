// function to save some data in localStorage
function loadData(id) {
  if (id == "" || id == undefined) {
    console.log("Error Filtering...");
  } else {
    let localData = JSON.parse(localStorage.getItem("fetchData")); // retrieve localStorage data
    //let locationData = localData[id];
    let element = document.getElementById("location-info");

    element.innerHTML = "";
    let shops = localData[id].shops;
    let count = Object.keys(shops).length;
    element.innerHTML += `
  <div id="result" class="result">
    <div class="sub-heading">
      <p>There are ${count} locations near you</p>
    </div>
  `;

    for (let x = 0; x < count; x++) {
      element.innerHTML += `
      <div class="d-flex search-result-container">
        <div class="openingData">
          <div class="counterIcon icon-pin" data-counter="${x + 1}"></div>
          <p class="statusOpen">Open until <strong>${shops[x].closing}</strong></p>
        </div>
        <div class="locationData">
          <h4>${shops[x].name}</h4>
          <p>${shops[x].address}</p>
          <p><icon class="icon-phone"></icon>${shops[x].phone}</p>
          <a href="${shops[x].directions}_${shops[x].address}" class="btn btn-direction">Get Directtions</a>
        </div>
      </div>
  </div>
    `;
    }
  }

};