import './card.css'

interface CardProps {
    price: number,
    title: string,
    image: string
}

export function Card({price, image, title}: CardProps) {
    return (
        <div className="card">
            <img src={image}></img>
            <h2>{title}</h2>
            <p><b>{price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</b></p>
        </div>
    )
}