// Function Used to set images of banks in the data table of
export default function getImage(source: string) {
  switch (source) {
    case 'TD':
      return './td.png';
    case 'BMO':
      return './bmo.png';
    case 'Citadel Mortgages':
      return './Citadel Mortgages.png';
    case 'motusbank':
      return './motusbank.png';
    case 'RBC':
      return './rbc.png';
    case 'Tangerine':
      return './tangerine.png';
    case 'Simplii Financial':
      return './simplii.png';
    case 'Scotiabank':
      return './scotiabank.png';
    case 'National':
      return './national.svg';
    case 'Peoples Bank':
      return 'peoples-bank.png';
    case 'CMLS':
      return 'cmls.png';
    case 'Laurentian':
      return 'laurentian.svg';
    case 'FN':
      return 'first-national.svg';
    case 'CIBC':
      return './cibc.svg';
    case 'Manulife':
      return './manulife.svg';
    case 'Investors Group':
      return 'investorsgroup.png';
    case 'Alterna Savings':
      return 'alterna-savings.png';
    case 'Desjardins':
      return './desjardins.png';
    case 'Equitable':
      return './Equitable.svg'
    case 'North East Mortgages':
      return 'North-East.png'
    case 'Meridian':
      return 'Meridian_Logo.svg'
    case 'HSBC':
      return 'hsbc.svg'
    case 'The Mortgage Centre':
      return './The Mortgage Centre.png'
    case 'Coast Capital':
      return './Coast Capital.png'
    case 'MtgAlliance':
      return './Mortgage Alliance.png'
    case 'Canada Life':
      return './Canada Life.png'
    case 'Dominion Lending':
      return './Dominion Lending.png'
    case 'Canadian Western':
      return './Canadian Western.png'
    case 'DUCA':
      return './DUCA.png'
    default:
      return './td.png';
  }
}
