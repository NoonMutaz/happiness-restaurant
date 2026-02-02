import HomePage from "../../components/Home-page/Home-page"
import { useEffect,useState } from "react";
import burger from '../../assets/burger.gif';
export default function Home() {
  
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // after 2 seconds, hide spinner
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div 
      className="my-scroll "
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "black",
        }}
      >
 
        <img style={{height:'8rem',width:'8rem'}} src={burger} />
      </div>
    );

 }
  return (
    <div  >
       
          <HomePage/>
 
  
    
    </div>
  )
}
