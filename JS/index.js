const linkConfigs = [
  { href: "Sales.html", img: "../Images/index/sale.png" },
  {
    href: "https://www.calcalist.co.il/calcalistech/category/3778",
    img: "../Images/index/whats-new.jpg",
  },
];
let currentIndex = 0;

function replaceLink() {
  const link = document.getElementById("dynamicLink");
  const img = document.getElementById("dynamicImage");

  currentIndex = (currentIndex + 1) % linkConfigs.length; // Cycle through the links
  link.href = linkConfigs[currentIndex].href;
  img.src = linkConfigs[currentIndex].img;
}

// Change link every 2.5 seconds
setInterval(replaceLink, 2500);
