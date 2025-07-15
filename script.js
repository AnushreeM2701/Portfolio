// Smooth scrolling
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Project carousel
let currentProject = 0;
const projects = document.querySelectorAll(".project");
const totalProjects = projects.length;

document.querySelector(".next").addEventListener("click", () => {
  projects[currentProject].classList.remove("active");
  currentProject = (currentProject + 1) % totalProjects;
  projects[currentProject].classList.add("active");
});

document.querySelector(".prev").addEventListener("click", () => {
  projects[currentProject].classList.remove("active");
  currentProject = (currentProject - 1 + totalProjects) % totalProjects;
  projects[currentProject].classList.add("active");
});
