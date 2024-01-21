import { ICaseDetailsItem, ICaseGalleryItem, ICaseStudy } from 'types';
import { caseStudies } from 'data/caseStudies';

export const getCases = (language?: string) => {
  let cases: ICaseStudy[];

  if (language && caseStudies[language]) {
    cases = caseStudies[language];
  } else {
    cases = caseStudies['en'];
  }

  return cases;
};

export const getCaseDetailsBySlug = (slug: string, language?: string) => {
  const cases: ICaseStudy[] = getCases(language);

  const item = cases.find((item) => item.slug === slug);

  if (!item) throw Error('Case study not found');

  const caseItem = (({
    id,
    title,
    images,
    summary,
    tech_stack,
    features,
  }): ICaseDetailsItem => ({
    id,
    title,
    images,
    summary,
    tech_stack,
    features,
  }))(item);

  return caseItem;
};

export const getCaseGalleryList = (language?: string) => {
  const cases: ICaseStudy[] = getCases(language);

  const caseGalleryList: ICaseGalleryItem[] = cases.map(
    ({ id, slug, title, thumbnail, noindex, summary }: ICaseStudy) => ({
      id,
      slug,
      title,
      thumbnail,
      noindex,
      summary,
    })
  );

  return caseGalleryList;
};
