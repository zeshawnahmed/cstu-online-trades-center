import React from 'react';

const U = ({ children }: { children: React.ReactNode }) => (
  <span className="underline decoration-2 underline-offset-2">{children}</span>
);

const BrandName = ({ className }: { className?: string }) => (
  <span className={className}>
    <U>A</U>merican <U>I</U>nstitute of <U>T</U>rades
  </span>
);

export default BrandName;
