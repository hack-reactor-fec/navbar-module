const Project = require('./Project.js');
const db = require('./index.js');


const loadProject = (projectId, callback) => {
  console.log('inside loadProject');
  Project.find({ id: projectId }, null, null, (error, results) => {
    if (error) {
      console.log('There has been an error retrieving the data', error);
    } else {
      callback(results);
    }
  });
};

const updateRemindList = (email, projectId, callback) => {
  const reminder = {
    email,
    reminderCreatedAt: new Date(),
  };
  console.log(reminder);
  Project.findOneAndUpdate({ id: projectId }, { $push: { reminders: reminder } }, (err, result) => {
    if (err) {
      console.log('There has been an error saving your email address', err);
    } else {
      callback(result);
    }
  });
};

module.exports.loadProject = loadProject;
module.exports.updateRemindList = updateRemindList;
