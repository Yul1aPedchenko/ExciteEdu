const product = [
  {
    id: 0,
    image: './img/themes_page/physics.png',
    title: 'Definition of physics and its role in science',
  },
  {
    id: 1,
    image: './img/themes_page/themes/physics-2.png',
    title: 'Basic physical quantities and units of measurement',
  },
  {
    id: 2,
    image: './img/themes/physics.png',
    title: 'Methods of scientific investigation',
  },
  {
    id: 3,
    image: './img/themes/kinematics.png',
    title: 'Kinematics: Mechanical movements',
  },
  {
    id: 4,
    image: './img/themes/kinematics.png',
    title: 'Kinematics: Trajectory and movement vector',
  },
  {
    id: 5,
    image: './img/themes/kinematics.png',
    title: 'Kinematics: Velocity',
  },
  {
    id: 6,
    image: './img/themes/kinematics.png',
    title: 'Kinematics: Acceleration',
  },
  {
    id: 7,
    image: './img/themes/kinematics.png',
    title: 'Kinematics: Uniform rectilinear motion',
  },
  {
    id: 8,
    image: './img/themes/kinematics.png',
    title: 'Kinematics: Equal-variable rectilinear motion',
    text: 'Types of movement: uniform and equally accelerated.',
  },
  {
    id: 9,
    image: './img/themes/dynamics.png',
    title: 'Dynamics: Newton`s Laws',
  },
];

const categories = [...product];

document.getElementById('searchBar').addEventListener('keyup', e => {
  const searchData = e.target.value.toLowerCase();
  const filteredData = categories.filter(item => {
    return item.title.toLowerCase().includes(searchData);
  });
  currentItem = 3; // Reset current item count for new search
  displayItem(filteredData);
});

let currentItem = 9;

const displayItem = (items, loadMore = false) => {
  const list = items
    .slice(0, currentItem)
    .map(item => {
      return `<li class="themes__item">
                <img src=${item.image} alt="themes img" class="themes__img">
                <h2 class="themes__title">${item.title}</h2>
                <a href="#" class="themes__link">Start learn</a>
              </li>`;
    })
    .join('');

  if (loadMore) {
    document.getElementById('root').innerHTML += list;
  } else {
    document.getElementById('root').innerHTML = list;
  }
};

displayItem(categories);

document.getElementById('load-more').addEventListener('click', () => {
  currentItem += 3;
  const displayedItems = Array.from(
    document.querySelectorAll('.themes__item')
  ).map(item => item.querySelector('.themes__title').textContent);
  const newItems = categories.filter(
    item => !displayedItems.includes(item.title)
  );
  displayItem(newItems, true);
});
