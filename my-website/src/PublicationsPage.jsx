import './App.css';

const publications = [
  {
    title: "Mechanisms for producing Primordial Black Holes from Inflationary Models Beyond Fine-Tuning",
    authors: "Ioanna D. Stamou",
    arxiv: "2404.14321",
    journal: "Universe 2024, 10 (6), 241",
    year: "2024"
  },
  {
    title: "Reconstructing Primordial Black Hole Power Spectra from Gravitational Waves",
    authors: "Florian Kuhnel, Daniel Frolovsky, Ioanna D. Stamou, ",
    arxiv: "2404.06547",
    journal: "Phys.Rev.D 111 (2025) 4, 043538",
    year: "2024"
  },
  {
    title: "Large curvature fluctuations from no-scale supergravity with a spectator field",
    authors: "Ioanna D. Stamou, ",
    arxiv: "2404.02295",
    journal: "Phys.Lett.B 855 (2024) 138798",
    year: "2024"
  },
  {
    title: "Can Primordial Black Holes form in the Standard Model?",
    authors: "Ioanna D. Stamou, Sebastien Clesse ",
    arxiv: "2312.06873",
    journal: "Phys.Rev.D 109 (2024) 12, 123501",
    year: "2023"
  },
  {
    title: "Primordial Black Holes without fine-tuning from a light stochastic spectator field",
    authors: "Ioanna D. Stamou,  Sebastien Clesse",
    arxiv: "2310.04174",
    journal: "Phys.Rev.D 109 (2024) 4, 043522",
    year: "2023"
  },
  {
    title: "Exploring critical overdensity thresholds in inflationary models",
    authors: "Ioanna D. Stamou",
    arxiv: "2306.02758",
    journal: "Phys.Rev.D 108 (2023) 6, 063515",
    year: "2023"
  },
  {
    title: "The CMSSM survives Planck, the LHC, LUX-ZEPLIN, Fermi-LAT, H.E.S.S., IceCube",
    authors: "John R. Ellis, Keith A. Olive, V. C. Spanos, I. D. Stamou ",
    arxiv: "2210.16337",
    journal: "Eur.Phys.J.C 83 (2023) 3, 246",
    year: "2022"
  },
  {
    title: "Primordial black holes and gravitational waves in multiaxion-Chern-Simons inflation",
    authors: "Nick E. Mavromatos, V. C. Spanos, I. D. Stamou",
    arxiv: "2206.07963",
    journal: "Phys.Rev.D 106 (2022) 6, 063532",
    year: "2022"
  },
  {
    title: "Gravitational Waves From No-Scale Supergravity",
    authors: "V. C. Spanos, I. D. Stamou.",
    arxiv: "2205.05595",
    journal: "Eur.Phys.J.C 83 (2023) 1, 4",
    year: "2022"
  },
  {
    title: "Gravitational Waves and Primordial Black Holes from Supersymmetric Hybrid Inflation",
    authors: "V. C. Spanos, I. D. Stamou",
    arxiv: "2108.05671",
    journal: "Phys.Rev.D 104 (2021) 12, 123537",
    year: "2021"
  },
  {
    title: "Spectrum oscillations from features in the potential of single-field inflation",
    authors: "I. Dalianis, G. P. Kodaxis, I. D. Stamou, N. Tetradis, A. Tsigkas-Kouvelis",
    arxiv: "2106.02467",
    journal: "Phys.Rev.D 104 10, 103510",
    year: "2021"
  },
  {
    title: "Mechanisms of Producing Primordial Black Holes by Breaking SU(2,1)/SU(2)×U(1) Symmetry",
    authors: "Ioanna D. Stamou",
    arxiv: "2104.08654",
    journal: "Phys. Rev. D 103, 0835129",
    year: "2021"
  },
  {
    title: "Features of the inflaton potential and the power spectrum of cosmological perturbations",
    authors: "K. Kefala, G. P. Kodaxis, I. D. Stamou, N. Tetradis",
    arxiv: "2010.12483",
    journal: "Phys.Rev.D 104 2, 023506",
    year: "2021"
  },
  {
    title: "Primordial Black Holes from No-Scale Supergravity",
    authors: "D. V. Nanopoulos, V. C. Spanos, I. D. Stamou",
    arxiv: "2008.01457",
    journal: "Phys. Rev. D 102, 083536",
    year: "2020"
  },
  {
    title: "CONFERENCE: Primordial Black Holes & Gravitational Waves Based On No Scale Supergravity",
    authors: "Ioanna D. Stamou",
    arxiv: "2111.14190",
    journal: "J.Phys.Conf.Ser. 2105 (2021) 8",
    year: "2021"
  }
];

function PublicationsPage() {
  return (
    <>
      <h2 style={{ color: "#00F5C4", marginBottom: "32px" }}>Publications</h2>

      <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "left" }}>
        {publications.map((pub, index) => (
          <div
            key={index}
            style={{
              marginBottom: "32px",
              padding: "24px",
              backgroundColor: "rgba(0, 245, 196, 0.05)",
              borderLeft: "3px solid #00F5C4",
              borderRadius: "4px"
            }}
          >
            <h3
              style={{
                color: "#00F5C4",
                marginTop: 0,
                marginBottom: "12px",
                fontSize: "20px",
                fontWeight: "600"
              }}
            >
              {pub.title}
            </h3>
            
            <p style={{ margin: "8px 0", color: "#ccc", fontSize: "16px" }}>
              {pub.authors}
            </p>

            {pub.arxiv && (
              <p style={{ margin: "8px 0", fontSize: "15px" }}>
                <a
                  href={`https://arxiv.org/abs/${pub.arxiv}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#00F5C4",
                    textDecoration: "none"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.textDecoration = "underline";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.textDecoration = "none";
                  }}
                >
                  arXiv:{pub.arxiv}
                </a>
              </p>
            )}

            {pub.journal && (
              <p style={{ margin: "8px 0", color: "#aaa", fontSize: "15px" }}>
                {pub.journal}
              </p>
            )}

            <p style={{ margin: "8px 0 0 0", color: "#888", fontSize: "14px" }}>
              {pub.year}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default PublicationsPage;

