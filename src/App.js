import React from 'react'
import Main from "./pages/Main";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css';
import './assets/css/responsive.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {

  React.useEffect(() => {
    AOS.init({
    duration : 500
    })
    AOS.refresh()
}, [])
  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default App;
