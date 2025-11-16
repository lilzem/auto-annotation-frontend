export type EducationalCredential = {
  "@type": "EducationalOccupationalCredential";
  name: "Codefinity Certificate";
  credentialCategory: "Certificate";
  offers: Offer[];
};

type Reviews =
  | { ratingCount: number }
  | { reviewCount: number }
  | { reviewCount: number; ratingCount: number };

export type AggregateRating = {
  "@type": "AggregateRating";
  ratingValue: number | string;
} & Reviews;

type Person = {
  "@type": "Person";
  name: string;
  description?: string;
  image?: string[] | string;
};

export type CourseInstance = {
  "@type": "CourseInstance";
  courseMode: "Online";
  courseWorkload: string;
  instructor: Person[];
};

export type Offer = {
  "@type": "Offer";
  category: "Subscription";
};

export type Organization = {
  "@type": "Organization";
  name: string;
  url: string;
};

export type Syllabus = {
  "@type": "Syllabus";
  name: string;
  description: string;
  timeRequired?: string;
};

export type CourseStructuredData = {
  "@context": "https://schema.org/";
  "@id": string;
  "@type": "Course";
  name: string;
  url: string;
  description: string;
  about?: string[];
  teaches?: string;
  aggregateRating?: AggregateRating;
  availableLanguage?: string[];
  datePublished?: string;
  educationalLevel?: string;
  image?: string[] | string;
  inLanguage: string;
  provider: Organization;
  offers: Offer[];
  hasCourseInstance: CourseInstance[];
  educationalCredentialAwarded?: EducationalCredential[];
  publisher?: Organization;
  totalHistoricalEnrollment?: number;
  syllabusSections: Syllabus[];
};
