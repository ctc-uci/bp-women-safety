import pantry from '../../images/FreshHub/pantry.svg';
import chat from '../../images/FreshHub/chat.svg';
import application from '../../images/FreshHub/application.svg';

const resources = [
  {
    key: 'pantry',
    title: 'UCI Food Pantry',
    src: pantry,
    alt: 'Pantry icon',
    description: `The UCI Food Pantry housed at FRESH provides emergency food and toiletries to UCI
    students experiencing basic needs insecurities. Students can access once a week using
    Student ID card at the check-in station.`,
  },
  {
    key: 'application',
    title: 'CalFresh Application Assistance',
    src: application,
    alt: 'Application icon',
    description: `CalFresh is a federal nutrition assistance program that helps people purchase healthy
    foods at most grocery stores and farmers markets. Students can receive up to $250 per
    month. FRESH offers 1-1 CalFresh application assistance appointments via Zoom.`,
  },
  {
    key: 'consultations',
    title: 'Campus Social Worker Consultations',
    src: chat,
    alt: 'Chat icon',
    description: `Confidential in-person or Zoom appointments with our on-campus clinical social worker
    to provide support and guidance to students experiencing financial stress and/or
    food/housing insecurity. All students are eligible.`,
  },
];

export default resources;
