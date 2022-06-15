import { useEffect, useState } from "react";
import {
  getAlbums,
  getComments,
  getPhotos,
  getTodos,
  getUsers,
} from "../services";

export const DemoApi = () => {
  const [promiseAllSettledRes, setPromiseAllSettledRes] = useState();
  const [promiseAllRes, setPromiseAllRes] = useState();
  //   const [sequence, setSequence] = useState([]);

  useEffect(() => {
    const promise1 = new Promise((resolve, reject) => {
      getUsers()
        .then((res) => res.json())
        .then((data) => {
          resolve(data);
        })
        .catch((e) => {
          reject(e);
        });
    });

    // const promise2 = new Promise((resolve, reject) => {
    //   getComments()
    //     .then((res) => res.json())
    //     .then((data) => {
    //       resolve(data);
    //     })
    //     .catch((e) => {
    //       reject(e);
    //     });
    // });

    const promise2 = new Promise((resolve, reject) =>
      setTimeout(reject, 100, "rejected")
    );

    const promise3 = new Promise((resolve, reject) => {
      getAlbums()
        .then((res) => res.json())
        .then((data) => {
          resolve(data);
        })
        .catch((e) => {
          reject(e);
        });
    });

    const promise4 = new Promise((resolve, reject) => {
      getPhotos()
        .then((res) => res.json())
        .then((data) => {
          resolve(data);
        })
        .catch((e) => {
          reject(e);
        });
    });

    const promise5 = new Promise((resolve, reject) => {
      getTodos()
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
        console.log("Promise All Settled Result: ", res);
        setPromiseAllSettledRes(res);
      }
    );

    Promise.all([promise1, promise2, promise3, promise4, promise5])
      .then((res) => {
        console.log("Promise All > Success: ", typeof res);
        setPromiseAllRes(res);
      })
      .catch((e) => {
        console.log("Promise All > Rejected: ", typeof e);
        setPromiseAllRes(e);
      });

    getUsers()
      .then((res) => {
        // For rejection
        // promise2
        //   .then((data) => {
        //     console.log("Data of promise 2 > Chaining: ", data);
        //     setSequence([...sequence, "Rejected"]);
        //   })
        console.log("1. Get User: ", res);
        getComments()
          // promise2()
          .then((res) => {
            console.log("2. Get Comments: ", res);
            getAlbums()
              .then((res) => {
                console.log("3. Get Albums: ", res);
                getPhotos()
                  .then((res) => {
                    console.log("4. Get Photos: ", res);
                    getTodos()
                      .then((res) => {
                        console.log("5. Get Todos: ", res);
                      })
                      .catch((e) => {
                        console.log("Something went wrong");
                      });
                  })
                  .catch((e) => {
                    console.log("Something went wrong");
                  });
              })
              .catch((e) => {
                console.log("Something went wrong");
              });
          })
          .catch((e) => {
            console.log("Something went wrong");
          });
      })
      .catch((e) => {
        console.log("Something went wrong");
      });
  }, []);
  return (
    <div>
      <h1>Demo for sequential API calls...</h1>
      <div>
        <p>Parallel API calls Status (Using Pomise.allSettled): </p>
        <div>
          {promiseAllSettledRes &&
            promiseAllSettledRes?.map((apiRes, index) => {
              return (
                <div key={index?.toString()}>
                  <span>{index + 1}: </span>
                  <span>{apiRes?.status}</span>
                </div>
              );
            })}
        </div>
      </div>

      <div>
        <p>Parallel API calls Status (Using Pomise.all): </p>
        <div>
          {promiseAllRes && typeof promiseAllRes === "object" && (
            <p>All API calls were successfull</p>
          )}
          {promiseAllRes && typeof promiseAllRes !== "object" && (
            <p>Something went wrong!</p>
          )}
        </div>
      </div>
    </div>
  );
};
