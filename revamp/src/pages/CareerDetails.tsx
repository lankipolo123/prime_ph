
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";

interface JobPosition {
  title: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  benefits: string[];
  companyDetails: {
    email: string;
    address: string;
    phone: string;
  };
}

const jobPositions: JobPosition[] = [
  {
    title: "Junior Web Developer",
    location: "Quezon City",
    type: "Full-time",
    experience: "0–2 years",
    description:
      "Define opportunities to create tangible business value for the client by leading current state assessments and identifying high-level customer requirements, defining the business solutions and structures needed to realize these opportunities, and developing business cases to achieve the vision.",
    responsibilities: [
      "Define opportunities to create tangible business value for the client.",
      "Lead current state assessments and identify high-level customer requirements.",
      "Define business solutions and structures needed to realize these opportunities.",
      "Develop business cases to achieve the vision.",
    ],
    qualifications: [
      "Relevant degree or experience in web development or IT-related fields.",
      "Strong understanding of HTML, CSS, JavaScript, and modern frameworks.",
    ],
    benefits: [
      "Health and wellness benefits.",
      "Career development support and training programs.",
    ],
    companyDetails: {
      email: "careers@primephilippines.com",
      address:
        "3F IT Center, Ben-Lor Building, Quezon Ave, Diliman, Quezon City, 1103 Metro Manila",
      phone: "+63 2 8888 1000",
    },
  },
  {
    title: "Graphic Designer",
    location: "Makati",
    type: "Full-time",
    experience: "1–3 years",
    description:
      "Create compelling visual content that communicates the PRIME Philippines brand effectively across digital and print media. You will collaborate with the marketing team to produce high-quality designs for campaigns, presentations, and corporate materials.",
    responsibilities: [
      "Design marketing materials including brochures, social media graphics, and presentations.",
      "Collaborate with the marketing and sales teams to deliver on-brand visual assets.",
      "Maintain brand consistency across all design outputs.",
      "Manage multiple design projects and meet deadlines efficiently.",
    ],
    qualifications: [
      "Bachelor's degree in Graphic Design, Fine Arts, or related field.",
      "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign).",
      "Strong portfolio demonstrating creative and technical design skills.",
    ],
    benefits: [
      "Health and wellness benefits.",
      "Creative and collaborative work environment.",
      "Career development support and training programs.",
    ],
    companyDetails: {
      email: "careers@primephilippines.com",
      address:
        "23F Ayala North Exchange, Ayala Avenue, Makati City, 1226 Metro Manila",
      phone: "+63 2 8888 1000",
    },
  },
  {
    title: "Marketing Associate",
    location: "Taguig",
    type: "Part-time",
    experience: "0–2 years",
    description:
      "Support the marketing team in executing campaigns that promote PRIME Philippines' services and properties. You will help manage digital channels, coordinate events, and assist in market research to drive brand awareness and lead generation.",
    responsibilities: [
      "Assist in planning and executing digital marketing campaigns.",
      "Manage and update social media accounts and website content.",
      "Conduct market research and compile competitor analysis reports.",
      "Support event coordination and corporate communications.",
    ],
    qualifications: [
      "Bachelor's degree in Marketing, Communications, or related field.",
      "Basic knowledge of digital marketing tools and social media platforms.",
      "Excellent written and verbal communication skills.",
    ],
    benefits: [
      "Flexible working hours.",
      "Exposure to the real estate industry.",
      "Mentorship and career growth opportunities.",
    ],
    companyDetails: {
      email: "careers@primephilippines.com",
      address:
        "32F Petron Mega Plaza, 358 Sen. Gil Puyat Avenue, Makati City, 1200 Metro Manila",
      phone: "+63 2 8888 1000",
    },
  },
  {
    title: "Sales Executive",
    location: "Cebu",
    type: "Full-time",
    experience: "2–5 years",
    description:
      "Drive revenue growth by building and managing a portfolio of commercial real estate clients. You will identify new business opportunities, nurture client relationships, and close deals for PRIME Philippines' office, retail, and industrial property listings.",
    responsibilities: [
      "Prospect and develop new client relationships in the Cebu market.",
      "Present and negotiate property deals to meet client requirements.",
      "Achieve monthly and quarterly sales targets.",
      "Maintain up-to-date knowledge of market trends and property inventory.",
    ],
    qualifications: [
      "Bachelor's degree in Business, Marketing, or related field.",
      "Proven track record in sales, preferably in real estate.",
      "Strong negotiation, communication, and interpersonal skills.",
      "Valid driver's license is an advantage.",
    ],
    benefits: [
      "Competitive base salary plus commission.",
      "Health and wellness benefits.",
      "Travel and transportation allowances.",
    ],
    companyDetails: {
      email: "careers@primephilippines.com",
      address:
        "Cebu Business Park, Cebu City, 6000 Cebu",
      phone: "+63 2 8888 1000",
    },
  },
  {
    title: "Real Estate Analyst",
    location: "Quezon City",
    type: "Full-time",
    experience: "2–4 years",
    description:
      "Provide data-driven insights and research to support PRIME Philippines' advisory services. You will analyze market trends, prepare valuation reports, and deliver actionable recommendations to clients and internal teams.",
    responsibilities: [
      "Conduct research and analysis on commercial real estate market trends.",
      "Prepare property valuation and feasibility studies.",
      "Develop comprehensive reports and presentations for client advisory.",
      "Monitor economic indicators and their impact on the real estate sector.",
    ],
    qualifications: [
      "Bachelor's degree in Real Estate Management, Economics, Finance, or related field.",
      "Strong analytical and quantitative skills.",
      "Proficiency in MS Excel and data visualization tools.",
      "Experience with real estate research or financial modeling is an advantage.",
    ],
    benefits: [
      "Health and wellness benefits.",
      "Access to industry research tools and databases.",
      "Career development and professional training support.",
    ],
    companyDetails: {
      email: "careers@primephilippines.com",
      address:
        "3F IT Center, Ben-Lor Building, Quezon Ave, Diliman, Quezon City, 1103 Metro Manila",
      phone: "+63 2 8888 1000",
    },
  },
  {
    title: "HR Coordinator",
    location: "Makati",
    type: "Full-time",
    experience: "1–3 years",
    description:
      "Support the Human Resources department in managing recruitment, employee relations, and HR administrative functions. You will help ensure a positive employee experience and maintain compliance with labor regulations.",
    responsibilities: [
      "Assist in end-to-end recruitment processes including job posting and candidate screening.",
      "Coordinate onboarding and orientation programs for new employees.",
      "Maintain employee records and HR documentation.",
      "Support the implementation of company policies and HR initiatives.",
    ],
    qualifications: [
      "Bachelor's degree in Human Resources, Psychology, or related field.",
      "Knowledge of Philippine labor laws and HR best practices.",
      "Strong organizational and interpersonal skills.",
      "Proficiency in MS Office and HR information systems.",
    ],
    benefits: [
      "Health and wellness benefits.",
      "Collaborative and people-focused work environment.",
      "Career development support and training programs.",
    ],
    companyDetails: {
      email: "careers@primephilippines.com",
      address:
        "23F Ayala North Exchange, Ayala Avenue, Makati City, 1226 Metro Manila",
      phone: "+63 2 8888 1000",
    },
  },
  {
    title: "Administrative Assistant",
    location: "Pasig",
    type: "Full-time",
    experience: "0–2 years",
    description:
      "Provide administrative and clerical support to ensure the smooth and efficient operation of PRIME Philippines' Pasig office. You will handle scheduling, correspondence, and office management tasks to support the team.",
    responsibilities: [
      "Manage calendars, schedules, and meeting arrangements.",
      "Handle incoming and outgoing correspondence and communications.",
      "Maintain filing systems and office supply inventory.",
      "Coordinate with internal departments and external vendors as needed.",
    ],
    qualifications: [
      "Bachelor's degree in Business Administration or related field.",
      "Strong organizational and time management skills.",
      "Excellent verbal and written communication skills.",
      "Proficiency in MS Office (Word, Excel, Outlook).",
    ],
    benefits: [
      "Health and wellness benefits.",
      "Stable work environment with a professional team.",
      "Career development support.",
    ],
    companyDetails: {
      email: "careers@primephilippines.com",
      address:
        "The Podium West Tower, ADB Avenue, Ortigas Center, Pasig City, 1605 Metro Manila",
      phone: "+63 2 8888 1000",
    },
  },
];

