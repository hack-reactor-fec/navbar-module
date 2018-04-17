const db = require('./index.js');
const Project = require('./Project.js');

const projects = [];

for (let i = 0; i < 100; i++) {
  const project = new Project({
    id: i,
    faq: Math.floor(Math.random() * 16),
    updates: Math.floor(Math.random() * 6),
    comments: Math.floor(Math.random() * 1000),
    reminders: [],
  });
  projects.push(project);
}

const seedProjects = () => {
  Project.create(projects)
    .then(() => db.disconnect());
};

seedProjects();
