interface Profile {
    profile: {
        name: string;
        surname: string;
        age: number;
        title: string;
        specialty: string;
        interests: string[];
    },
    contact: {
      email: string;
      linkedin: string;
      instagram: string;
      twitter: string;
    },
    stack: [
      {
        name: string;
        alt: string;
        icon: string;
      }
    ],
    companies: [
      {
        company_name: string;
        website: string;
        icon: string;
        alt: string;
        started_at: string;
        ended_at: string;
      }
    ],
    contributions: [
      {
        title: string;
        link: string;
      }
    ]
}
