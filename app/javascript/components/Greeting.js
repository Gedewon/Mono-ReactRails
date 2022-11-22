import React,{useEffect} from 'react'
import { loadGreeting } from '../redux /greeting';
import { useDispatch, useSelector } from 'react-redux';

function Greeting() {
  const greeting = useSelector((state)=>state.Greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    let isDisposed =false;
  
    if(!isDisposed){
      dispatch(loadGreeting())
    }

    return () => {isDisposed=true;}
  }, [])

  return (
    <div>{greeting.message}</div>
  );
}

export default Greeting;