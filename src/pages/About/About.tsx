
import { SEO } from "../../components/SEO/SEO";
import styles from "./About.module.css";
import { webPageJsonLd, canonicalFor, normalizeImageUrl, organizationJsonLd, breadcrumbJsonLd } from '../../lib/seo';



export default function About() {
 
  
  return (
    <>
      <SEO
        title="About Us"
        description="Learn more about our team, values, and mission. We're dedicated to providing top-notch web solutions for small businesses."
        canonical={canonicalFor('/about')}
        image={normalizeImageUrl('/about/office.jpg')}
        jsonLd={[
          webPageJsonLd({
            path: '/about',
            name: 'About Us',
            description:
              "Learn more about our team, values, and mission. We're dedicated to providing top-notch web solutions for small businesses.",
          }),
        ]}
      />

      <main id="main" tabIndex={-1} className="container">
        <h1>About Us</h1>
        <p>
          We are a team of passionate developers and designers committed to
          delivering high-quality web solutions for small businesses. Our
          mission is to help you succeed online by providing fast, accessible,
          and SEO-ready websites.
        </p>
      </main>
    </>
  );
}