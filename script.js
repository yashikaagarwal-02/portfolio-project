const projects = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio project"
  },
  {
    title: "Task Manager",
    description: "Task management application"
  }
];

const container = document.getElementById("projects");

projects.forEach(project => {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
  `;

  container.appendChild(div);
});