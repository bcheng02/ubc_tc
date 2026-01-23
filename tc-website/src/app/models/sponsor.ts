export type SponsorTier = 'Gold' | 'Silver' | 'Bronze';

export interface Sponsor {
    id: string;
    name: string;
    logoUrl: string;
    website?: string;
    tier: SponsorTier;
    giveaway?: string;
}
