const product = [
  {
    id: 0,
    title: 'Definition of physics and its role in science',
  },
  {
    id: 1,
    title: 'Basic physical quantities and units of measurement',
  },
  {
    id: 2,
    title: 'Methods of scientific investigation',
  },
  {
    id: 3,
    title: 'Kinematics: Mechanical movements',
  },
  {
    id: 4,
    title: 'Kinematics: Trajectory and movement vector',
  },
  {
    id: 5,
    title: 'Kinematics: Velocity',
  },
  {
    id: 6,
    title: 'Kinematics: Acceleration',
  },
  {
    id: 7,
    title: 'Kinematics: Uniform rectilinear motion',
  },
  {
    id: 8,
    title: 'Kinematics: Equal-variable rectilinear motion',
  },
  {
    id: 9,
    title: 'Dynamics: Newton`s Laws',
  },
  {
    id: 10,
    title: 'Dynamics: Force and motion',
  },
  {
    id: 11,
    title: 'Dynamics: Gravity and weight',
  },
  {
    id: 12,
    title: 'Dynamics: Impulse and the law of conservation of momentum',
  },
  {
    id: 13,
    title: 'Dynamics: Friction force',
  },
  {
    id: 14,
    title: 'Dynamics: Dynamics of circular motion',
  },
  {
    id: 15,
    title: 'Dynamics: Conservation laws in dynamics',
  },
  {
    id: 16,
    title: 'Mechanics. Work, energy and power',
  },
  {
    id: 17,
    title: 'Mechanics. Law of conservation of energy',
  },
  {
    id: 18,
    title: 'Mechanics. Kinematics: motion, velocity, acceleration.',
  },
  {
    id: 19,
    title: 'Mechanics. Dynamics: Newton`s laws, forces and their interactions.',
  },
  {
    id: 20,
    title: 'Mechanics. Impulse and the law of conservation of momentum',
  },
  {
    id: 21,
    title: 'Thermodynamics. Temperature and thermal equilibrium',
  },
  {
    id: 22,
    title: 'Thermodynamics. Heat and ways of its transfer',
  },
  {
    id: 23,
    title: 'Thermodynamics. First and second principles of thermodynamics',
  },
  {
    id: 24,
    title: 'Thermodynamics. Heat machines',
  },
];

const categories = [...product];

document.getElementById('searchBar').addEventListener('keyup', e => {
  const searchData = e.target.value.toLowerCase();
  const filteredData = categories.filter(item => {
    return item.title.toLowerCase().includes(searchData);
  });
  currentItem = 3;
  displayItem(filteredData);
});

let currentItem = 9;

const displayItem = (items, loadMore = false) => {
  const list = items
    .slice(0, currentItem)
    .map(item => {
      return `<li class="themes__item">
                <h2 class="themes__title">${item.title}</h2>
                <a href="./study.html" class="themes__link">Start learn</a>
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
