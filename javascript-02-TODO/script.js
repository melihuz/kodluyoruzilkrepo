const sectionDOM = document.querySelector("#todo");

function addElement() {
  let inputDom = document.querySelector("#dothis");
  let doThis = inputDom.value;
  inputDom.value = "";
  if (doThis === "" || doThis.replace(/^\s+|\s+$/g, "").length == 0) {
    // alertDom.innerHTML=alertToast
    $(".toast-body").html("Gününü Boş Geçirme... ");
  } else {
    const divRowDOM = document.createElement("div");
    divRowDOM.innerHTML = `<div class="col">${doThis}<span class="close" onclick="hide(this)">x</span></div>`;
    divRowDOM.classList.add("row");
    sectionDOM.append(divRowDOM);
    $(".toast-body").html("Eklendi... ");
  }
  $("#toastMessage").toast("show");
}
function hide(id) {
  // id.parentElement.classList.add("hidden")
  let div = id.parentElement.parentElement;
  div.remove();
}
let listContainer = document.querySelector("#todo");
listContainer.addEventListener("click", function (ev) {
  if (ev.target.tagName === "DIV") {
    ev.target.classList.toggle("checked");
  }
});
