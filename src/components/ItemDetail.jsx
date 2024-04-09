
import { ItemCount } from "./ItemCount";


export const ItemDetail = ({ id, name, img, category, detail, price, stock }) => {
    return (
        <article>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} width="280px" className="ItemImg" />
            </picture>
            <section>
                <p>
                    Categoria: {category}
                </p>
                <p>
                    Descripcion: {detail}
                </p>
                <p>
                    Precio: ${price}
                </p>
            </section>
            <footer className="ItemFooter">
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada ',quantity)} />
            </footer>
        </article>
    )
}