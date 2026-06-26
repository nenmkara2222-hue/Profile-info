// Array of Objects
const userProfileInfos = [
  {
    name: "Mr. Koemtry",
    position: "Backend development",
    age: 18,
    profileImage: "../images/bro4.png"
  },
  {
    name: "Broey Sotherith",
    position: "Backend development",
    age: 20,
    profileImage: "../images/bro10.jpg"
  },
  {
    name: "Pov kimsuong",
    position: "Backend development",
    age: 18,
    profileImage: "../images/bro9.jpg"
  },
    {
    name: "Kunzz",
    position: "Trading",
    age: 18,
    profileImage: "../images/bro5.jpg"
  },
    {
    name: "Puthy Lyhong",
    position: "CEO",
    age: 20,
    profileImage: "../images/bro11.jpg"
  }
];

let userProfileCard = "";

userProfileInfos.map((info) => {
  userProfileCard = `
    <div style="
      border: 1px solid gray;
      padding: 10px;
      border-radius: 20px;
      width: 250px;
      margin: 10px;
    ">
      <img
        src="${info.profileImage}"
        style="
          width: 75px;
          height: 75px;
          border-radius: 50%;
          object-fit: cover;
        "
      >

      <hr>

      <h1>Name: ${info.name}</h1>
      <h2>Age: ${info.age}</h2>
      <h2>Position: ${info.position}</h2>
    </div>
  `;

  document.getElementById("userInfoDisplay").innerHTML += userProfileCard;
});