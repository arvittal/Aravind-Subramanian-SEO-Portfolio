import { StatItem, SkillItem, CaseStudyItem, WorkItem, ToolItem, ClientItem, TestimonialItem, BlogPostItem } from './types';

export const personalInfo = {
  name: 'Aravind Subramanian',
  title: 'SEO Specialist & Digital Marketing Consultant',
  experience: '3+ Years of Experience',
  email: 'aravindsubramanian31@gmail.com',
  phone: '8056225925',
  website: 'aravindsubramanian.com',
  socials: {
    linkedin: 'https://www.linkedin.com/in/h-s-aravind-subramanian/',
    instagram: 'https://www.instagram.com/scale_with_aravind/',
  },
  taglines: [
    'Organic Growth Partner',
    'Technical SEO Expert',
    'Data-Driven SEO Strategist'
  ],
  bio: {
    main: "I'm Aravind Subramanian, an SEO Specialist & Digital Marketing Consultant with 3+ years of experience helping businesses scale their organic reach.",
    description: "I've worked across multiple high-growth industries including Travel, EdTech, Automation, and Export & Import. By building comprehensive, custom-tailored search strategies, I help brand properties rank higher on search engines, secure more valuable keywords, and drive sustainable organic traffic growth that translates directly into conversions and revenue."
  }
};

export const statsData: StatItem[] = [
  {
    id: 'traffic',
    value: 40,
    suffix: '%',
    label: 'Organic Traffic Increase',
    description: 'Achieved for a major B2B Client within just 3 months of implementing targeted search strategies.'
  },
  {
    id: 'backlinks',
    value: 50,
    suffix: '%',
    label: 'Backlink Growth Rate',
    description: 'Built a sustainable, white-hat link building campaign that boosted referral authority and link equity.'
  },
  {
    id: 'visibility',
    value: 50,
    suffix: '%',
    label: 'Search Visibility Boost',
    description: 'Delivered in-depth, actionable technical recommendations that improved overall indexation and rankings.'
  },
  {
    id: 'engagement',
    value: 2,
    prefix: '',
    suffix: 'x',
    label: 'Engagement & Lead Increase',
    description: 'Created highly researched, user-intent search strategies that attracted high-converting organic visitors.'
  }
];

export const skillsData: SkillItem[] = [
  {
    name: 'Website Audit',
    category: 'Technical',
    description: 'Comprehensive analysis of crawlability, page experience, mobile usability, and speed bottlenecks.'
  },
  {
    name: 'Keyword Research',
    category: 'Strategic',
    description: 'Uncovering high-intent transactional search terms and matching user search intent with strategic maps.'
  },
  {
    name: 'On-Page SEO',
    category: 'Strategic',
    description: 'Optimizing headings, copy structure, meta fields, internal linking structures, and image assets.'
  },
  {
    name: 'Content Gap Analysis',
    category: 'Analytical',
    description: 'Identifying key topical opportunities where competitors currently dominate to win ranking share.'
  },
  {
    name: 'Link Building',
    category: 'Strategic',
    description: 'White-hat authority acquisition, digital PR outreach, and high-quality resource-based backlink building.'
  },
  {
    name: 'AI Overview SEO',
    category: 'Analytical',
    description: 'Formatting content to rank inside Google Search Generative Experience (SGE) and LLM engines.'
  },
  {
    name: 'CMS Management',
    category: 'Technical',
    description: 'Fluent in optimizing content management platforms including WordPress, RankMath, and custom head systems.'
  },
  {
    name: 'Technical SEO',
    category: 'Technical',
    description: 'Schema markup integration, canonical audits, sitemap setup, robots.txt, and site indexing solutions.'
  }
];

