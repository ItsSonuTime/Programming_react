import { useState } from 'react';
import './MongoDB.css';
import { Link } from 'react-router-dom';


const MongoDB = () => {
  const [showHindi, setShowHindi] = useState(false);

  return (
    <div className="mongodb-container">
      <div className="mongodb-header">
        <h1>MongoDB - NoSQL Database</h1>
        <button className="language-toggle" onClick={() => setShowHindi(!showHindi)}>
          {showHindi ? 'Show English' : 'हिंदी में देखें'}
        </button>
      </div>

      <div className="mongodb-content">
        <section className="introduction">
          <h2>What is MongoDB?</h2>
          {!showHindi ? (
            <p>
              MongoDB is a popular NoSQL database that stores data in flexible, JSON-like documents. 
              It's designed for scalability, high performance, and ease of development. Unlike traditional 
              relational databases, MongoDB doesn't require a fixed schema, making it ideal for modern applications.
            </p>
          ) : (
            <p>
              MongoDB एक लोकप्रिय NoSQL डेटाबेस है जो डेटा को लचीले, JSON-जैसे दस्तावेजों में स्टोर करता है।
              यह स्केलेबिलिटी, उच्च प्रदर्शन और विकास की सरलता के लिए डिज़ाइन किया गया है। पारंपरिक
              रिलेशनल डेटाबेस के विपरीत, MongoDB को एक निश्चित स्कीमा की आवश्यकता नहीं होती है, जो इसे आधुनिक एप्लिकेशन के लिए आदर्श बनाता है।
            </p>
          )}
        </section>

        <section className="key-features">
          <h2>Key Features</h2>
          <div className="feature-grid">
            {!showHindi ? (
              <>
                <div className="feature-card">
                  <h3>Document-Based</h3>
                  <p>Stores data in flexible JSON-like BSON documents</p>
                </div>
                <div className="feature-card">
                  <h3>Scalable</h3>
                  <p>Horizontal scaling through sharding</p>
                </div>
                <div className="feature-card">
                  <h3>Flexible Schema</h3>
                  <p>No fixed structure required for documents</p>
                </div>
                <div className="feature-card">
                  <h3>High Performance</h3>
                  <p>Indexing, aggregation, and fast queries</p>
                </div>
              </>
            ) : (
              <>
                <div className="feature-card">
                  <h3>दस्तावेज़-आधारित</h3>
                  <p>लचीले JSON-जैसे BSON दस्तावेजों में डेटा स्टोर करता है</p>
                </div>
                <div className="feature-card">
                  <h3>स्केलेबल</h3>
                  <p>शार्डिंग के माध्यम से क्षैतिज स्केलिंग</p>
                </div>
                <div className="feature-card">
                  <h3>लचीला स्कीमा</h3>
                  <p>दस्तावेजों के लिए कोई निश्चित संरचना आवश्यक नहीं</p>
                </div>
                <div className="feature-card">
                  <h3>उच्च प्रदर्शन</h3>
                  <p>इंडेक्सिंग, एग्रीगेशन और तेज क्वेरी</p>
                </div>
              </>
            )}
          </div>
        </section>

        <section className="basic-operations">
          <h2>Basic CRUD Operations</h2>
          <div className="code-examples">
            <div className="code-block">
              <h3>Create (Insert)</h3>
              <pre>
                <code>{`
// Insert one document
db.collection.insertOne({
  name: "John Doe",
  age: 30,
  city: "New York"
})

// Insert multiple documents
db.collection.insertMany([
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 }
])
                `}</code>
              </pre>
            </div>

            <div className="code-block">
              <h3>Read (Query)</h3>
              <pre>
                <code>{`
// Find all documents
db.collection.find()

// Find with conditions
db.collection.find({ age: { $gt: 25 } })

// Find one document
db.collection.findOne({ name: "John Doe" })
                `}</code>
              </pre>
            </div>

            <div className="code-block">
              <h3>Update</h3>
              <pre>
                <code>{`
// Update one document
db.collection.updateOne(
  { name: "John Doe" },
  { $set: { age: 31 } }
)

// Update many documents
db.collection.updateMany(
  { age: { $lt: 30 } },
  { $inc: { age: 1 } }
)
                `}</code>
              </pre>
            </div>

            <div className="code-block">
              <h3>Delete</h3>
              <pre>
                <code>{`
// Delete one document
db.collection.deleteOne({ name: "John Doe" })

// Delete many documents
db.collection.deleteMany({ age: { $lt: 25 } })

// Delete all documents
db.collection.deleteMany({})
                `}</code>
              </pre>
            </div>
          </div>
        </section>

        <section className="advanced-topics">
          <h2>Advanced Topics</h2>
          <div className="topic-grid">
            <div className="topic-card">
              <h3>Aggregation Pipeline</h3>
              <pre>
                <code>{`
db.collection.aggregate([
  { $match: { age: { $gt: 25 } } },
  { $group: { 
      _id: "$city",
      avgAge: { $avg: "$age" }
    }
  }
])
                `}</code>
              </pre>
            </div>

            <div className="topic-card">
              <h3>Indexing</h3>
              <pre>
                <code>{`
// Create single index
db.collection.createIndex({ name: 1 })

// Create compound index
db.collection.createIndex({ 
  name: 1, 
  age: -1 
})
                `}</code>
              </pre>
            </div>

            <div className="topic-card">
              <h3>Relationships</h3>
              <pre>
                <code>{`
// Reference relationship
{
  _id: 1,
  item: "xyz",
  category_id: 123
}

// Embedded relationship
{
  _id: 1,
  item: "xyz",
  category: {
    id: 123,
    name: "Electronics"
  }
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
              <li>Design your schema based on how you'll access the data</li>
              <li>Use appropriate indexes to improve query performance</li>
              <li>Avoid deeply nested documents (no more than 100 levels)</li>
              <li>Keep document size under 16MB</li>
              <li>Use atomic operations for data consistency</li>
              <li>Implement proper error handling and validation</li>
            </ul>
          ) : (
            <ul>
              <li>डेटा एक्सेस पैटर्न के आधार पर स्कीमा डिजाइन करें</li>
              <li>क्वेरी प्रदर्शन सुधारने के लिए उचित इंडेक्स का उपयोग करें</li>
              <li>गहरे नेस्टेड दस्तावेजों से बचें (100 स्तरों से अधिक नहीं)</li>
              <li>दस्तावेज़ का आकार 16MB से कम रखें</li>
              <li>डेटा कंसिस्टेंसी के लिए एटॉमिक ऑपरेशंस का उपयोग करें</li>
              <li>उचित एरर हैंडलिंग और वैलिडेशन लागू करें</li>
            </ul>
          )}
        </section>

        <section className="mongodb-tools">
          <h2>MongoDB Tools & Ecosystem</h2>
          <div className="tools-grid">
            <div className="tool-card">
              <h3>MongoDB Compass</h3>
              <p>GUI tool for exploring and manipulating data</p>
            </div>
            <div className="tool-card">
              <h3>MongoDB Atlas</h3>
              <p>Cloud database service</p>
            </div>
            <div className="tool-card">
              <h3>Mongoose</h3>
              <p>ODM for Node.js</p>
            </div>
            <div className="tool-card">
              <h3>MongoDB Shell</h3>
              <p>Command-line interface</p>
            </div>
          </div>
        </section>
          <Link to="/expressjs">
                  <button className="Button">Go-Next-step</button>
                </Link>
      </div>
    </div>
  );
};

export default MongoDB;