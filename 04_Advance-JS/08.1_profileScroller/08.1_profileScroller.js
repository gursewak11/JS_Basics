const data = [
  {
    name: "Dael",
    age: 32,
    gender: "male",
    lookingfor: "female",
    location: "Delhi",
    image: "https://randomuser.me/api/portraits/men/82.jpg",
  },
  {
    name: "Miss Moosa",
    age: 26,
    gender: "female",
    lookingfor: "male",
    location: "Punjab",
    image: "https://randomuser.me/api/portraits/women/82.jpg",
  },
  {
    name: "Sidhu",
    age: 38,
    gender: "male",
    lookingfor: "female",
    location: "Moosa",
    image: "https://randomuser.me/api/portraits/men/83.jpg",
  },
];
const profile = profileIterator(data);

// Call first profile
nextProfile();

// next event
document.getElementById("next").addEventListener("click", nextProfile);

// Next profile display
function nextProfile() {
  const currentProfile = profile.next().value;
  if (currentProfile !== undefined) {
    console.log("yo");
    document.getElementById("profileDisplay").innerHTML = `
    <ul class="list-group">
      <li class="list-group-item">Name: ${currentProfile.name}</li>
      <li class="list-group-item">Age: ${currentProfile.age}</li>
      <li class="list-group-item">Location: ${currentProfile.location}</li>
      <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
    </ul>
    `;
    document.getElementById(
      "imageDisplay"
    ).innerHTML = `<img src="${currentProfile.image}">`;
  } else {
    window.location.reload();
  }
}

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}
