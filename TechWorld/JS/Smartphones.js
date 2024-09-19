//when window is on loading
window.onload = function () {
  createTopLine();
  print(smartphones_arr, "Smartphone");

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
