const toSlug = input =>
  encodeURIComponent(
    input
      .split(' ')
      .map(str => str.toLowerCase())
      .join('-'),
  );

const toSlug = input =>
  encodeURIComponent(join('-')(map(toLowerCase)(split(' ')(input))));

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

const toSlug = compose(
  encodeURIComponent,
  join('-'),
  map(toLowerCase),
  split(' '),
);
