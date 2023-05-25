import dynamic from 'next/dynamic';

const map = dynamic(() => import('./map'), {
  ssr: false,
});

export default map;
