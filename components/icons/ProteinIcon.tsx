
import React from 'react';

const ProteinIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12.5 2.042c.287.05.565.125.83.225l5.22,1.74c.73.24,1.16.89,1.16,1.64v9.09c0,.75-.43,1.4-1.16,1.64l-5.22,1.74c-.265.09-.543.165-.83.215" />
    <path d="M11.5 2.042c-.287.05-.565.125-.83.225l-5.22,1.74c-.73.24-1.16.89-1.16,1.64v9.09c0,.75.43,1.4,1.16,1.64l5.22,1.74c.265.09.543.165.83.215" />
  </svg>
);

export default ProteinIcon;
