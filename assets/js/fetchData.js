function fetchData() {
    getData("assets/js/localData.json");
    async function getData(file) {
        let objectData = await fetch(file);
        let jsonData = await objectData.text();
        localStorage.setItem('fetchData', jsonData) // save to localStorage
    }
}
fetchData();