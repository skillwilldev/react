interface ProductProps {
  name: string;
  price: string | number;
}

const ProductCard = ({ name, price }: ProductProps) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '8px', width: '150px' }}>
      <h4>{name}</h4>
      <p>Price: ${price}</p>
    </div>
  );
};

export default ProductCard;