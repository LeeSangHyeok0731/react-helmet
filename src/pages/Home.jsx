import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1>Home</h1>
      <Navbar />
    </>
  );
}

export default Home;
