import step1 from './assets/step1.svg';
import step2 from './assets/step2.svg';
import step3 from './assets/step3.svg';

let journeys = [
  {
    id: 'Step 1',
    title: 'Create an account',
    description:
      'Register now to gain access to world-class foreign exchange solutions. You only need your email address',
    backgroundColor: '#011B6D1A',
    headingColor: '#011B6D',
    icon: step1,
  },
  {
    id: 'Step 2',
    title: 'Enter recipient details ',
    description:
      'Add the receiver bank account number and payment information details',
    backgroundColor: '#7951AF1A',
    headingColor: '#7951AF',
    icon: step2,
  },
  {
    id: 'Step 3',
    title: 'Confirm transaction and send',
    description:
      'Check the selected currencies and rates are correct, send your money.',
    backgroundColor: '#023FFD1A',
    headingColor: '#023FFD',
    icon: step3,
  },
];

export default journeys;
