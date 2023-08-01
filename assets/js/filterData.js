console.log("Filtering...");
function btnToggleClick(btn, targetElement) {
    btn.addEventListener('click', function(evt) {
        evt.preventDefault();
        this.classList.toggle('is-active');
        targetElement.forEach((targetElement) => {
            targetElement.classList.toggle('is-active');
        });
       
    });
}
// Implement btnToggleClick
var btnFilter = document.querySelector("#btn-filter");
var btnClose = document.querySelector("#btn-filter-close");
var targetElements = document.querySelectorAll("#filter-option, #location-info");
btnToggleClick(btnFilter, targetElements);
btnToggleClick(btnClose, targetElements);