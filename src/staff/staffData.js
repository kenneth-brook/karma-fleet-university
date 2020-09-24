const staffData = [
  {
    id: 1,
    name: "Broodin",
    image: require("../images/broodin.jpg"),
    role: "KFU Dean",
  },
  {
    id: 2,
    name: "Wombat RabidOne",
    image: require("../images/wombat.jpg"),
    role: "Assistant Industry Instructor",
  },
  {
    id: 3,
    name: "Dresdon Lightseeker",
    image: require("../images/dresdon.jpg"),
    role: "Industry & Mining Instructor",
  },
];

export default staffData;

// const staffCard = document.querySelector(".c .back");
// staffData.forEach((item1) => {
//   back.appendChild(createBack(item1.name, item1.img, item1.role));
// });

// function createBack(name, img, role) {
//   const cardBack = document.createElement("div");
//   cardBack.classList.add("cardBack");

//   const staffName = document.createElement("h1");

//   const staffImg = document.createElement("img");

//   const staffRole = document.createElement("h2");

//   //append stack
//   cardBack.appendChild(staffName);
//   cardBack.appendChild(staffImg);
//   cardBack.appendChild(staffRole);

//   //content
//   staffName.textContent = name;
//   staffImg.src = img;
//   staffRole.textContent = role;

//   return cardBack;
// }
