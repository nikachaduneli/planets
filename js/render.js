let planet_type = "overview";
const header = document.getElementById("planetName");
const desc = document.getElementById("planetDesc");
const img = document.getElementById("planetImg");
const structure_img = document.getElementById("structureImg");
const source = document.getElementById("source");
const rotationTime = document.getElementById("rotationTime");
const revolutionTime = document.getElementById("revolutionTime");
const radius = document.getElementById("radius");
const avarageTemp = document.getElementById("avarageTemp");
const overview = document.getElementById("overview");
const internalStucture = document.getElementById("internalStucture");
const surfaceGeo = document.getElementById("surfaceGeo");
const img_folder_path = "assets/img/";
const colors = {
  mercury: "#419EBB",
  venus: "#F7CC7F",
  earth: "#545BFE",
  mars: "FF6A45",
  jupiter: "#ECAD7A",
  saturn: "#FCCB6B",
  uranus: "#65F0D5",
  neptune: "#497EFA",
};


function render(planet_data) {
  let planet = getPlanetName();
  let img_path = `${img_folder_path}${planet_type}-${planet}.svg`;
  color_planet_type_choice(planet);

  if (planet_type == "geology") {
    structure_img.src = `${img_folder_path}${planet_type}-${planet}.png`;
    structure_img.classList.remove("none");
    img_path = `${img_folder_path}overview-${planet}.svg`;
  } else structure_img.classList.add("none");

  header.innerHTML = planet_data.name.toUpperCase();
  img.src = img_path;
  desc.innerHTML = planet_data[planet_type].content;
  source.href = planet_data.overview.source;
  rotationTime.innerHTML = planet_data.rotation;
  revolutionTime.innerHTML = planet_data.revolution;
  radius.innerHTML = planet_data.radius;
  avarageTemp.innerHTML = planet_data.temperature;
}

function remove_checked_class() {
  let choices = document.getElementsByClassName("option");
  for (let choice of choices) choice.classList.remove("checked_option");
}

function color_planet_type_choice(planet) {
  let options = document.getElementsByClassName("option");
  for (let option of options) {
    if (option.classList.contains("checked_option")) {
      option.style.backgroundColor = colors[planet];
    } else {
      option.style.backgroundColor = null;
    }
  }
}

document.getElementById("overview").addEventListener("click", function (e) {
  planet_type = "overview";
  let planet = getPlanetName();
  remove_checked_class();
  e.target.classList.add("checked_option");
  get_planet(planet);
});
document
  .getElementById("internalStucture")
  .addEventListener("click", function (e) {
    planet_type = "structure";
    let planet = getPlanetName();
    remove_checked_class();
    e.target.classList.add("checked_option");
    get_planet(planet);
  });
document.getElementById("surfaceGeo").addEventListener("click", function (e) {
  planet_type = "geology";
  let planet = getPlanetName();
  remove_checked_class();
  e.target.classList.add("checked_option");
  get_planet(planet);
});
