import { useTranslation } from 'next-i18next';
import { CheckIcon } from 'components/icons';
import styles from './InfoMessage.module.scss';

interface Props {
  emailSentStatus: 'success' | 'failure' | 'verificationFailure' | null;
}

function InfoMessage({ emailSentStatus }: Props) {
  const { t } = useTranslation();

  return (
    <>
      {emailSentStatus === 'success' && (
        <div className={styles.infoSuccess}>
          <CheckIcon className={styles.icon} />
          <p>{t('contacts:form_info_success_p_1')}</p>
          <p>{t('contacts:form_info_success_p_2')}</p>
        </div>
      )}

      {emailSentStatus === 'failure' && (
        <div className={styles.infoFailure}>
          <p>{t('contacts:form_info_failure_p_1')}</p>
          <p>{t('contacts:form_info_failure_p_2')} </p>
        </div>
      )}

      {emailSentStatus === 'verificationFailure' && (
        <div className={styles.infoFailure}>
          <p>{t('contacts:form_info_failure_verification')}</p>
        </div>
      )}
    </>
  );
}

export default InfoMessage;
