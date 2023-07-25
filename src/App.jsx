import { useEffect, useState } from "react";
import "./App.css";
import Paginate from "./Paginate";

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(2);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

  async function getProducts() {
    const res = await fetch("https://dummyjson.com/products");
    const body = await res.json();
    setProducts(body.products);
    console.log(body.products);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <h2>PAGINATION</h2>
      {currentPosts &&
        currentPosts?.map((ele) => {
          return (
            <div key={ele.id}>
              <h3>{ele.title}</h3>
              {ele.images &&
                ele.images.map((img, i) => {
                  return (
                    <img
                      key={(ele.id, i)}
                      style={{ width: "15rem", height: "20vh" }}
                      src={img}
                    />
                  );
                })}
            </div>
          );
        })}
      <Paginate
        totalPosts={products.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
}

export default App;
