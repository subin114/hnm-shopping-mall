import "./ProductCard.scss";

const ProductCard = ({ item }) => {
  return (
    <div className="ProductCard">
      <div>
        <img src={item?.img} />
      </div>
      <span className="choice">
        {item?.choice === true ? "Conscious choice" : ""}
      </span>
      <p>
        <span>{item?.title}</span>
        <span className={item?.new === true ? "new" : ""}>
          {item?.new === true ? "NEW" : ""}
        </span>
      </p>
      <span>₩{item?.price.toLocaleString()}</span>
    </div>
  );
};

export default ProductCard;
