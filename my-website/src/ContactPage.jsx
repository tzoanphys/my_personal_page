import './App.css';

function ContactPage() {
  return (
    <>
      <h2 style={{ color: "#00F5C4", marginBottom: "24px" }}>Contact</h2>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/ioanna-stamou-2289612b3/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          color: "#00F5C4",
          fontSize: "20px",
          textDecoration: "none",
          marginBottom: "20px",
        }}
      >
        {/* LinkedIn SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="#00F5C4"
          viewBox="0 0 24 24"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 
          2.761 2.239 5 5 5h14c2.762 0 5-2.239 
          5-5v-14c0-2.761-2.238-5-5-5zm-11 
          19h-3v-11h3v11zm-1.5-12.268c-.966 
          0-1.75-.79-1.75-1.764s.784-1.764 
          1.75-1.764 1.75.79 1.75 
          1.764-.784 1.764-1.75 1.764zm13.5 
          12.268h-3v-5.604c0-1.336-.027-3.055-1.861-3.055-1.861 
          0-2.146 1.454-2.146 
          2.958v5.701h-3v-11h2.879v1.507h.041c.401-.761 
          1.379-1.562 2.836-1.562 3.033 
          0 3.592 1.995 3.592 4.587v6.468z" />
        </svg>

        LinkedIn Profile
      </a>
    </>
  );
}

export default ContactPage;