export const caseStudiesData: CaseStudyItem[] = [
  {
    id: 'location-seo',
    title: 'Location-Based SEO Strategy',
    clientType: 'Multi-Location Service Client',
    duration: '2 Months',
    challenge: 'A business struggling to capture local search market share across multiple regions with low local listing visibility and zero localized landing page presence.',
    strategy: [
      'Engineered structured, highly targeted, location-focused service landing pages with localized keyword targeting.',
      'Configured local schema markup (LocalBusiness) on each page for immediate engine validation.',
      'Optimized meta codes, H1-H3 structures, and regional contact details (NAP consistency).',
      'Submitted sitemaps manually; indexed pages successfully within 3 days.'
    ],
    result: 'Organic traffic and customer leads doubled within a matter of weeks, proving the powerful impact of a structured local search architecture.',
    longResult: 'This scalable template was then rolled out across secondary locations, maintaining identical content parameters which led to a 120% increase in total regional phone inquiries and localized form fills.',
    gscProof: {
      clicks: '896',
      impressions: '113k',
      ctr: '0.8%',
      position: '47.1',
      svgPath: '/results/gsc-performance-2.svg',
      caption: 'Verified Google Search Console export: 113,000+ organic impressions and 896 high-intent clicks generated from regional expansion.'
    }
  },
  {
    id: 'local-pack',
    title: 'Local SEO & Google Maps Pack Optimization',
    clientType: 'Regional Service Brand',
    duration: '3 Months',
    challenge: 'Brand was buried on page 3 of local results for key geographical keywords, resulting in zero inbound organic calls or maps actions.',
    strategy: [
      'Executed a comprehensive audit of Google Business Profile (GBP) listing fields, categories, and attributes.',
      'Re-engineered listing descriptions, photo geo-tagging, and implemented review generation strategies.',
      'Established high-authority local citations with precise Name, Address, and Phone (NAP) uniformity across directories.',
      'Interlinked the local website and GBP to build reciprocal authority.'
    ],
    result: 'Successfully pushed the client into the coveted Google Maps "Local 3-Pack" for key industry searches.',
    longResult: 'Helped the client acquire high-intent local customers directly through Maps, resulting in a 45% increase in store direction requests and a 60% surge in organic phone calls.',
    gscProof: {
      clicks: '210',
      impressions: '11.4k',
      ctr: '1.8%',
      position: '25.7',
      svgPath: '/results/gsc-performance-1.svg',
      caption: 'Verified Google Search Console export: 11,400+ targeted impressions with 1.8% CTR and top average position of 25.7.'
    }
  }
];

export const workGalleryData: WorkItem[] = [
  {
    id: 'work-1',
    title: 'SEO Audit & Technical Blueprint',
    category: 'Technical SEO Audit',
    description: 'A 150-point comprehensive site health analysis covering semantic markup, crawl efficiency, and Core Web Vitals optimizations.',
    colorFrom: 'from-emerald-500/20',
    colorTo: 'to-teal-500/10'
  },
  {
    id: 'work-2',
    title: 'EdTech Organic Content Matrix',
    category: 'Content Gap & Strategy',
    description: 'Keyword mapping and content creation roadmap that drove a B2C educational platform into top-3 rankings for high-intent search queries.',
    colorFrom: 'from-cyan-500/20',
    colorTo: 'to-blue-500/10'
  },
  {
    id: 'work-3',
    title: 'Travel Agency Local Conquest',
    category: 'Location-Based SEO',
    description: 'Structured geo-focused landing page templates and schema injection that doubled local travel booking inquiries inside 45 days.',
    colorFrom: 'from-green-500/20',
    colorTo: 'to-emerald-500/10'
  },
  {
    id: 'work-4',
    title: 'Automation Enterprise Keyword Dominance',
    category: 'Commercial SEO Campaign',
    description: 'Competitive content acquisition strategies targeting enterprise automation keywords, boosting organic index positions by 35 ranks.',
    colorFrom: 'from-teal-500/20',
    colorTo: 'to-emerald-500/10'
  },
  {
    id: 'work-5',
    title: 'Global Export Link Acquisition Campaign',
    category: 'Link Building / Digital PR',
    description: 'White-hat high-DA citation acquisition and resource-link outreach driving domain authority from DA 18 to DA 35.',
    colorFrom: 'from-blue-500/20',
    colorTo: 'to-cyan-500/10'
  },
  {
    id: 'work-6',
    title: 'AI Overview (SGE) Optimization Model',
    category: 'Next-Gen SEO Model',
    description: 'Pre-indexing content structural optimization for secure placement inside AI-powered search snapshot cards and summaries.',
    colorFrom: 'from-teal-500/20',
    colorTo: 'to-blue-500/10'
  }
];

