const link = document.querySelector('#myLink');
    link.href = 'https://keybr.com';
    
const buyList = [
    "books",
    "bread",
    "eraser",
    "earphones",
    "collection-cards",
    "hdmi",
    "vga",
    "motherboard",
    "university-books",
];
function shopping(list) {
    const listaDeComprasDiv = document.getElementById("root");
    const listaUl = document.createElement("ul");
    
    list.forEach(function(item) {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        listaUl.appendChild(listItem);
    });
    listaDeComprasDiv.appendChild(listaUl);
}
shopping(buyList);
      
      
      