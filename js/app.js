// (function () {
//   var socials = document.querySelectorAll('.social  div')

//   socials.forEach(function(sociale,index) {
//       sociale.style.animation = `movein 12s ease-in-out forwards ${index/7 + 0.2}s`
//       })

//   let rocketPlaces = document.querySelectorAll(".rocket-body span");

//   let rocket = document.querySelector(".rocket");

//   let animaionstart = window.innerHeight / 5;

//   let rocketoffsetTop = rocket.offsetTop;

//   document.addEventListener("scroll", (e) => {
//     if (window.scrollY > (rocketoffsetTop - animaionstart)) {
//       rocketPlaces[0].classList.add("active");
//       rocketPlaces[1].classList.add("active");
//     }
//   })
// }());
// // animation about section
// function isElementInViewport(element) {
//   var rect = element.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }

// function addFadeInClass() {
//   var aboutSection = document.querySelector('.container.aboutSec');
//   if (isElementInViewport(aboutSection)) {
//     aboutSection.classList.add('fade-in');
//     window.removeEventListener('scroll', addFadeInClass);
//   }
// }

// window.addEventListener('scroll', addFadeInClass);


// const popoverButton = document.getElementById('myPopover');
// const popoverContent = document.getElementById('popoverContent');

// popoverButton.addEventListener('click', function () {
//   popoverContent.classList.toggle('show');
// });






//about section


document.addEventListener("DOMContentLoaded", function () {
  const CARDS = 2;
  const MAX_VISIBILITY = 1;

  // Function to create a card element
  function createCard(title, content) {
    const card = document.createElement("div");
    card.className = "card";
    const h2 = document.createElement("h2");
    h2.textContent = title;
    const p = document.createElement("p");
    p.textContent = content;
    card.appendChild(h2);
    card.appendChild(p);
    return card;
  }
  const content=["NASA, short for the National Aeronautics and Space Administration, is an independent agency of the United States federal government. Established in 1958, NASA is responsible for the nation's civilian space program and for conducting research and exploration in various fields of aerospace, including human spaceflight, robotic exploration, Earth science, and astrophysics. It has played a crucial role in advancing our understanding of the universe and pushing the boundaries of human exploration.",
"One of NASA's most notable achievements is the Apollo program, which successfully landed astronauts on the Moon. The first manned Moon landing took place on July 20, 1969, when Apollo 11 astronauts Neil Armstrong and Buzz Aldrin became the first humans to set foot on the lunar surface. This historic event marked a major milestone in human history and demonstrated NASA's commitment to pushing the boundaries of what is possible.",
"In addition to human spaceflight, NASA has been instrumental in advancing our knowledge of the Earth and its environment. Through satellites and other scientific instruments, NASA collects data on climate change, weather patterns, and natural disasters, helping scientists and policymakers better understand and address these important global issues.",
"NASA's robotic explorations have also yielded significant scientific discoveries. Missions such as the Mars rovers Spirit, Opportunity, and Curiosity have provided valuable insights into the geology and habitability of the Red Planet. The Voyager spacecraft, launched in 1977, continue to explore the outer reaches of our solar system and beyond, providing invaluable data about distant planets, moons, and interstellar space.",
"NASA's commitment to innovation extends beyond space exploration. The agency has been at the forefront of developing new technologies and engineering solutions that have found applications in various industries. For example, NASA's advancements in materials science have led to the development of lightweight and heat-resistant materials used in aircraft and automobiles. The agency's research in aerodynamics and propulsion has also contributed to the advancement of aviation technology.",
"Collaboration is a key aspect of NASA's work. The agency partners with international space agencies, academic institutions, and private companies to share resources, knowledge, and expertise. This collaborative approach has enabled groundbreaking missions and fostered international cooperation in space exploration."
] 
  // Create an array of card elements
  const cardElements = [...new Array(CARDS)].map((_, i) => {
    return createCard(
      "About NASA",
      content[i]
      );
  });

  const carousel = document.getElementById("carousel");
  const leftButton = document.createElement("button");
  leftButton.className = "navs left";
  leftButton.innerHTML = '<i class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left" viewBox="0 0 16 16"><path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/></svg></i>';
  const rightButton = document.createElement("button");
  rightButton.className = "navs right";
  rightButton.innerHTML = '<i class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16"><path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/></svg></i>';
  carousel.appendChild(leftButton);

  // Function to update the active card
  function updateActiveCard(activeIndex) {
    cardElements.forEach((card, i) => {
      card.style.transform = `translateX(${(activeIndex - i) / 1}%) scale(${
        i === activeIndex ? 1 : 0
      })`;
      card.style.opacity = Math.abs(activeIndex - i) >= MAX_VISIBILITY ? 0 : 1;
      card.style.display =
        Math.abs(activeIndex - i) > MAX_VISIBILITY ? "none" : "block";
      card.style.pointerEvents = i === activeIndex ? "auto" : "none";
    });
  }

  let activeIndex = 1;
  updateActiveCard(activeIndex);
  carousel.appendChild(rightButton);

  leftButton.addEventListener("click", function () {
    if (activeIndex > 0) {
      activeIndex--;
      updateActiveCard(activeIndex);
    }
  });

  rightButton.addEventListener("click", function () {
    if (activeIndex < cardElements.length - 1) {
      activeIndex++;
      updateActiveCard(activeIndex);
    }
  });

  // Append card elements to the carousel
  cardElements.forEach((card) => {
    const cardContainer = document.createElement("div");
    cardContainer.className = "card-container";
    cardContainer.appendChild(card);
    carousel.appendChild(cardContainer);
  });
});