export interface CapabilityColumn {
  id: string;
  eyebrow: string;
  title: string;
  summary: string;
  items: string[];
}

export interface GovernancePractice {
  step: string;
  title: string;
  description: string;
  toolsOrArtifacts: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  isCurrent?: boolean;
  summary: string;
  bullets: string[];
  award?: string;
}

export const PROFILE = {
  name: 'Dinesh Kumar Panneer',
  initials: 'DK',
  roleTitle: 'Release Manager & Scrum Master',
  specialization: 'ITIL® Service Management, Change/Release Governance & Agile Delivery',
  bio: '15+ years of enterprise IT leadership across BNP Paribas, IBM Global Services, HCL Technologies, Tata Consultancy Services (TCS), and Sify Technology Solutions—bridging structured ITIL governance with high-velocity Scrum teams across Chennai, Bengaluru, and global delivery models.',
  location: 'Chennai, Tamil Nadu, India',
  availability: 'Chennai, Bengaluru & Global Delivery',
  email: 'crux.dinesh@gmail.com',
  phone: '+91 99402 28810',
  linkedinUrl: 'https://www.linkedin.com/in/dinesh-kumar-panneer-a12932a3/',
  linkedinHandle: 'linkedin.com/in/dinesh-kumar-panneer-a12932a3',
  resumePath: '/Dinesh_Kumar_Panneer_Resume.pdf',
  resumeFilename: 'Dinesh_Kumar_Panneer_Resume.pdf',
  photoPath: '/profile.jpg',
  languages: ['English', 'Tamil'],
};

export const HIGHLIGHTS = [
  { label: 'Experience', value: '15+ Years Enterprise IT' },
  { label: 'Enterprises', value: 'BNP Paribas · IBM · HCL · TCS · Sify' },
  { label: 'Credentials', value: 'ITIL® V3 Foundation & RCV' },
  { label: 'Focus', value: 'Release, CAB/ECAB & Scrum' },
];

export const CORE_CAPABILITIES: CapabilityColumn[] = [
  {
    id: 'release-change',
    eyebrow: '01 · Governance & Control',
    title: 'Release & Change Management',
    summary:
      'Disciplined release pipelines and change boards engineered to eliminate production risk in regulated banking and enterprise environments.',
    items: [
      'Release readiness, milestone & Go/No-Go reviews',
      'CAB & Emergency CAB (ECAB) chairing & conflict resolution',
      'Doer-Checker compliance & audit traceability',
      'Non-prod environment & test data coordination',
      'Configuration Management (CMS / CMDB) stewardship',
    ],
  },
  {
    id: 'agile-scrum',
    eyebrow: '02 · Delivery Velocity',
    title: 'Agile & Scrum Leadership',
    summary:
      'Servant leadership that shields engineering squads, resolves cross-team blockers, and embeds quality gates into every sprint cycle.',
    items: [
      'Scrum ceremony facilitation & servant leadership',
      'Sprint planning, estimation & capacity alignment',
      'Backlog coherence with release roadmaps',
      'Blocker resolution & protecting team focus',
      'Embedding quality controls into sprint reviews',
    ],
  },
  {
    id: 'itsm-excellence',
    eyebrow: '03 · Operational Resilience',
    title: 'ITSM, Incident & Process Excellence',
    summary:
      'End-to-end service management rigor spanning high-severity incident bridges, root cause analysis, and executive SLA/KPI visibility.',
    items: [
      'Critical incident / SEV-1 restoration bridges',
      'Problem Management & Root Cause Analysis (RCA)',
      'As-Is / To-Be process gap analysis & SOP architecture',
      'ServiceNow & Serena workflow optimization',
      'SLA, KPI, Turnaround Time (TAT) & MIS reporting',
    ],
  },
];

