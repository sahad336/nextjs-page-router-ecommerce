import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import AddToCartButton from '@/components/AddToCart';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

const ProductDetail = () => {
  const { query } = useRouter();
  const { id } = query;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data));
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <>
      <Container className="my-4">
        <Card>
          <Card.Img variant="top" src={product.image} style={{ height: '400px', objectFit: 'contain' }} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <h4>${product.price}</h4>
            <AddToCartButton product={product}/>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default ProductDetail;
