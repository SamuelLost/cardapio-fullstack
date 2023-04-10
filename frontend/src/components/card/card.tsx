import './card.css'

interface CardProps {
    price: number,
    title: string,
    image: string
}

export function Card({ price, image, title }: CardProps) {
    return (
        <div className="card">
            <div className='card-wrapper_image'><img src={image}></img></div>
            <h2>{title}</h2>
            <p><b>{price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</b></p>
        </div>
    )
}