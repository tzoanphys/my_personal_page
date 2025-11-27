import './App.css';

function ExperiencePage() {
  return (
    <>
      <h2 style={{ color: "#00F5C4", marginBottom: "32px" }}>Working Experience</h2>
      <ul style={{ listStyle: "none", padding: 0, maxWidth: "800px", margin: "0 auto", textAlign: "left" }}>
        <li style={{ 
          padding: "16px 20px", 
          marginBottom: "16px", 
          backgroundColor: "rgba(0, 245, 196, 0.05)", 
          borderLeft: "3px solid #00F5C4",
          borderRadius: "4px"
        }}>
          UpcoMinds, Belgium — Junior Researcher (Software/ML)
        </li>
        <li style={{ 
          padding: "16px 20px", 
          marginBottom: "16px", 
          backgroundColor: "rgba(0, 245, 196, 0.05)", 
          borderLeft: "3px solid #00F5C4",
          borderRadius: "4px"
        }}>
          Université libre de Bruxelles — Research Assistant
        </li>
        <li style={{ 
          padding: "16px 20px", 
          marginBottom: "16px", 
          backgroundColor: "rgba(0, 245, 196, 0.05)", 
          borderLeft: "3px solid #00F5C4",
          borderRadius: "4px"
        }}>
          National &amp; Kapodistrian University of Athens — Research Associate
        </li>
      </ul>
    </>
  );
}

export default ExperiencePage;

