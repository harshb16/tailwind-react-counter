import { useState } from 'react';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import Container from './Container';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increase = () => setCount((count) => (count += 1));
  const decrease = () => setCount((count) => (count -= 1));
  const reset = () => setCount(0);

  return (
    <Container className='p-16 space-y-4 bg-gray-600 rounded-lg w-72 sm:w-96 sm:space-y-8 '>
      <div className='text-7xl'>{count}</div>
      <ButtonGroup firstButtonAction={increase} secondButtonAction={decrease} />
      <Button action={reset} buttonText='reset' buttonColor='bg-gray-400' />
    </Container>
  );
};

export default Counter;
