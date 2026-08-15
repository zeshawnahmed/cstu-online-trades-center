import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';
import BrandName from './BrandName';


const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  return (
    <footer className="bg-emerald-700 text-sand-50">
      <div className="container mx-auto px-6 py-16 max-w-5xl">
        {!isContactPage && (
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.25em] uppercase text-sand-400 mb-4">To Get Started</p>
            <Link
              to="/contact"
              className="font-display text-2xl md:text-3xl font-light text-sand-50 border-b border-sand-400 pb-2 hover:text-sand-200 transition-colors"
            >
              Request program information
            </Link>
          </div>
        )}

        <div className="grid sm:grid-cols-3 gap-10 text-sm">
          <div>
            <p className="font-display text-lg font-light mb-3">
              <BrandName /> <span className="text-sand-400">(AIT)</span>
            </p>
            <p className="text-sand-100/70 font-light leading-relaxed">
              5-week Medical Assistant program · CCBMA CACMA exam prep. BPPE approval pending.
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-sand-400 mb-4">Contact</p>
            <ul className="space-y-3 text-sand-100/80">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-sand-400" />
                <a href="tel:916-572-6514" className="hover:text-sand-50">916-572-6514</a>
              </li>
              <li className="text-sand-100/60 text-xs">
                Fastest reply: <Link to="/contact" className="underline hover:text-sand-50">contact form</Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-sand-400 mb-4">Explore</p>
            <ul className="space-y-3 text-sand-100/80">
              <li><Link to="/curriculum" className="hover:text-sand-50">Curriculum</Link></li>
              <li><Link to="/instructor" className="hover:text-sand-50">Instructor</Link></li>
              <li><Link to="/financial-aid" className="hover:text-sand-50">Tuition</Link></li>
              <li><Link to="/contact" className="hover:text-sand-50">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sand-400/20 mt-12 pt-6">
          <p className="text-xs text-sand-100/50">
            &copy; {currentYear} AIT. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
