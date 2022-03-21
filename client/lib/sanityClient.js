import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'suioxxl7',
    dataset: 'production',
    apiVersion: 'v1',
    token:
      'skW2DGNWg2dkxxfFn7K7wcIuQ3VH190JMUxNKXCgziX0QqfJ2QVYuwhNRcYmrOdc5gv6F2ohsUeqddhbXnk7Ucf6hlmtKyWDngEvzFhzG5kcPMkcUvReKne7HeIYB7OGQpmUBuy5eddSxqFDSf70yPPNNg3yFIWtBYQ2Bde3MPfnPCuXYCeV',
    useCdn: false,
  })