export const toolsData: ToolItem[] = [
  { name: 'Google Search Console', category: 'Analytics & Tracking' },
  { name: 'Ahrefs', category: 'Competitive Intelligence & Links' },
  { name: 'SEMrush', category: 'Keyword & Content Audit' },
  { name: 'Screaming Frog', category: 'Crawl & Technical Auditing' },
  { name: 'WordPress', category: 'CMS Management' },
  { name: 'Growth Marketing Tools', category: 'Conversion & Growth' },
  { name: 'Google Analytics', category: 'User Traffic Analytics' },
  { name: 'ChatGPT', category: 'AI Overview Optimization' },
  { name: 'N8N Automation', category: 'SEO Workflows & Scripting' },
  { name: 'Chatbot Integrations', category: 'User Engagement & Conversions' }
];

export const clientsData: ClientItem[] = [
  {
    id: 'pickyourtrail',
    name: 'PickYourTrail',
    logo: '/logos/pickyourtrail.svg',
    alt: 'PickYourTrail Logo'
  },
  {
    id: 'many2go',
    name: 'Many2Go Family Holidays',
    logo: '/logos/many2go.svg',
    alt: 'Many2Go Family Holidays Logo'
  },
  {
    id: 'laptune',
    name: 'Laptune Info Tech',
    logo: '/logos/laptune.svg',
    alt: 'Laptune Info Tech Logo'
  },
  {
    id: 'kings-next',
    name: 'Kings Next Institute',
    logo: '/logos/kings-next.svg',
    alt: 'Kings Next Institute Logo'
  },
  {
    id: 'tamayo-medical',
    name: 'Tamayo Medical University',
    logo: '/logos/tamayo-medical.svg',
    alt: 'Tamayo Medical University Logo'
  },
  {
    id: 'av-sumanth',
    name: 'AV Sumanth Digital',
    logo: '/logos/av-sumanth.svg',
    alt: 'AV Sumanth Digital Logo'
  },
  {
    id: 'eeat-minds',
    name: 'EEAT Minds',
    logo: '/logos/eeat-minds.svg',
    alt: 'EEAT Minds Logo'
  },
  {
    id: 'hitech-energy',
    name: 'Hi Tech Energy',
    logo: '/logos/hitech-energy.svg',
    alt: 'Hi Tech Energy Logo'
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'prasanth',
    name: 'Prasanth',
    role: 'Client & Business Owner',
    service: 'Website Design & Development',
    content: 'Aravind has done a great website for me and happy with the customer I am getting',
    rating: 5
  },
  {
    id: 'prakash',
    name: 'Prakash',
    role: 'Client & Business Owner',
    service: 'SEO Strategy & Customer Acquisition',
    content: 'We had a website , we was not getting customers for our business and after plan given by aravind for seo , we got good customers',
    rating: 5
  }
];

