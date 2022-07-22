export const getPostsApi = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .catch((err) => {
      // throw "Invalid response";
      console.log(err);
    });
};
