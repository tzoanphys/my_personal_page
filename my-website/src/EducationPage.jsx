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
          Ph.D. Physics — National &amp; Kapodistrian University of Athen, Greece (2021)
        </li>
        <li style={{ 
          padding: "16px 20px", 
          marginBottom: "16px", 
          backgroundColor: "rgba(0, 245, 196, 0.05)", 
          borderLeft: "3px solid #00F5C4",
          borderRadius: "4px"
        }}>
          M.Sc. Physics — National &amp; Kapodistrian University of Athen, Greece (2017)
        </li>
        <li style={{ 
          padding: "16px 20px", 
          marginBottom: "16px", 
          backgroundColor: "rgba(0, 245, 196, 0.05)", 
          borderLeft: "3px solid #00F5C4",
          borderRadius: "4px"
        }}>
          B.Sc. Physics — National &amp; Kapodistrian University of Athen, Greece (2014)
        </li>
      </ul>
    </>
  );
}

export default EducationPage;

