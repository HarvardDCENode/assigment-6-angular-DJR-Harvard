export interface Company {
    _id: string;
    name: string;
    billingStreet: string;
    billingCity: string;
    billingState: string;
    billingZip: string;
    billingCountry: string;
    website: string;
    phoneNumber: string;
    industry: string;
    persons: Person[];
    __v: number;
}

export interface Person {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    company: string;
    __v: number;
}
