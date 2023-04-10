import { useState } from 'react';
import './App.css';
import { Card } from './components/card/card';
import { CreateModel } from './components/create-modal/create-modal';
import { useFoodData } from './hooks/useFoodData';

function App() {
  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev);
  }
  return (
    <div className="container">
      <h1>Cardápio</h1>
      <div className="card-grid">
        {data?.map(foodData =>
          <Card
            price={foodData.price}
            title={foodData.title}
            image={foodData.image}
          />
        )}

        {isModalOpen && <CreateModel closeModal={handleOpenModal} />}
        <button onClick={handleOpenModal} className='btn-secondary'>Novo</button>
      </div>
    </div>
  )
}

export default App
