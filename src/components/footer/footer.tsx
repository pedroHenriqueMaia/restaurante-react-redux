import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import './styles.css';

const Footer: React.FC = () => {
  return (
    <footer className=" py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <h5>Sobre Nós</h5>
            <p>
              Somos um restaurante dedicado a oferecer uma experiência
              gastronômica única, com pratos preparados com os melhores
              ingredientes e muito amor.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <h5>Endereço</h5>
            <p>
              Rua Exemplo, 123
              <br />
              Bairro, Cidade - Estado
              <br />
              CEP: 12345-678
            </p>
          </div>
          <div className="col-lg-4 mb-4">
            <h5>Redes Sociais</h5>
            <div>
              <a href="https://www.facebook.com" className="me-3">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://www.instagram.com" className="me-3">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="https://www.twitter.com">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h5 className="mb-4">Localização</h5>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345095557!2d144.95373531550425!3d-37.81627974202178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5778f78c9fa0!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1603007934976!5m2!1sen!2sau"
                width="450"
                height="300"
                allowFullScreen={false}
                aria-hidden={false}
                tabIndex={0}
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
