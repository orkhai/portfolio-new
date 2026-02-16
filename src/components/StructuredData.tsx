export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Orkhai",
    url: "https://orkhai.dev",
    jobTitle: "Full Stack & Mobile Developer",
    sameAs: ["https://github.com/orkhai", "https://linkedin.com/in/orkhai"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
