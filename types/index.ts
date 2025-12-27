export interface ObituaryFormData {
  // Personal Information
  firstName: string;
  middleName?: string;
  lastName: string;
  maidenName?: string;
  nickname?: string;
  
  // Dates
  birthDate: string;
  deathDate: string;
  birthPlace?: string;
  deathPlace?: string;
  
  // Family Information
  parents?: string;
  spouse?: string;
  children?: string;
  siblings?: string;
  grandchildren?: string;
  
  // Life Details
  education?: string;
  career?: string;
  military?: string;
  hobbies?: string;
  achievements?: string;
  organizations?: string;
  
  // Service Information
  serviceDate?: string;
  serviceLocation?: string;
  serviceDetails?: string;
  
  // Additional
  specialMessage?: string;
  tone?: 'formal' | 'casual' | 'celebratory' | 'spiritual';
}

export interface GeneratedObituary {
  text: string;
  generatedAt: Date;
}
