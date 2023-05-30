import dynamic from 'next/dynamic';

const position = dynamic(() => import('./position'), {
  ssr: false,
});

export default position;
