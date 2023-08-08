import React from "react";
import { useEffect, useState } from "react";

import "./Shop.css";

function Shop() {
  let [post, setPostData] = useState([]);
  let [page, setPage] = useState(1);
  let [searchData, setSearchData] = useState("");

  useEffect(() => {
    let fetchData = async () => {
      try {
        let res = await fetch(
          `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products?page=${page}&limit=5`
        );
        let data = await res.json();
        setPostData([...post, ...data]);
        console.log(post);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 100
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const filterArr = post.filter((el) => {
    el.title.toLowerCase().includes(searchData.toLowerCase()) ||
      el.description.toLowerCase().includes(searchData.toLowerCase());
  });
  console.log(filterArr);
  return (
    <>
      <h1 className="shop-title">Shopping Scroll App</h1>
      <label className="shop-label">Search for articles</label>
      <input
        className="shop-input"
        type="text"
        value={searchData}
        placeholder="Enter a keyword"
        onChange={(event) => setSearchData(event.target.value)}
      />
      <div className="shop-articles">
        {filterArr.map((el) => {
          return (
            <div className="article" key={el.id}>
              <h2 className="article-title">{el.title}</h2>
              <p>{el.price}</p>
              <p>{el.category}</p>
              <p>{el.description}</p>
              <a>
                <img className="img" src={el.image} />
              </a>
              <p>{el.rating.rate + ", " + el.rating.count}</p>
            </div>
          );
        })}
      </div>
    </>
  );
  // let [apiData, setApiData] = useState([]);
  // let [page, setPage] = useState(1);
  // let [searchData, setsearchData] = useState("");

  // const getTheData = () => {
  //   fetch(
  //     `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products?page=${page}&limit=5`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setApiData([...apiData, ...data]);
  //     });
  // };
  // const handleScroll = () => {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop >=
  //     document.documentElement.offsetHeight - 100
  //   ) {
  //     setPage((prevPage) => prevPage + 1);
  //   }
  // };

  // useEffect(() => {
  //   getTheData();
  // }, [page]);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const filterArray = apiData.filter(
  //   (el) =>
  //     el.title.toLowerCase().includes(searchData.toLowerCase()) ||
  //     el.description.toLowerCase().includes(searchData.toLowerCase())
  // );

  // return (
  //   <>
  //     <h1 className="shop-title">Shopping Scroll App</h1>
  //     <label className="shop-label">Search for articles</label>
  //     <input
  //       className="shop-input"
  //       type="text"
  //       value={searchData}
  //       placeholder="Enter a keyword"
  //       onChange={(e) => setsearchData(e.target.value)}
  //     />
  //     <div className="shop-articles">
  //       {filterArray.map((el) => {
  //         return (
  //           <div className="article" key={el.id}>
  //             <h2 className="article-title">{el.title}</h2>
  //             <p>{el.price}</p>
  //             <p>{el.category}</p>
  //             <p>{el.description}</p>
  //             <a>
  //               <img className="img" src={el.image} />
  //             </a>
  //             <p>{el.rating.rate + ", " + el.rating.count}</p>
  //           </div>
  //         );
  //       })}
  //     </div>
  //   </>
  // );
}
export default Shop;
