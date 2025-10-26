import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="mb-4">
      <Card.Img
        variant="top"
        src={product.image}
        style={{ height: '200px', objectFit: 'contain' }}
      />
      <Card.Body>
        <Card.Title>{product.title.substring(0, 20)}...</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        <Link href={`/products/${product.id}`} passHref legacyBehavior>
          <Button variant="primary">View Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
