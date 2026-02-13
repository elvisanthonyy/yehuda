import Nav from "./component/Nav";
import Main from "./component/Main";
import Footer from "./component/Footer";

export default async function Home() {
  return (
    <>
      <div>
        <Nav />
        <Main />
        <Footer />
      </div>
    </>
  );
}
