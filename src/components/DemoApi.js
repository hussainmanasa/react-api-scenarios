import { useEffect } from "react";

export const DemoApi = () => {
  const baseUrl = "https://jsonplaceholder.typicode.com/";
  const url1 = "users";
  const url2 = "comments";
  const url3 = "albums";
  const url4 = "photos";
  const url5 = "todos";

  useEffect(() => {
    const promise1 = new Promise((resolve, reject) => {
      fetch(baseUrl + url1)
        .then((res) => res.json())
        .then((data) => {
          resolve(data);
        })
        .catch((e) => {
          reject(e);
        });
    });

    // const promise2 = new Promise((resolve, reject) => {
    //   fetch(baseUrl + url2)
    //     .then((res) => res.json())
    //     .then((data) => {
    //       resolve(data);
    //     })
    //     .catch((e) => {
    //       reject(e);
    //     });
    // });

    const promise2 = new Promise((resolve, reject) =>
      setTimeout(reject, 100, "rejected!")
    );

    const promise3 = new Promise((resolve, reject) => {
      fetch(baseUrl + url3)
        .then((res) => res.json())
        .then((data) => {
          resolve(data);
        })
        .catch((e) => {
          reject(e);
        });
    });

    const promise4 = new Promise((resolve, reject) => {
      fetch(baseUrl + url4)
        .then((res) => res.json())
        .then((data) => {
          resolve(data);
        })
        .catch((e) => {
          reject(e);
        });
    });

    const promise5 = new Promise((resolve, reject) => {
      fetch(baseUrl + url5)
        .then((res) => res.json())
        .then((data) => {
          resolve(data);
        })
        .catch((e) => {
          reject(e);
        });
    });

    Promise.allSettled([promise1, promise2, promise3, promise4, promise5]).then(
      (res) => {
        console.log("Result: ", res);
      }
    );
  }, []);
  return (
    <div>
      <p>Demo for sequential API calls...</p>
    </div>
  );
};
