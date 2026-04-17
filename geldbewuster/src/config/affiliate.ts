// AFFILIATE LINKS — vervang deze met jouw echte Awin affiliate links
// UTM parameters zijn al ingebouwd voor tracking in GA4

export const AFFILIATE = {
  degiro: {
    url: 'https://www.degiro.nl',
    utm: '?utm_source=geldbewuster&utm_medium=affiliate&utm_campaign=degiro&utm_content=',
    label: 'DEGIRO',
  },
  trading212: {
    url: 'https://www.trading212.com',
    utm: '?utm_source=geldbewuster&utm_medium=affiliate&utm_campaign=trading212&utm_content=',
    label: 'Trading 212',
  },
  bitcoin: {
    url: 'https://www.bitvavo.com',
    utm: '?utm_source=geldbewuster&utm_medium=affiliate&utm_campaign=bitvavo&utm_content=',
    label: 'Bitvavo',
  },
  zorgverzekering: {
    url: 'https://www.independer.nl/zorgverzekering',
    utm: '?utm_source=geldbewuster&utm_medium=affiliate&utm_campaign=zorgverzekering&utm_content=',
    label: 'Independer',
  },
}

// Gebruik zo:
// import { affiliateUrl } from '../config/affiliate'
// affiliateUrl('degiro', 'homepage-hero')
// → https://www.degiro.nl?utm_source=geldbewuster&utm_medium=affiliate&utm_campaign=degiro&utm_content=homepage-hero

export function affiliateUrl(partner: keyof typeof AFFILIATE, placement: string): string {
  const a = AFFILIATE[partner]
  return `${a.url}${a.utm}${placement}`
}
