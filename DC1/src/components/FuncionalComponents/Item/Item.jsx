import "../Item/ItemStyle.css";

const Item = ({ producto }) => {
    return (
        <div className="Card">
            <h1>
                {producto.category} {producto.brand}
            </h1>
            <img className="Img" src={producto.img} alt="" />
            <p className="Price">${producto.price} USD</p>
        </div>
    );
};

export default Item;
