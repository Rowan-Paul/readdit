import React from 'react';
import { Button } from './ui/button';

const LandingPageSection = ({
  darkBackground,
  children
}: {
  darkBackground?: boolean;
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <section className={`w-full py-12 md:py-24 lg:py-32 xl:py-48 ${darkBackground ? 'bg-gray-100' : 'bg-white'}`}>
      <div className="container px-4 md:px-6 mx-auto">{children}</div>
    </section>
  );
};

export default LandingPageSection;
