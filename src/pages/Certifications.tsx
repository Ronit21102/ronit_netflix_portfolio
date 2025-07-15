import React, { useEffect, useState } from "react";
import "./Certifications.css";
import { FaExternalLinkAlt, FaUniversity } from "react-icons/fa";
import { SiUdemy, SiCoursera, SiIeee } from "react-icons/si";
import { Certification } from "../types";
import { getCertifications } from "../queries/getCertifications";
const iconData: { [key: string]: JSX.Element } = {
  udemy: <SiUdemy />,
  coursera: <SiCoursera />,
  ieee: <SiIeee />,
  university: <FaUniversity />,
};

const Certifications: React.FC = () => {
  const [certifications, setCertifications] = useState<Certification[]>([]);

  useEffect(() => {
    //TODO: Uncomment this when we have a real data source
    // async function fetchCertifications() {
    //   const data = await getCertifications();
    //   setCertifications(data);
    // }
    // const data = getCertifications();
    // setCertifications(data);
    // fetchCertifications();
  }, []);

  if (certifications.length === 0)
    return (
      <div
        style={{
          textAlign: "center",
          margin: "3rem 0",
          fontSize: "2rem",
          color: "#e50914",
          fontWeight: "bold",
          background: "rgba(0,0,0,0.07)",
          borderRadius: "12px",
          padding: "2rem",
          letterSpacing: "2px",
          boxShadow: "0 2px 16px rgba(229,9,20,0.08)",
        }}
      >
        🚀 Certifications Coming Soon!
      </div>
    );

  return (
    <div className="certifications-container">
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <a
            href={cert.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="certification-card"
            style={{ "--delay": `${index * 0.2}s` } as React.CSSProperties}
          >
            <div className="certification-content">
              <div className="certification-icon">
                {iconData[cert.iconName] || <FaUniversity />}
              </div>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              {cert.issuedDate && (
                <span className="issued-date">Issued {cert.issuedDate}</span>
              )}
            </div>
            <div className="certification-link animated-icon">
              <FaExternalLinkAlt />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
