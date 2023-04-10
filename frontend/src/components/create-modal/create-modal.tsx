import { useEffect, useState } from "react"
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate";
import { FoodData } from "../../interface/FoodData";
import './modal.css'
interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}

interface ModalProps {
    closeModal(): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

export function CreateModel({closeModal}: ModalProps) {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState('');
    const { mutate, isSuccess, isLoading } = useFoodDataMutate();

    const handleSubmit = () => {
        const foodData: FoodData = {
            title,
            price,
            image
        }

        mutate(foodData);
    }

    useEffect(() => {
        if(!isSuccess) return
        closeModal();
    }, [isSuccess])

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo item no cardápio</h2>
                <form className="input-container">
                    <Input label='Título' value={title} updateValue={setTitle}></Input>
                    <Input label='Preço' value={price} updateValue={setPrice}></Input>
                    <Input label='URL da imagem' value={image} updateValue={setImage}></Input>
                </form>
                <button onClick={handleSubmit} className="btn-secondary">
                    {isLoading ? 'Cadastrando...' : 'Cadastrar'}
                </button>
                <button onClick={closeModal} className="close-btn">Fechar</button>
            </div>
        </div>
    )
}