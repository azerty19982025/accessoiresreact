import React from 'react';
import { Card, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Name from './components/name';
import Price from './components/price';
import Description from './components/description';
import Image from './components/image';
import './styles.css';

const firstName = "Jean"; // Remplacez par votre prénom ou laissez vide

function App() {
  return (
    <Container className="app-container">
      <Card className="product-card">
        <Card.Body>
          <Image />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>

      <div className="greeting">
        {firstName ? (
          <>
            <p>Bonjour, {firstName} !</p>
            <img 
              src="https://via.placeholder.com/100x100?text=👍" 
              alt="Smiley" 
              className="smiley"
            />
          </>
        ) : (
          <p>Bonjour !</p>
        )}
      </div>
    </Container>
  );
}

export default App;import React from 'react';
import { Card, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Name from './components/name';
import Price from './components/price';
import Description from './components/description';
import Image from './components/image';
import './styles.css';

const firstName = "Jean"; // Remplacez par votre prénom ou laissez vide

function App() {
  return (
    <Container className="app-container">
      <Card className="product-card">
        <Card.Body>
          <Image />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>

      <div className="greeting">
        {firstName ? (
          <>
            <p>Bonjour, {firstName} !</p>
            <img 
              src="https://via.placeholder.com/100x100?text=👍" 
              alt="Smiley" 
              className="smiley"
            />
          </>
        ) : (
          <p>Bonjour !</p>
        )}
      </div>
    </Container>
  );
}

export default App;
