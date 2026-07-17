export type ResearchInterest = 'family-ai' | 'social-computing';

export interface Publication {
  id: string;
  title: string;
  authors?: string;
  venue: string;
  year: string;
  categories: string[];
  researchInterests: ResearchInterest[];
  tags?: string[];
  type: 'conference' | 'journal' | 'patent' | 'prep';
  link?: string;
  status?: string;
}

export const PUBLICATIONS: Publication[] = [
  // 2026
  {
    id: 'workshop2026',
    title: 'Imagining the Media Roles of Conversational AI: A Computational Grounded Theory Study with Multi-Agent Frameworks',
    authors: 'Tang, X. Y.',
    venue: '2nd International Research Workshop on Human-Machine Communication, Psychology, and Social Change. Shenzhen, China',
    year: '2026',
    categories: ['Human-AI Communication'],
    researchInterests: ['family-ai'],
    tags: ['Pilot Study', 'Human-AI Communication'],
    type: 'conference',
    status: 'Third Prize, Outstanding Paper Award · manuscript in preparation for CHI 2027'
  },
  {
    id: 'journal2026',
    title: 'Paradigmatic Integration, Consolidation, and Differentiation: Information Infrastructure and the Paradigm Shifts of Journalism and Communication Studies',
    authors: 'Tang, X. Y., & Zhang, L.',
    venue: 'Journalism & Communication Studies',
    year: '2026',
    categories: ['AI-Augmented Social Science Methodology'],
    researchInterests: ['social-computing'],
    tags: ['Media Infrastructure'],
    type: 'journal',
    status: 'Under review, 3rd round, CSSCI TOP'
  },
  // 2025
  {
    id: 'ica2025',
    title: 'Aligning AI With What: Role Coordination through Perception, Construction, and Adaptation during Human-AI Interactions',
    authors: 'Tang, X. Y., Lu, J. L., Zhang, L., Wu, Y., & Xu, X. K.',
    venue: 'Human-Machine Communication Division, 2025 ICA Annual Conference. Denver, USA',
    year: '2025',
    categories: ['Human-AI Communication'],
    researchInterests: ['family-ai'],
    tags: ['Pilot Study', 'Human-AI Communication'],
    type: 'conference'
  },
  {
    id: 'sci2025',
    title: 'Dynamics of information propagation and intervention in the multiplatform coupled networks',
    authors: 'Yin, F. L., Wang, J. X., Tang, X. Y., Jiang, X. Y., Wu, Y. W., & Wu, J. H.',
    venue: 'Expert Systems with Applications, 277, 127262',
    year: '2025',
    categories: ['Public Opinion'],
    researchInterests: ['social-computing'],
    tags: ['Public Opinion'],
    type: 'journal',
    status: 'SCI TOP'
  },
  // 2024
  {
    id: 'sci2024',
    title: 'Coupled dynamics of information propagation and emotion influence: Emerging emotion clusters for public health emergency messages on the Chinese Sina Microblog',
    authors: 'Yin, F. L., Tang, X. Y., Liang, T. Y., Kuang, Q. H., Wang, J. X., Ma, R., ... & Wu, J. H.',
    venue: 'Physica A: Statistical Mechanics and its Applications, 639, 129630',
    year: '2024',
    categories: ['Public Opinion'],
    researchInterests: ['social-computing'],
    tags: ['Public Opinion'],
    type: 'journal',
    status: 'SCI Q2'
  },
  // 2023
  {
    id: 'sci2023',
    title: 'Hot-topics cross-propagation and opinion-transfer dynamics in the Chinese Sina-microblog social media: A modeling study',
    authors: 'Yin, F. L., She, Y. W., Pan, Y. Y., Tang, X. Y., Hou, H. T., & Wu, J. H.',
    venue: 'Journal of Theoretical Biology, 566, 111480',
    year: '2023',
    categories: ['Public Opinion'],
    researchInterests: ['social-computing'],
    tags: ['Public Opinion'],
    type: 'journal',
    status: 'SCI Q3'
  },
  // 2022
  {
    id: 'conf2022',
    title: 'Combined influence of commenting and forwarding on information propagation on the Chinese Sina Microblog',
    authors: 'Wang, J. X., Liang, T. Y., Kuang, Q. H., Tang, X. Y., Ma, R., & Yin, F. L.',
    venue: '2022 7th International Conference on Cloud Computing and Big Data Analytics. Chengdu, China',
    year: '2022',
    categories: ['Public Opinion'],
    researchInterests: ['social-computing'],
    tags: ['Public Opinion'],
    type: 'conference'
  },
  {
    id: 'sci2022b',
    title: 'External intervention model with direct and indirect propagation behaviors on social media platforms',
    authors: 'Yin, F. L., Tang, X. Y., Liang, T. Y., Huang, Y. J., & Wu, J. H.',
    venue: 'Mathematical Biosciences and Engineering, 19(11), 11380–11398',
    year: '2022',
    categories: ['Public Opinion'],
    researchInterests: ['social-computing'],
    tags: ['Public Opinion'],
    type: 'journal',
    status: 'SCI Q2'
  },
  {
    id: 'sci2022c',
    title: 'An information propagation network dynamic considering multi-platform influences',
    authors: 'Yin, F. L., Pan, Y. Y., Tang, X. Y., Wu, C., Jin, Z., & Wu, J. H.',
    venue: 'Applied Mathematics Letters, 133, 108231',
    year: '2022',
    categories: ['Public Opinion'],
    researchInterests: ['social-computing'],
    tags: ['Public Opinion'],
    type: 'journal',
    status: 'SCI TOP'
  },
  {
    id: 'sci2022d',
    title: 'Topic—a cluster of relevant messages—propagation dynamics: A modeling study of the impact of user repeated forwarding behaviors',
    authors: 'Yin, F. L., Wu, Z. L., Shao, X. Y., Tang, X. Y., Liang, T. Y., & Wu, J. H.',
    venue: 'Applied Mathematics Letters, 127, 107819',
    year: '2022',
    categories: ['Public Opinion'],
    researchInterests: ['social-computing'],
    tags: ['Public Opinion'],
    type: 'journal',
    status: 'SCI TOP'
  },
  {
    id: 'patent1',
    title: 'Information propagation analysis method and system based on social media pseudo-environment modeling',
    venue: 'National Invention Patent No. ZL202210645833.8',
    year: '2022',
    categories: ['Public Opinion'],
    researchInterests: ['social-computing'],
    tags: ['Patent', 'Public Opinion'],
    type: 'patent',
    status: 'Granted 2022'
  },
  {
    id: 'patent2',
    title: 'Hybrid information propagation dynamics model and its information propagation analysis method',
    venue: 'National Invention Patent No. ZL202210218560.9',
    year: '2022',
    categories: ['Public Opinion'],
    researchInterests: ['social-computing'],
    tags: ['Patent', 'Public Opinion'],
    type: 'patent',
    status: 'Granted 2022'
  },
  // 2021
  {
    id: 'patent3',
    title: 'Public topic propagation evaluation method and system based on modeling',
    venue: 'National Invention Patent No. ZL202110812031.7',
    year: '2021',
    categories: ['Public Opinion'],
    researchInterests: ['social-computing'],
    tags: ['Patent', 'Public Opinion'],
    type: 'patent',
    status: 'Granted 2021'
  }
];
