export const mockServiceCreator = (body, succeeds = true) => () =>
  new Promise((resolve, reject) => {
    setTimeout(() => (succeeds ? resolve(body) : reject(body)), 10);
  });
