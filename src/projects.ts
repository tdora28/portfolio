import { ProjectType } from './types';

const projects: ProjectType[] = [
  {
    id: 1,
    imageUrl: '/project-imgs/snake-game.png',
    title: 'Snake Game',
    description: 'The classic snake game with a retro look.',
    liveDemoUrl: 'https://astounding-sable-598d39.netlify.app/',
    codeUrl: 'https://github.com/tdora28/snake_game',
    labels: ['JavaScript', 'CSS3', 'grid'],
    longDesc: [
      'As part of my studies at Business College Helsinki for the REACT23S course on Databases and Data Structures, I developed a modern twist on the timeless classic Snake game. This project was great to improve my understanding of core programming principles and to engaging, user-friendly web applications.',
      'One of the standout features of this game is the ability for players to set their desired game board size, making each session unique and tailored to their preferences.',
      "For those seeking an extra challenge, the game offers a speed acceleration option. As the snake consumes more food, its speed increases, testing players' reflexes and strategic thinking.",
      "A crucial aspect of the game is its collision detection system. Whether it's the snake running into a wall or its own body, the game accurately detects collisions to ensure a smooth gaming experience.",
      'The game leverages CSS Grid for drawing and dynamically updating the game board. This approach ensures a responsive design that adapts seamlessly to different screen sizes.',
      "To manage the snake's movement and growth, I implemented a queue data structure. This efficiently handles the updating of the snake's body parts as it slithers around the board.",
      'This project not only served as a practical application of the concepts learned during the course but also as a creative outlet for me to experiment with game development and responsive design techniques. Whether you’re a seasoned gamer or just looking for a nostalgic trip down memory lane, this modernized Snake game offers both simplicity and excitement in a well-crafted package.',
    ],
  },
  {
    id: 2,
    imageUrl: '/project-imgs/pokedex.png',
    title: 'Searchable Pokedex',
    description: 'An easy-to-use and fun Pokedex for discovering your favourite Pokemon.',
    liveDemoUrl: 'https://marvelous-gnome-6e0548.netlify.app/',
    codeUrl: 'https://github.com/tdora28/pokedex',
    labels: ['JavaScript', 'CSS3', 'API'],
    longDesc: [
      'The Searchable Pokedex is a user-friendly web application designed to make exploring the world of Pokémon both easy and enjoyable. Built with vanilla JavaScript, CSS, and HTML, this project connects to the resources of the PokeAPI to provide a comprehensive database of Pokémon up to Generation 9.',
      'At its core, the application allows users to view Pokémon by their respective generations. You can select any generation from the navigation and see all the Pokémon introduced in that era. This feature is perfect for those who want to explore the Pokémon series chronologically or revisit their favourite generations.',
      'To enhance the browsing experience, the Pokedex also includes a filter by type option. This allows users to narrow down the list of Pokémon based on their elemental type, such as Water, Fire, or Grass. This feature is particularly useful for trainers looking to build a team with specific strengths and weaknesses in mind.',
      'In addition to browsing by generation and filtering by type, the Searchable Pokedex includes a search function that enables users to find specific Pokémon by name. Simply type the name of the Pokémon into the search box, and the application will quickly display the matching results.',
      'The project was developed as an assignment for the REACT23S class at Business College Helsinki, showcasing a blend of technical skills and creative design. The clean, intuitive interface ensures that even those new to the world of Pokémon can navigate the Pokedex with ease.',
    ],
  },
  {
    id: 3,
    imageUrl: '/project-imgs/speedgame.png',
    title: 'Speedy Donuts',
    description: 'A fun speedgame built with React and donuts.',
    liveDemoUrl: 'https://leafy-sorbet-a1f872.netlify.app/',
    codeUrl: 'https://github.com/tdora28/react_speedgame',
    labels: ['React', 'Vite'],
    longDesc: [
      'Developed as part of the "React Basics" class at Business College Helsinki (REACT23S), this project exemplifies the power of React in creating engaging and interactive web experiences. The gameplay is designed to be fast-paced, challenging you to click or tap as quickly as possible to rack up points. The faster you react, the higher your score climbs, making each round a test of both reflexes and concentration.',
      'The game leverages the latest features of React, including functional components and hooks, to deliver a seamless and responsive user experience. Every aspect of the game, from the instant feedback on your actions to the smooth transitions between states, highlights the efficiency and flexibility of React. The codebase makes extensive use of destructuring and other modern JavaScript practices.',
      '"Speedy Donuts" is also designed with a mobile-first approach, ensuring that players can enjoy the game on any device. Whether you\'re on a smartphone, tablet, or desktop, the responsive design adapts to provide an optimal gaming experience. The layout is intuitive and user-friendly, with clear instructions and a visually appealing interface.',
    ],
  },
  {
    id: 4,
    imageUrl: '/project-imgs/calculator.png',
    title: 'TypeScript Calculator',
    description: 'A simple calculator application developed with Vite and TypeScript.',
    liveDemoUrl: 'https://ts-simple-calculator.netlify.app/',
    codeUrl: 'https://github.com/tdora28/typescript-calculator',
    labels: ['React', 'TypeScript', 'Vite'],
    longDesc: [
      'As an assignment for the REACT23S TypeScript course at Business College Helsinki, this project focuses on delivering a straightforward and functional user experience. While it intentionally omits decimal and percentage functionalities to maintain simplicity, it performs basic arithmetic operations such as addition, subtraction, multiplication, and division.',
      'The calculator offers an intuitive interface that accommodates both mouse and keyboard inputs, ensuring flexibility and ease of use. This dual-input capability enhances user experience, making calculations quick and convenient. Moreover, to ensure error-free operations, the application incorporates a user input cleaning mechanism utilizing a simple Moore machine.',
      'Responsive design is another key feature of the Simple TypeScript Calculator, allowing users to perform calculations seamlessly across a variety of devices. Whether on a desktop, tablet, or smartphone, the application adjusts its layout to provide an optimal viewing and interaction experience. The use of Vite and TypeScript in its development ensures not only efficient performance but also a modern, maintainable codebase.',
    ],
  },
];

export default projects;
