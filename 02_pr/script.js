const searchBox = document.querySelector("input");

searchBox.addEventListener("focus", () => {
    searchBox.style.boxShadow = "0 0 10px #ff4d4d";
});

searchBox.addEventListener("blur", () => {
    searchBox.style.boxShadow = "none";
});

searchBox.addEventListener("keypress", function(e){
    
    if(e.key === "Enter"){
        let query = searchBox.value.trim();

        if(query === ""){
            alert("Please enter a restaurant name 🍕");
        }
        else{
            alert("Searching for: " + query);
        }
    }

});