export const blogPortfolioData: BlogPostItem[] = [
  {
    id: 'hitech-gas-pipeline-maintenance',
    title: 'Gas Pipeline Maintenance Guide: Best Practices, Safety Protocols & Inspection Checklists',
    url: 'https://www.hitechenergy.org/blog/gas-pipeline-maintenance-guide',
    domain: 'hitechenergy.org',
    client: 'Hi-Tech Energy',
    category: 'Industrial & Energy B2B',
    targetKeyword: 'Gas Pipeline Maintenance Guide',
    strategyHighlight: 'Long-form technical authority guide built with safety inspection checklists and preventive protocols to capture B2B facility manager intent.',
    readTime: '7 min read',
    featured: true
  },
  {
    id: 'hitech-domestic-lpg-pipeline-vs-cylinder',
    title: 'Domestic LPG Pipeline vs Cylinder: Safety, Cost & Efficiency Comparison',
    url: 'https://www.hitechenergy.org/blog/domestic-lpg-pipeline-vs-cylinder',
    domain: 'hitechenergy.org',
    client: 'Hi-Tech Energy',
    category: 'Industrial & Energy B2B',
    targetKeyword: 'Domestic LPG Pipeline vs Cylinder',
    strategyHighlight: 'Transactional comparison architecture addressing homeowner and residential community safety, capital cost, and monthly savings.',
    readTime: '6 min read'
  },
  {
    id: 'hitech-lpg-manifold-vs-gas-header',
    title: 'LPG Manifold vs Gas Header: Industrial Specifications & System Differences',
    url: 'https://www.hitechenergy.org/blog/lpg-manifold-vs-gas-header',
    domain: 'hitechenergy.org',
    client: 'Hi-Tech Energy',
    category: 'Industrial & Energy B2B',
    targetKeyword: 'LPG Manifold vs Gas Header',
    strategyHighlight: 'Engineering specification breakdown optimized for high-value industrial gas distribution inquiries and commercial piping queries.',
    readTime: '5 min read'
  },
  {
    id: 'many2go-singapore-winter',
    title: 'Visiting Singapore in Winter: Weather, Festivals, Packing & Itinerary Guide',
    url: 'https://many2go.in/blog/singapore-in-winter',
    domain: 'many2go.in',
    client: 'Many2Go Holidays',
    category: 'Travel & Tourism',
    targetKeyword: 'Singapore in Winter',
    strategyHighlight: 'Seasonal search intent capture targeting holidaymakers traveling between November and February with custom holiday itinerary funnels.',
    readTime: '8 min read',
    featured: true
  },
  {
    id: 'many2go-singapore-summer',
    title: 'Singapore in Summer: Best Places to Visit, Events & Indoor Attractions',
    url: 'https://many2go.in/blog/singapore-in-summer',
    domain: 'many2go.in',
    client: 'Many2Go Holidays',
    category: 'Travel & Tourism',
    targetKeyword: 'Singapore in Summer',
    strategyHighlight: 'Topical cluster strategy targeting peak summer family vacation inquiries with air-conditioned attractions and Great Singapore Sale tips.',
    readTime: '7 min read'
  },
  {
    id: 'many2go-singapore-spring',
    title: 'Exploring Singapore in Spring: Climate, Flower Dome Blossoms & City Highlights',
    url: 'https://many2go.in/blog/singapore-in-spring',
    domain: 'many2go.in',
    client: 'Many2Go Holidays',
    category: 'Travel & Tourism',
    targetKeyword: 'Singapore in Spring',
    strategyHighlight: 'Intent optimization capturing shoulder-season budget travelers and floral exhibition tourists at Gardens by the Bay.',
    readTime: '6 min read'
  },
  {
    id: 'many2go-thailand-summer',
    title: 'Thailand in Summer: Islands, Monsoon Secrets, Budget Travel & Night Markets',
    url: 'https://many2go.in/blog/thailand-in-summer',
    domain: 'many2go.in',
    client: 'Many2Go Holidays',
    category: 'Travel & Tourism',
    targetKeyword: 'Thailand in Summer',
    strategyHighlight: 'Off-season search volume capture showing favorable Gulf islands (Koh Samui) during monsoon months to maintain tour bookings.',
    readTime: '8 min read'
  },
  {
    id: 'many2go-thailand-spring',
    title: 'Thailand in Spring: Songkran Festival, Beaches & Best Sightseeing Spots',
    url: 'https://many2go.in/blog/thailand-in-spring',
    domain: 'many2go.in',
    client: 'Many2Go Holidays',
    category: 'Travel & Tourism',
    targetKeyword: 'Thailand in Spring',
    strategyHighlight: 'High-surge event targeting aligned with Songkran water festival and April holiday travel spikes across Bangkok and Phuket.',
    readTime: '7 min read'
  },
  {
    id: 'many2go-thailand-autumn',
    title: 'Thailand in Autumn: Lantern Festivals, Pleasant Weather & Island Hopping',
    url: 'https://many2go.in/blog/thailand-in-autumn',
    domain: 'many2go.in',
    client: 'Many2Go Holidays',
    category: 'Travel & Tourism',
    targetKeyword: 'Thailand in Autumn',
    strategyHighlight: 'Capturing high search interest for Yi Peng and Loy Krathong lantern festivals in Chiang Mai alongside opening beach seasons.',
    readTime: '7 min read'
  },
  {
    id: 'aravind-digital-marketing-bangalore',
    title: 'Digital Marketing Consultant in Bangalore: Complete Guide to Organic Growth & ROI',
    url: 'https://aravindsubramanian.com/blog/digital-marketing-freelancer-in-bangalore/',
    domain: 'aravindsubramanian.com',
    client: 'Aravind Subramanian',
    category: 'SEO & Strategy',
    targetKeyword: 'Digital Marketing Consultant in Bangalore',
    strategyHighlight: 'Competitive pillar guide dominating high-value commercial tech queries in India\'s Silicon Valley to drive direct high-ticket consulting partnerships.',
    readTime: '10 min read',
    featured: true
  }
];
