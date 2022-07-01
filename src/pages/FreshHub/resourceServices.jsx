import housing from '../../images/FreshHub/emergencyHousing.png';
import mealSwipes from '../../images/FreshHub/mealSwipes.png';
import grant from '../../images/FreshHub/grant.png';

const resourceServices = [
  {
    key: 'housing',
    title: 'Basic Needs Sponsored Housing',
    src: housing,
    alt: 'Housing picture',
    description: `FRESH provides up to 30-days of temporary housing with a meal plan via on-campus housing to students who are currently facing homelessness per the McKinney-Vento definition.`,
  },
  {
    key: 'application',
    title: 'Emergency Meal Swipes',
    src: mealSwipes,
    alt: 'Meal swipe picture',
    description: `Emergency Meal Swipes help students who are experiencing food insecurity and/or a student-related emergency, access healthy and well-balanced meals offered at UCI Dining Commons.`,
  },
  {
    key: 'consultations',
    title: 'Economic Crisis Response Grant',
    src: grant,
    alt: 'Grant picture',
    description: `A case-specific, university intervention to be utilized to address a student's financial crisis. A student under consideration for the Economic Crisis Response (ECR) grant must meet all eligibilities.`,
  },
];

export default resourceServices;
