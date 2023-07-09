import Content from "./assets/Content";
import Footer from "./assets/Footer";
import Header from "./assets/Header";

const App = () => {
  const clickOne = () => {};
  return (
    <div>
      <Header></Header>
      <Content clickOne={clickOne}></Content>

      <Footer></Footer>
    </div>
  );
};

export default App;
