const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: 'Jen Smith',
    age: 30,
    gender: 'female',
    lookingfor: 'male',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
  },
  {
    name: 'William Johnson',
    age: 25,
    gender: 'male',
    lookingfor: 'female',
    location: 'Lynn MA',
    image: 'https://randomuser.me/api/portraits/men/78.jpg'
  }
];

const profiles = profileIterator(data);

//call first profile
nextProfile();

//Next Event
document.getElementById('next').addEventListener('click', nextProfile);

//next Profile Display
function nextProfile() {
  const currentProfile = profiles.next().value;

  if(currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
      </ul>
    `;
    //document.getElementById('next').textContent = 'Next';

    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
  } else {
    //no more proflies
    window.location.reload();
  }
}

//Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length ? 
      { value: profiles[nextIndex++], done: false } :
      { done: true }
    }
  };
}