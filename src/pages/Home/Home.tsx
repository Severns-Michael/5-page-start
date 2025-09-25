import React from 'react';
import { useRef } from 'react';
import { Suspense, lazy, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO/SEO';
import {
  websiteJsonLd,
  webPageJsonLd,
  localBusinessJsonLd,
  organizationJsonLd,  
  canonicalFor,
  OG_IMAGE
} from '../../lib/seo';


// Lazy imports for below-the-fold sections
// const Problems = lazy(() => import('./sections/Problems'));
// const Focus = lazy(() => import('./sections/Focus'));
// const Process = lazy(() => import('./sections/Process'));
// const Pricing = lazy(() => import('./sections/Pricing'));
// const FinalCta = lazy(() => import('./sections/FinalCta'));
// const Trust = lazy(() => import('./sections/Trust'));

export default function Home() {
 
  

  return (
    <>
<SEO
  title="Custom Web & Software"
  description="Professional websites and lightweight web apps for small businesses. Fast, accessible, SEO-ready."
  canonical={canonicalFor('/')}
  image={OG_IMAGE}
  jsonLd={[
    websiteJsonLd(),
    webPageJsonLd({
      path: '/',
      name: 'Custom Web & Software',
      description:
        'Professional websites and lightweight web apps for small businesses. Fast, accessible, SEO-ready.',
      image: OG_IMAGE,
    }),
    organizationJsonLd({
      logo: '/logo-512.png',
      sameAs: [
        // 'https://www.linkedin.com/company/...',
        // 'https://github.com/...',
        // 'https://x.com/...'
      ],
    }),
    localBusinessJsonLd({
      phone: '+14192616957',
      street: '1500 E Venture Way',
      city: 'Pocatello',
      region: 'ID',
      postal: '83201',
      areaServed: ['Pocatello', 'Idaho Falls', 'Rexburg'],
      })
  ]}
        extraHead={
          <>
            <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
            <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
          </>
        }
      />

      <main className={'snapContainer'}>
        {/* HERO */}
        <section id="hero" className={'heroSection'}>
          <div className="container">
            <div className="heroContent">
              <h1 className="heroTitle">
                Custom Web & Software
              </h1>
              <p className="heroDesc">
                Professional websites and lightweight web apps for small businesses. Fast, accessible, SEO-ready.
              </p>
              <div className="heroCtas">
                <Link to="/contact" className="btn btnPrimary">Get a free quote</Link>
                <Link to="/portfolio" className="btn btnSecondary">See our work</Link>
              </div>
            </div>
          </div>
      
        </section>

        {/* Below-the-fold (lazy) */}
          {/* <Suspense fallback={null}>
          <Defer><Problems styles={styles} /></Defer>
          <Defer><Focus styles={styles} /></Defer>
          <Defer><Trust styles={styles} /></Defer>
          <Defer><Process styles={styles} /></Defer>
          <Defer><Pricing styles={styles} /></Defer>
          <Defer><FinalCta styles={styles} /></Defer>
        </Suspense>
     */}
      </main>
    </>
  );
}
