import { Suspense } from 'react';
import './App.css'
// import Batter from './Batter'
// import Cart from './cart'
// import Counter from './counter'
import User from './user'
import Todos from './Todos';

const UserDataPromise = async() =>{
  const res = await fetch ('https://jsonplaceholder.typicode.com/users')
  const data = await res.json();
  return data;
}

function App() {

  // const handleClick = () => {
  //   alert('Click Me 2')
  // }

  // const handleCardClick = (id) => {
  //   alert('Click for the button ' + id)
  // }

  return (
    <>
    <Todos></Todos>
    <Suspense fallback={<p>loading........</p>}>
          <User userDataPromise = {UserDataPromise()}></User>
    </Suspense>

    {/* <Batter></Batter>
      <Counter></Counter> */}
      {/* /* <Cart></Cart> */}
      
      {/* 
      <button onClick={handleClick}>Click ME 2</button>
      
      <button onClick={() => alert('click me naw')}>Click ME Naw</button>
      
      <button onClick={() => handleCardClick('65')}>Buy this item</button> 
      */}
    </>
  )
}

export default App

