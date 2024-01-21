import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { Turnstile, TurnstileInstance } from '@marsidev/react-turnstile';
import { CloseIcon } from 'components/icons';
import styles from './UserVerificationModal.module.scss';

interface Props {
  setToken: (token: string | null) => void;
  setVerificationFailure: () => void;
  closeModal: () => void;
}

function UserVerificationModal({
  setToken,
  setVerificationFailure,
  closeModal,
}: Props) {
  const { t } = useTranslation();

  const [showResetButton, setShowResetButton] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const [sending, setSending] = useState<boolean>(false);

  const widgetRef = useRef<TurnstileInstance>(null);

  const { locale } = useRouter();
  const widgetLanguage = locale === 'de' ? 'de' : 'en';

  const resetWidget = () => {
    widgetRef.current?.reset();
    setCount((prev) => prev + 1);
    if (count >= 2) {
      setVerificationFailure();
      closeModal();
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.wrapper}>
        <button
          type="button"
          className={styles.closeButton}
          onClick={closeModal}
          aria-label="close modal">
          <CloseIcon className={styles.icon} />
        </button>

        {!sending ? (
          <p key={1} style={{ marginBottom: '10px' }}>
            {t('contacts:form_modal_checking')}
          </p>
        ) : (
          <p key={2} style={{ height: '15px' }}></p>
        )}

        <Turnstile
          ref={widgetRef}
          className={styles.widget}
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY as string}
          options={{
            action: 'submit-form',
            language: widgetLanguage,
            responseField: false,
          }}
          onError={() => {
            setToken(null);
            setShowResetButton(true);
          }}
          onExpire={() => {
            setToken(null);
            widgetRef.current?.reset();
          }}
          onSuccess={(token) => {
            setToken(token);
            setSending(true);
            setShowResetButton(false);
          }}
        />

        {sending && <p>{t('contacts:form_modal_sending')}</p>}

        {showResetButton && (
          <>
            <button
              type="reset"
              className={styles.resetButton}
              onClick={resetWidget}
              aria-label="reset browser verification">
              {t('contacts:form_modal_reset_button')}
            </button>
            <p>{t('contacts:form_modal_reset_info')}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default UserVerificationModal;
