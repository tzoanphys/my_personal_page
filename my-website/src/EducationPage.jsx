import './App.css';

function EducationPage() {
  return (
    <>
      <h2 style={{ color: "#00F5C4", marginBottom: "32px" }}>Education</h2>
      <ul style={{ listStyle: "none", padding: 0, maxWidth: "800px", margin: "0 auto", textAlign: "left" }}>
        <li style={{ 
          padding: "16px 20px", 
          marginBottom: "16px", 
          backgroundColor: "rgba(0, 245, 196, 0.05)", 
          borderLeft: "3px solid #00F5C4",
          borderRadius: "4px"
        }}>
          <span style={{ color: "#00F5C4", fontWeight: 600 }}>Ph.D. Physics</span> — National &amp; Kapodistrian University of Athen, Greece, 
          <br />
          Department of Nuclear &amp; Particle Physics
        </li>
        <li style={{ 
          padding: "16px 20px", 
          marginBottom: "16px", 
          backgroundColor: "rgba(0, 245, 196, 0.05)", 
          borderLeft: "3px solid #00F5C4",
          borderRadius: "4px"
        }}>
          <span style={{ color: "#00F5C4", fontWeight: 600 }}>M.Sc. Physics</span> — National &amp; Kapodistrian University of Athen, Greece, 
          <br />
          Department of Nuclear &amp; Particle Physics
        </li>
        <li style={{ 
          padding: "16px 20px", 
          marginBottom: "16px", 
          backgroundColor: "rgba(0, 245, 196, 0.05)", 
          borderLeft: "3px solid #00F5C4",
          borderRadius: "4px"
        }}>
          <span style={{ color: "#00F5C4", fontWeight: 600 }}>B.Sc. Physics</span> — National &amp; Kapodistrian University of Athen, Greece, 
          <br />
          Department of Astrophysics, Astronomy and Mechanics
        </li>
      </ul>
    </>
  );
}

export default EducationPage;

