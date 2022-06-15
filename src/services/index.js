const baseUrl = "https://jsonplaceholder.typicode.com/";
const url1 = "users";
const url2 = "comments";
const url3 = "albums";
const url4 = "photos";
const url5 = "todos";

export const getUsers = () => {
  return fetch(baseUrl + url1);
};
export const getComments = () => {
  return fetch(baseUrl + url2);
};
export const getAlbums = () => {
  return fetch(baseUrl + url3);
};
export const getPhotos = () => {
  return fetch(baseUrl + url4);
};
export const getTodos = () => {
  return fetch(baseUrl + url5);
};