export const GOVERNANCE_PRACTICES: GovernancePractice[] = [
  {
    step: '01',
    title: 'As-Is & To-Be Process Gap Analysis',
    description:
      'Runs structured process workshops to diagnose operational bottlenecks, design scalable To-Be workflows, and align teams around clear Standard Operating Procedures.',
    toolsOrArtifacts: ['Process Workshops', 'Workflow Proposals', 'Transition SOPs'],
  },
  {
    step: '02',
    title: 'CAB / ECAB & Go/No-Go Gateways',
    description:
      'Establishes decisive release readiness checkpoints—balancing delivery urgency against business downtime negotiation, schedule conflict resolution, and environment health.',
    toolsOrArtifacts: ['Release Readiness', 'Milestone Reviews', 'Downtime Negotiation'],
  },
  {
    step: '03',
    title: 'Audit Readiness & Doer-Checker Controls',
    description:
      'Acts as Point of Contact (POC) for internal and client audits, enforcing Doer-Checker compliance, schedule slippage tracking, and SLA-bound Change closures.',
    toolsOrArtifacts: ['Client Audit POC', 'Doer-Checker Policy', 'Post-Implementation Review'],
  },
  {
    step: '04',
    title: 'ServiceNow, Serena & MIS Telemetry',
    description:
      'Delivers ITSM platform process enhancements, awareness enablement, and executive Change & TAT dashboards so stakeholders make informed decisions.',
    toolsOrArtifacts: ['ServiceNow & Serena', 'Executive MIS Decks', 'KPI / TAT Dashboards'],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'bnp-paribas',
    company: 'BNP Paribas',
    role: 'Release Manager & Scrum Master',
    period: 'Dec 2021 – Present',
    location: 'Chennai',
    isCurrent: true,
    summary:
      'Driving banking-grade ITIL® release governance, non-production environment alignment, and Scrum team delivery across distributed squads.',
    bullets: [
      'Spearheads end-to-end release governance including Release Readiness Reviews, Milestone Reviews, and Business Go/No-Go sign-offs aligned with banking ITIL standards.',
      'Coordinates test data strategies, non-production environments, system/infrastructure performance tests, and Configuration Management System (CMS) policies.',
      'Facilitates Scrum ceremonies, shields teams from external interference, tracks blockers to closure, and embeds quality controls across sprint planning, estimation, and reviews.',
    ],
  },
  {
    id: 'sify',
    company: 'Sify Technology Solutions',
    role: 'Process Manager – Change Management',
    period: 'Mar 2021 – Dec 2021',
    location: 'Chennai',
    summary:
      'Chaired enterprise CAB/ECAB governance forums, managed consolidated change calendars, and owned SLA & executive IT Management reporting.',
    bullets: [
      'Chaired Change Advisory Board (CAB) and Emergency CAB (ECAB) reviews—preparing agendas, circulating change requests, and resolving scheduling conflicts.',
      'Negotiated planned end-user downtime, reviewed post-implementation outcomes, and enforced SLA-compliant Change Request closures.',
      'Owned Change Management Dashboards, KPI tracking, and service delivery reports for IT Management.',
    ],
  },
  {
    id: 'hcl',
    company: 'HCL Technologies',
    role: 'Change Manager – US Client',
    period: 'Nov 2018 – Mar 2021',
    location: 'Chennai',
    summary:
      'Directed internal CAB approvals, Doer-Checker compliance tracking, and SEV-1 post-implementation reviews for a US enterprise client.',
    award:
      'Client Award: Recognized by the client for analyzing and reducing emergency changes and building CAB workflows for application support teams.',
    bullets: [
      'Chaired internal CABs to assess, validate, and approve changes ahead of client-CAB governance.',
      'Tracked Doer-Checker compliance policies, schedule slippages, scoping/estimation, and post-implementation reviews for high-risk changes and SEV-1 incidents.',
      'Partnered with project teams across incident, problem, and change tickets within preset budgets and delivery timelines.',
    ],
  },
  {
    id: 'ibm',
    company: 'IBM Global Services',
    role: 'Critical Incident & Change Manager – US Client',
    period: 'May 2015 – Nov 2018',
    location: 'Chennai',
    summary:
      'Commanded Technical Restoration Bridges for critical SEV-1 outages and governed 2nd-level ITSM Incident, Problem, and Change workflows.',
    bullets: [
      'Assessed critical business impact to initiate Technical Restoration Bridges, escalation paging, cross-team resolution, and executive stakeholder updates.',
      'Drove Problem Management, Root Cause Analysis (RCA), and post-incident reviews prioritized by business impact.',
      'Executed Incident and Service Request process reviews to improve response times, KPI adherence, and 2nd-level ITSM support.',
    ],
  },
  {
    id: 'tcs',
    company: 'Tata Consultancy Services (TCS)',
    role: 'Senior Process Associate',
    period: 'Jul 2009 – Mar 2015',
    location: 'Chennai',
    summary:
      'Led and trained a 14-FTE operations team, authored transition SOPs, built client-approved workflow tools, and delivered weekly MIS/TAT decks.',
    bullets: [
      'Led, scheduled, and mentored a 14-FTE team to consistently meet SLAs, internal quality checks, and Knowledge Management targets.',
      'Authored transition SOPs adopted as baseline process documentation and maintained a structured operational knowledge repository.',
      'Built client-signed-off workflow automation tools during transition and delivered weekly MIS quality & Turnaround Time (TAT) decks to onshore clients.',
    ],
  },
];

export const CERTIFICATIONS = [
  {
    title: 'ITIL® Intermediate — Release, Control & Validation (RCV)',
    issuer: 'IT Service Management',
    detail: 'Release & deployment, change evaluation, service validation, and request fulfilment.',
  },
  {
    title: 'ITIL® V3 Foundation in IT Service Management',
    issuer: 'IT Service Management',
    detail: 'End-to-end ITIL service lifecycle strategy, design, transition, operation, and CSI.',
  },
];

export const EDUCATION = {
  degree: 'B.Sc. in Computer Science',
  institution: 'D.R.B.C.C. Hindu College (University of Madras)',
  location: 'Chennai, India',
  year: '2007',
};
