interface Profile {
    profile: {
        name: string;
        surname: string;
        age: number;
        title: string;
        interests: string[];
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
        company_name: string,
        icon: string,
        alt: string,
        started_at: string,
        ended_at: string
      }
    ]
}
