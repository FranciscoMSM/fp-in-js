const fetch = require('node-fetch');

(async function() {
  const promises = [
    fetch('https://jsonplaceholder.typicode.com/users').then(r => r.json()),
    fetch('https://jsonplaceholder.typicode.com/posts').then(r => r.json()),
  ];

  await Promise.all(promises).then(data => {
    console.log(data);
    const users = data[0];
    const posts = data[1];
    const res = [];

    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      res.push({
        email: user.email,
        posts: [],
      });

      for (let k = 0; k < posts.length; k++) {
        const post = posts[k];

        if (post.userId === user.id)
          res[i].posts.push(`${post.id} ${post.title}`);
      }
    }

    console.log(res);
  });
})();
