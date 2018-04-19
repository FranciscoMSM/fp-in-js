const fetch = require('node-fetch');

// utils
const joinIdTitle = ({ id, title }) => `${id} - ${title}`;
const filterById = id => ({ userId }) => userId === id;

// request
const toJson = response => response.json();
const request = resource =>
  fetch('https://jsonplaceholder.typicode.com' + resource).then(toJson);

// resources
const mapResources = ([users, posts]) => ({ users, posts });

const mergeUserWithPosts = posts => user => ({
  email: user.email,
  posts: posts.filter(filterById(user.id)).map(joinIdTitle),
});

const getData = ({ users, posts }) => users.map(mergeUserWithPosts(posts));

function execute() {
  Promise.all(['/users', '/posts'].map(request))
    .then(mapResources)
    .then(getData)
    .then(console.log);
};

// execute()

module.exports = {
  joinIdTitle,
  filterById,
  toJson,
  request,
  mapResources,
  mergeUserWithPosts,
  getData,
  execute
};
