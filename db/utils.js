const Project = require('./Project.js');
const db = require('./index.js');


const loadProject = (projectId, callback) => {
  Project.find({ id: projectId }, null, null, (error, results) => {
    if (error) {
      console.log('There has been an error retrieving the data', error);
    } else {
      callback(results);
    }
  });
};

module.exports = loadProject;
