import React, { useEffect, useRef, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import "./style.css";

const Redirect = () => {

  const [time, setTime] = useState(3);
  const timeout = useRef(0);
  const navigate = useNavigate();

  useEffect(() => {
    clearTimeout(timeout.current);

    timeout.current = setTimeout(() => {

      setTime((t) => t - 1);

      if (time <= 0) {
        navigate('/about', {
          state: `This is the state: ${Math.random()}`
        })
      }
    }, 1000);

    return () => {
      clearTimeout(timeout.current)
    }
  }, [time])


  return (
    <div>
      <h1>Get out of here in: {time}</h1>
    </div>
  )
}

export default Redirect
