// src/pages/SearchPage.js

import React, { useState } from 'react';
import { Container, Row, Col, Dropdown, DropdownButton, Card, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CouponList from '../component/CouponList';

const websites = [                 
  { name: 'Amazon', path: '/search/amazon' },
  { name: 'Myntra', path: '/search/myntra' },
  { name: 'Ajio', path: '/search/ajio' },
  { name: 'Zomato', path: '/search/zomato' },
];

const Search = () => {
  const [selectedWebsite, setSelectedWebsite] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const handleSelect = (website) => {
    setSelectedWebsite(website);
    setShowAlert(false);
  };

  const handleCopy = () => {
    if (!localStorage.getItem('loggedIn')) {
      setShowAlert(true);
    } else {
      navigator.clipboard.writeText('CouponCode123'); // Replace with actual coupon code
      alert('Coupon code copied to clipboard!');
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Search Coupons</h1>
          <DropdownButton id="dropdown-basic-button" title="Select Website" onSelect={handleSelect}>
            {websites.map((website) => (
              <Dropdown.Item key={website.name} eventKey={website}>
                {website.name}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </Col>
      </Row>
      <Row>
        <Col>
          {selectedWebsite && (
            <CouponList website={selectedWebsite.name} onCopy={handleCopy} />
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          {showAlert && (
            <Alert variant="warning" onClose={() => setShowAlert(false)} dismissible>
              You must <Link to="/signin">sign in</Link> to copy coupon codes.
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Search;