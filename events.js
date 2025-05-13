function filtrarCategoria() {
    var catg = document.getElementById("categoria").value;
    var tarjetas = document.querySelectorAll(".card");
  
    for (var i = 0; i < tarjetas.length; i++) {
      var tarjeta = tarjetas[i];
      var categorias = tarjeta.getAttribute("data-categoria").split(",").map(c => c.trim());
  
      if (categorias.includes(catg)) {
        tarjeta.parentElement.style.display = "block";
      } 
      else {
        tarjeta.parentElement.style.display = "none";
      }
    }
}
function agregarCarrito(event) {
  var tipo=event.target.getAttribute("kind")
  var lista=document.getElementById("carrito")
  var item = document.createElement("li");
  item.classList.add("list-group-item")

  if(tipo=="Manzana"){
    item.textContent="🍎 Manzana agregada al carrito"
    lista.append(item)
  }
  else if(tipo=="Leche"){
    item.textContent="🥛 Leche agregada al carrito"
    lista.append(item)
  }
  else{
    item.textContent = "🍞 Pan agregado al carrito"
    lista.append(item)
  }
}