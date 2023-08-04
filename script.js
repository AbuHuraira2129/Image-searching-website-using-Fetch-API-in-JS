// Image Searching Website - Using Fetch API
// By - Muhammad Abu Huraira

// Declaring Variables
var form = document.querySelector("#form");
var searchInput = document.querySelector("#searchInput");
var searchBtn = document.querySelector("#searchBtn");
var searchResult = document.querySelector("#searchResult");
var LoadMoreBtn = document.querySelector("#LoadMoreBtn");

// Initializing Values
let keyword = "";
let pageNum = 1;

// Access Key - Put Your Unsplash Acess Key
const accesskey = "Add_Unsplash_Access_Key_Here";

// Function for searching Images
async function searchImages(){
    keyword = searchInput.value;
    const url = `https://api.unsplash.com/search/photos?page=${pageNum}&query=${keyword}&client_id=${accesskey}&per_page=12`;
    
    if (pageNum === 1 | keyword === "") {
        searchResult.innerHTML = "";
        LoadMoreBtn.style.display = "none";
    }

    // Fetch API Method
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;

    // Mapping Each Image under Search Results Container
    results.map((result)=>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        searchResult.appendChild(image);
        LoadMoreBtn.style.display = "block";
    });
}

// Action on submitting Form
form.addEventListener("submit", (e) => {
    e.preventDefault();
    pageNum = 1;
    searchImages();
});

// Action on Clicking Button
LoadMoreBtn.addEventListener("click", ()=>{
    pageNum++;
    searchImages();
});