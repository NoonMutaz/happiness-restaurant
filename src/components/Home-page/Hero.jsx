import {   Button } from "react-bootstrap";
import styled, {  keyframes } from "styled-components";
import smoke from "../../assets/smokeBG.jpg";

 
// Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  } to {
    opacity: 1;
    transform: translateY(0);
  }
`;

 

// Hero with overlay and gradient
const Hero = styled.div`
  position: relative;
  background: url("${smoke}") center/cover no-repeat;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffc107;
  font-weight: 900;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  text-shadow: 2px 2px 10px rgba(0,0,0,0.8);
  animation: ${fadeInUp} 1s ease forwards;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
   // background: linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.5));
    z-index: 0;
  }

  h1 {
    position: relative;
    z-index: 1;
    margin-bottom: 1.5rem;
  }

  button {
    z-index: 1;
      background-color: #ffc107;
  }
`;

// Button style with glow and scale on hover
const StyledButton = styled(Button)`
  background : #ffc107;
  border: none;
  color: #121212;
  font-weight: 700;
  /* padding: 0.75rem 2.5rem; */
  width:10rem;
  font-size: 1.3rem;
  border-radius: 30px;
  box-shadow: 0 0 10px #ffc107;
  transition: transform 0.3s ease;
  cursor: pointer;
  z-index: 51;

  &:hover {
    background-color: #e0a800;
    box-shadow: 0 0 20px #e0a800;
    transform: scale(1.1);
  }
`;
 
 

 
const floatUp = keyframes`
  0% { transform: translateY(0) translateX(0) scale(1); opacity: 0.8; }
  50% { opacity: 1; }
  100% { transform: translateY(-100px) translateX(20px) scale(1.1); opacity: 0; }
`;
//


const Bubble = styled.div`
  position: absolute;
  bottom: 0;
  background: gray;
  border-radius: 50%;
  opacity: 0.7;
  animation: ${floatUp} ${(props) => props.duration}s ease-in infinite;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  left: ${(props) => props.left}%;
  animation-delay: ${(props) => props.delay}s;
  filter: drop-shadow(0 0 5px lightgray);
`;

 


export default function HeroComponent() {
  return (
    <div>
       <Hero id='home'>
                <h1>مرحبا بكم في كفتريا السعادة! 🎉🍔</h1>
                <StyledButton style={{ backgroundColor: '#ffc107' }} href="#order-section">اطلب الآن 🍟</StyledButton>
      
                {/* Floating bubbles */}
                {[...Array(8)].map((_, i) => (
                  <Bubble
                    key={i}
                    size={20 + Math.random() * 30}
                    left={Math.random() * 30}
                    duration={5 + Math.random() * 25}
                    delay={Math.random() * 5}
                  />
                ))}
              </Hero>
    </div>
  )
}
