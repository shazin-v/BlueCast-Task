import Logo from "/src/img/logo.svg";
import Card from "./components/Card";

function App() {
  return (
    <>
      <div className="bg-[#c5e4e7] min-h-screen flex flex-col gap-5 justify-center items-center">
          <img src={Logo} alt="logo" className=""/>
        <Card />
      </div>
    </>
  );
}

export default App;
