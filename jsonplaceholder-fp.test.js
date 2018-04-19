const {
  joinIdTitle,
  filterById,
  toJson,
  request,
  mapResources,
  mergeUserWithPosts,
  getData,
  execute,
} = require('./jsonplaceholder-fp');

describe('joinIdTitle', () => {
  it('returns object id and title join together in string', () => {
    const id = 'id';
    const title = 'title';

    expect(joinIdTitle({ id, title })).toBe('id - title');
  });
});

describe('filterById', () => {
  it('returns filtered array by userId', () => {
    const data = [{ userId: 0 }, { userId: 1 }, { userId: 2 }];

    const filteredData = data.filter(filterById(0));

    expect(filteredData[0].userId).toEqual(0);
    expect(filteredData.length).toEqual(1);
  });
});

describe('mapResources', () => {
  it('returns users and posts as object', () => {
    const data = [['user1', 'user2'], ['post1', 'post2']];

    const mappedResources = mapResources(data);

    expect(mappedResources.users).toEqual(data[0]);
    expect(mappedResources.posts).toEqual(data[1]);
  });
});

describe('mergeUserWithPosts', () => {
  it('returns users and posts as object', () => {
    const posts = [
      { id: 0, userId: 0, title: 'emlcom' },
      { id: 1, userId: 1, title: 'emi.com' },
      { id: 3, userId: 0, title: 'title' },
      { id: 4, userId: 0, title: 'title2' },
    ];

    const user = {
      email: 'email@com',
      id: 0,
    };

    const userWithPosts = mergeUserWithPosts(posts)(user);

    console.log(userWithPosts);

    expect(userWithPosts.email).toEqual(user.email);
    expect(userWithPosts.posts).toEqual([
      '0 - emlcom',
      '3 - title',
      '4 - title2',
    ]);
  });
});
