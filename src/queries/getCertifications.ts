// queries/getCertifications.ts
const Certification = [
  {
    title: "C++ for C Programmers",
    issuer: "University of California, Santa Cruz",
    issuedDate: "",
    link: "https://www.coursera.org/account/accomplishments/verify/RFCDHMUZ4E7B",
    iconName: "coursera",
  },
  {
    title: "Verified Certificate of IITBombayX",
    issuer: "Indian Institute of Technology, Bombay",
    issuedDate: "",
    link: "https://verify.iitbombayx.in/cert/8a029adbd4a243439bf28f6edae62237",
    iconName: "university",
  },
  {
    title: "Programming with Everyone with Python",
    issuer: "University of Michigan",
    issuedDate: "",
    link: "https://www.coursera.org/account/accomplishments/verify/WZ4MF9CUCXHR",
    iconName: "coursera",
  },
  {
    title: "Multiutility Robot Journal",
    issuer: "International Journal of Mechanical Engineering and Technology",
    issuedDate: "Jul 2018",
    link: "https://iaeme.com/MasterAdmin/Journal_uploads/IJMET/VOLUME_9_ISSUE_7/IJMET_09_07_122.pdf",
    iconName: "ieee",
  },
  {
    title: "Hosting Websites with Amazon Lightsail",
    issuer: "Udemy",
    issuedDate: "Jan 2020",
    link: "https://www.udemy.com/certificate/UC-H5ZL8A4E/",
    iconName: "udemy",
  },
  {
    title: "Typescript: The Complete Developer's Guide",
    issuer: "Udemy",
    issuedDate: "Dec 2020",
    link: "https://www.udemy.com/certificate/UC-H5ZL8A4E/",
    iconName: "udemy",
  },
];

export function getCertifications() {
  return Certification;
}
