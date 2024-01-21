import { useTranslation } from 'next-i18next';

export const useElementProps = (type: string) => {
  const { t } = useTranslation();

  const inputFieldsProps = {
    company: {
      label:
        type === 'contact'
          ? t('contacts:form_company')
          : `${t('contacts:form_cv')} *`,
      type: type === 'contact' ? 'text' : 'file',
    },

    message: {
      label:
        type === 'contact'
          ? `${t('contacts:form_message')} *`
          : t('contacts:form_cover'),
      placeholder:
        type === 'contact'
          ? t('contacts:form_message_placeholder')
          : t('contacts:form_cover_placeholder'),
    },
  };

  return {
    inputFieldsProps,
  };
};
