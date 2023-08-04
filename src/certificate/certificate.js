import React, { useState } from 'react';
import './certificate.css'; // You can create this CSS file for styling

const certificates = [
  {
    title: 'Web Development',
    image: require('./cert-assets/freecodecamp.png.PNG'), // Replace with actual image URL
  },
  {
    title: 'Node Js',
    image: require('./cert-assets/nodejs.png'), // Replace with actual image URL
  },
  {
    title: 'React Js',
    image: require('./cert-assets/react-cert.png'), // Replace with actual image URL
  },
  {
    title: 'Mongo DB',
    image: require('./cert-assets/mongo.png'), // Replace with actual image URL
  },
  {
    title: 'Java',
    image: require('./cert-assets/java certificate.JPG'), // Replace with actual image URL
  },
  // Add more certificates as needed
];

const CertificateCard = ({ certificate }) => {
  return (
    <div className="certificate-card">
      <img src={certificate.image} alt={certificate.title} />
      <h3>{certificate.title}</h3>
    </div>
  );
};

const CertificateComponent = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleCertificates = () => {
    setShowAll(!showAll);
  };

  const displayedCertificates = showAll ? certificates : certificates.slice(0, 3);

  return (
    <div className="certificate-component" id='cert'>
      <h2 className="certificate-heading">Certificates</h2>
      <div className="certificate-cards">
        {displayedCertificates.map((certificate, index) => (
          <CertificateCard key={index} certificate={certificate} />
        ))}
      </div>
      {certificates.length > 2 && (
        <div className="see-more-button-container">
          <button className="see-more-button" onClick={toggleCertificates}>
            {showAll ? 'See Less' : 'See More'}
          </button>
        </div>
      )}
    </div>
  );
};

export default CertificateComponent;
