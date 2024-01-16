import { useState } from 'react';
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  let [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];

  const checkNumber = (number) =>{
    if(number>person.length-1){
      return 0;
    }

    if(number<0){
      return people.length-1;
    }
    return number;
  }

  const nextPerson = () => {
    setIndex(index+1)

  }

  const previousPerson = () => {
    setIndex(index-1)

  }
  return (
    <main>
      <article className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <h1 className='author'>{name}</h1>
        <p className='job'> {job}</p>
        <p className='info'> {text}</p>
        <div className="btn-container">
          <button  className='prev-btn' disabled={index<=0} onClick={previousPerson}><FaChevronLeft /></button>
          <button className='next-btn' disabled={index>=people.length-1}onClick={nextPerson}><FaChevronRight /></button>
        </div>
      </article>

    </main>
  )
};
export default App;
