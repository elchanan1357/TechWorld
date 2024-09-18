//when window is on loading
window.onload = function () {
  createTopLine();
  for (let i = 0; i < smartphones_arr.length; i++) {
    if (i == 4) addBanaras("Smartphone");
    addToBox(smartphones_arr[i], "Smartphone");
  }
  //smartphones_arr.forEach((val) => addToHtml(val, "Smartphone"));
  for (let i = 0; i < 5; i++) createArrow("arrow_up", "arrow_down", i);
};

function addBanaras(_id) {
  let banner = document.createElement("div");
  document.getElementById(_id).innerHTML += `
        <a href="https://www.apple.com/iphone-16-pro/">
           <img src="../Images/Banars/pro_16.jpg" alt="" class="col-lg-12 p-0" />
        </a>
`;
}
