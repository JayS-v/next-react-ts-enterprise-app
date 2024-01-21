import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'next-i18next';
import { IContactData } from 'types/IContactData';
import { Container, HorizontalDivider } from 'components';
import { CookieIcon } from 'components/icons';
import TextInputField from './TextInputField/TextInputField';
import UserVerificationModal from './UserVerificationModal/UserVerificationModal';
import InfoMessage from './InfoMessage/InfoMessage';
import { useValidationSchema, useElementProps, useFormState } from '.';
import styles from './ContactForm.module.scss';

interface Props {
  type?: 'contact' | 'apply';
}

const ContactForm: React.FC<Props> = ({ type = 'contact' }) => {
  const { t } = useTranslation();
  const { validationSchema } = useValidationSchema(type);
  const { inputFieldsProps } = useElementProps(type);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IContactData>({
    resolver: yupResolver(validationSchema),
  });
  const {
    modalOpen,
    updateToken,
    setVerificationFailure,
    closeModal,
    formDisabled,
    formRef,
    onSubmit,
    infoRef,
    emailSentStatus,
  } = useFormState(reset);

  useEffect(() => {
    reset();
  }, []);

  return (
    <>
      {modalOpen && (
        <UserVerificationModal
          setToken={updateToken}
          setVerificationFailure={setVerificationFailure}
          closeModal={closeModal}
        />
      )}
      <section className={styles.section}>
        <Container>
          <div className={styles.wrapper}>
            <h2 className={styles.title}>{t('contacts:form_title')}</h2>

            {formDisabled && (
              <p className={styles.paragraph}>
                <CookieIcon className={styles.icon} />
                {t('contacts:form_cookie_1')}
                <span className={styles.linkWrapper}>
                  <a className="cky-banner-element">
                    {t('contacts:form_cookie_link')}
                  </a>
                </span>
                {t('contacts:form_cookie_2')}
              </p>
            )}

            <form
              ref={formRef}
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              autoComplete="off"
              className={formDisabled ? styles.formDisabled : undefined}>
              <fieldset disabled={formDisabled}>
                <div className={styles.row}>
                  <TextInputField
                    name="name"
                    label={`${t('contacts:form_name')} *`}
                    register={register}
                    type="text"
                    error={errors.name}
                  />
                  <TextInputField
                    name="email"
                    label={`${t('contacts:form_email')} *`}
                    register={register}
                    type="email"
                    error={errors.email}
                  />
                </div>

                <div className={styles.row}>
                  <TextInputField
                    name="company"
                    label={inputFieldsProps.company.label}
                    error={errors.company}
                    register={register}
                    type={inputFieldsProps.company.type}
                  />

                  <TextInputField
                    name="phone"
                    label={t('contacts:form_phone')}
                    register={register}
                    type="tel"
                  />
                </div>

                <TextInputField
                  name="message"
                  label={inputFieldsProps.message.label}
                  register={register}
                  error={errors.message}
                  textarea
                  rows={4}
                  placeholder={inputFieldsProps.message.placeholder}
                />

                <button type="submit">{t('contacts:form_button')}</button>
              </fieldset>
            </form>

            <div ref={infoRef}>
              <InfoMessage emailSentStatus={emailSentStatus} />
            </div>
          </div>

          <HorizontalDivider className={styles.divider} />
        </Container>
      </section>
    </>
  );
};

export default ContactForm;