const JobDescription = ({ job }: { job: JobPosition }) => (
  <section className="space-y-15">
    <h2 className="text-4xl font-semibold mb-2">{job.title}</h2>
    <div className="flex flex-wrap gap-4 mb-4">
      <span className="bg-PRIMEblue text-white px-4 py-1 rounded-full text-sm">{job.location}</span>
      <span className="bg-PRIMEblue text-white px-4 py-1 rounded-full text-sm">{job.type}</span>
      <span className="bg-PRIMEblue text-white px-4 py-1 rounded-full text-sm">Experience: {job.experience}</span>
    </div>
    <div className="border-b"></div>
    <div className="mt-4">
      <h2 className="text-3xl font-semibold mb-2">Job Description</h2>
      <p className="text-gray-800">{job.description}</p>
    </div>
    <div className="mt-4">
      <h2 className="text-3xl font-semibold mb-2">Responsibilities</h2>
      <ul className="list-disc pl-13 space-y-2 text-gray-800">
        {job.responsibilities.map((resp, index) => (
          <li key={index}>{resp}</li>
        ))}
      </ul>
    </div>
    <div className="mt-4">
      <h2 className="text-3xl font-semibold mb-2">Qualifications</h2>
      <ul className="list-disc pl-13 space-y-2 text-gray-800">
        {job.qualifications.map((qual, index) => (
          <li key={index}>{qual}</li>
        ))}
      </ul>
    </div>
    <div className="mt-4">
      <h2 className="text-3xl font-semibold mb-2">Benefits</h2>
      <ul className="list-disc pl-13 space-y-2 text-gray-800">
        {job.benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
    </div>
    <div className="mt-4">
      <h2 className="text-3xl font-semibold mb-2">Company Details</h2>
      <p className="text-gray-800">
        <strong>Send your application here:</strong>{" "}
        <a href={`mailto:${job.companyDetails.email}`} className="text-PRIMEblue underline">
          {job.companyDetails.email}
        </a>
      </p>
      <p>
        <strong>Company Address:</strong> {job.companyDetails.address}
      </p>
      <p>
        <strong>Contact No:</strong> {job.companyDetails.phone}
      </p>
    </div>
  </section>
);

export default function CareerDetailsPage() {
  const { title } = useParams<{ title: string }>();
  const index = parseInt(title ?? "0", 10);
  const job = jobPositions[index] ?? jobPositions[0];

  return (
    <div className="bg-white text-black min-h-screen">
      <Navbar />
      {/* Banner */}
      <section className="relative h-[250px] bg-[url('/Careers/Careers.jpeg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-PRIMEblue/70" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 flex items-center justify-center"
        >
        </motion.div>
      </section>
      {/* Content */}
      <div className="max-w-screen-lg mx-auto p-10 space-y-20">
        <JobDescription job={job} />
      </div>
      <Footer />
    </div>
  );
}
