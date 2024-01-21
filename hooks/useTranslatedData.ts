import { useRouter } from 'next/router';

function UseTranslatedData(contentEN: any[], contentDE: any[]) {
  const { locale } = useRouter();
  return locale === 'de' ? contentDE : contentEN;
}

export default UseTranslatedData;
