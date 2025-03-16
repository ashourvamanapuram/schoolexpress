const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const projects = [
    {
      id: '1234567890',
      title: 'My Project',
      description: 'This is my project',
      imageUrl: '/images/my-project.png',
      videoUrl: null,
      tags: ['javascript', 'typescript'],
    },
  ];
  res.json(projects);
});

app.post('/projects', (req, res) => {
  const project = req.body;
  projects.push(project);
  res.sendStatus(201);
});

app.put('/projects/:id', (req, res) => {
  const id = req.params.id;
  const project = projects.find((p) => p.id === id);
  if (!project) {
    return res.sendStatus(404);
  }
  Object.assign(project, req.body);
  res.sendStatus(200);
});

app.delete('/projects/:id', (req, res) => {
  const id = req.params.id;
  const projectIndex = projects.findIndex((p) => p.id === id);
  if (projectIndex === -1) {
    return res.sendStatus(404);
  }
  projects.splice(projectIndex, 1);
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
