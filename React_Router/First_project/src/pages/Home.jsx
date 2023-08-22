import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1>This is a homepage</h1>
      <Link to="products">Go to my products list</Link>
    </>
  );
};
export default HomePage;
