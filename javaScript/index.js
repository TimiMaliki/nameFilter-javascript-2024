const searchBtn = document.getElementById("btn");
const inputField = document.getElementById("input-value");


const handleSearch = () => {
    const inputField = document.getElementById("input-value").value.toUpperCase();
  const ul = document.querySelector("ul");
  const lists = ul.querySelectorAll("li.collection-item");

  lists.forEach((item) => {
       const items = item.getElementsByTagName("a")[0]
       if(items.innerHTML.toUpperCase().indexOf(inputField) > -1){
        item.style.display =  ""
       }else{
        item.style.display = "none"
       }
  })

};

searchBtn.addEventListener("click", handleSearch);
inputField.addEventListener("keyup", handleSearch);


// for (let i = 0; i < lists.length; i++) {
//     let a = lists[i].getElementsByTagName("a")[0];
//     if (a.innerHTML.toUpperCase().indexOf(inputField) > -1) {
//       lists[i].style.display = " ";
//     } else {
//       lists[i].style.display = "none";
//     }
//   }