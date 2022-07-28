import front from '../components/frontend_page-0001.jpg'
import back from '../components/backend_page-0001.jpg'
import { useState } from 'react';
function HomePage() {
  const [first, setFirst] = useState(true)
  const handleState = () => {
    setFirst(!first)
  }
  return (
    <div>
      <button onClick={handleState} class="btn btn-outline-info">{first ? "Backend" : "Front-end"}</button>
      <br></br>
      <img src={first ? front : back} alt='front' className="road rounded" />
    </div>
  );
}
export default HomePage;