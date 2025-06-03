import React from 'react';

const styles: React.CSSProperties = {
  maxWidth: 700,
  margin: '40px auto',
  fontFamily: 'Georgia, serif',
  background: '#fff',
  color: '#222',
  padding: 40,
  borderRadius: 10,
  boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
  lineHeight: 1.7,
  fontSize: 18,
};

const titleStyle: React.CSSProperties = {
  fontSize: 36,
  fontWeight: 700,
  marginBottom: 15,
};

const dateStyle: React.CSSProperties = {
  fontSize: 16,
  color: '#888',
  marginBottom: 32,
};

const MasterRoofers: React.FC = () => (
  <div style={styles}>
    <h1 style={titleStyle}>Master Roofers</h1>
    <div style={dateStyle}>May 27, 2025</div>
    <p>
      At Master Roofers, we pride ourselves on delivering top-notch roofing services for both residential and commercial clients. With decades of experience, our team ensures quality, reliability, and customer satisfaction with every project.
    </p>
    <p>
      Our services include:
    </p>
    <ul>
      <li>Roof installation and replacement</li>
      <li>Roof repairs and maintenance</li>
      <li>Emergency leak repair</li>
      <li>Gutter installation and cleaning</li>
      <li>Roof inspection and consultation</li>
    </ul>
    <p>
      Why choose Master Roofers?
    </p>
    <ul>
      <li>Experienced and certified professionals</li>
      <li>High-quality materials</li>
      <li>Transparent pricing</li>
      <li>Excellent customer service</li>
      <li>Fully insured and licensed</li>
    </ul>
    <p>
      Contact us today for a free estimate and let us protect your home or business with a durable, beautiful roof!
    </p>
  </div>
);

export default MasterRoofers;
