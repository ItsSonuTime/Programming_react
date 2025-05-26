import { useState } from 'react';
import './NEXT.css';
import { Link } from 'react-router-dom';


const NEXT = () => {
  const [showHindi, setShowHindi] = useState(false);

  return (
    <div className="next-container">
      <div className="next-header">
        <h1>Next.js - React Framework for Production</h1>
        <button className="language-toggle" onClick={() => setShowHindi(!showHindi)}>
          {showHindi ? 'Show English' : 'हिंदी में देखें'}
        </button>
      </div>

      <div className="next-content">
        <section className="introduction">
          <h2>What is Next.js?</h2>
          {!showHindi ? (
            <p>
              Next.js is a powerful React framework that enables features like server-side rendering,
              static site generation, and API routes. It provides an intuitive page-based routing system
              and built-in performance optimizations, making it ideal for production-ready applications.
            </p>
          ) : (
            <p>
              Next.js एक शक्तिशाली React फ्रेमवर्क है जो सर्वर-साइड रेंडरिंग, स्टैटिक साइट जनरेशन और
              API रूट्स जैसी सुविधाएं प्रदान करता है। यह एक सहज पेज-आधारित राउटिंग सिस्टम और
              बिल्ट-इन परफॉरमेंस ऑप्टिमाइजेशन प्रदान करता है, जो इसे प्रोडक्शन-रेडी एप्लिकेशन के लिए आदर्श बनाता है।
            </p>
          )}
        </section>

        <section className="key-features">
          <h2>Key Features</h2>
          <div className="feature-grid">
            {!showHindi ? (
              <>
                <div className="feature-card">
                  <h3>Hybrid Rendering</h3>
                  <p>Server-side, Static, and Client-side rendering</p>
                </div>
                <div className="feature-card">
                  <h3>File-based Routing</h3>
                  <p>Intuitive page-based routing system</p>
                </div>
                <div className="feature-card">
                  <h3>API Routes</h3>
                  <p>Built-in API endpoint creation</p>
                </div>
                <div className="feature-card">
                  <h3>Built-in Optimizations</h3>
                  <p>Automatic image, font, and script optimization</p>
                </div>
              </>
            ) : (
              <>
                <div className="feature-card">
                  <h3>हाइब्रिड रेंडरिंग</h3>
                  <p>सर्वर-साइड, स्टैटिक और क्लाइंट-साइड रेंडरिंग</p>
                </div>
                <div className="feature-card">
                  <h3>फाइल-बेस्ड राउटिंग</h3>
                  <p>सहज पेज-आधारित राउटिंग सिस्टम</p>
                </div>
                <div className="feature-card">
                  <h3>API रूट्स</h3>
                  <p>बिल्ट-इन API एंडपॉइंट क्रिएशन</p>
                </div>
                <div className="feature-card">
                  <h3>बिल्ट-इन ऑप्टिमाइजेशन</h3>
                  <p>स्वचालित इमेज, फॉन्ट और स्क्रिप्ट ऑप्टिमाइजेशन</p>
                </div>
              </>
            )}
          </div>
        </section>

        <section className="basic-setup">
          <h2>Basic Setup</h2>
          <div className="code-examples">
            <div className="code-block">
              <h3>Create Next.js App</h3>
              <pre>
                <code>{`
# Using create-next-app
npx create-next-app@latest my-next-app
cd my-next-app
npm run dev

# Manual setup
npm install next react react-dom
                `}</code>
              </pre>
            </div>

            <div className="code-block">
              <h3>Page Routing</h3>
              <pre>
                <code>{`
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
    </div>
  )
}

// pages/about.js
export default function About() {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  )
}
                `}</code>
              </pre>
            </div>

            <div className="code-block">
              <h3>Data Fetching</h3>
              <pre>
                <code>{`
// Static Site Generation (SSG)
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/data')
  const data = await res.json()

  return {
    props: { data }
  }
}

// Server-side Rendering (SSR)
export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/data')
  const data = await res.json()

  return {
    props: { data }
  }
}
                `}</code>
              </pre>
            </div>
          </div>
        </section>

        <section className="advanced-features">
          <h2>Advanced Features</h2>
          <div className="topic-grid">
            <div className="topic-card">
              <h3>API Routes</h3>
              <pre>
                <code>{`
// pages/api/users.js
export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ users: [] })
  } else if (req.method === 'POST') {
    // Handle POST request
    res.status(201).json({ message: 'User created' })
  }
}
                `}</code>
              </pre>
            </div>

            <div className="topic-card">
              <h3>Dynamic Routes</h3>
              <pre>
                <code>{`
// pages/posts/[id].js
export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } }
    ],
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  return {
    props: { post: { id: params.id } }
  }
}
                `}</code>
              </pre>
            </div>

            <div className="topic-card">
              <h3>Image Optimization</h3>
              <pre>
                <code>{`
import Image from 'next/image'

function MyImage() {
  return (
    <Image
      src="/profile.jpg"
      alt="Profile"
      width={500}
      height={300}
      priority
    />
  )
}
                `}</code>
              </pre>
            </div>
          </div>
        </section>

        <section className="best-practices">
          <h2>Best Practices</h2>
          {!showHindi ? (
            <ul>
              <li>Use appropriate data fetching methods (SSG, SSR, ISR)</li>
              <li>Implement proper error boundaries and loading states</li>
              <li>Optimize images using next/image component</li>
              <li>Use environment variables for configuration</li>
              <li>Implement proper SEO with next/head</li>
              <li>Use TypeScript for better type safety</li>
            </ul>
          ) : (
            <ul>
              <li>उचित डेटा फेचिंग मेथड्स का उपयोग करें (SSG, SSR, ISR)</li>
              <li>उचित एरर बाउंड्रीज और लोडिंग स्टेट्स लागू करें</li>
              <li>next/image कंपोनेंट का उपयोग करके इमेज ऑप्टिमाइज करें</li>
              <li>कॉन्फ़िगरेशन के लिए एनवायरनमेंट वेरिएबल्स का उपयोग करें</li>
              <li>next/head के साथ उचित SEO लागू करें</li>
              <li>बेहतर टाइप सेफ्टी के लिए TypeScript का उपयोग करें</li>
            </ul>
          )}
        </section>

        <section className="next-ecosystem">
          <h2>Next.js Ecosystem</h2>
          <div className="tools-grid">
            <div className="tool-card">
              <h3>Vercel</h3>
              <p>Zero-config deployment platform</p>
            </div>
            <div className="tool-card">
              <h3>next/auth</h3>
              <p>Authentication for Next.js</p>
            </div>
            <div className="tool-card">
              <h3>SWR</h3>
              <p>React Hooks for data fetching</p>
            </div>
            <div className="tool-card">
              <h3>next-i18next</h3>
              <p>Internationalization framework</p>
            </div>
          </div>
        </section>
          <Link to="/mongodb">
                  <button className="Button">Go-Next-step</button>
                </Link>
      </div>
    </div>
  );
};

export default NEXT;