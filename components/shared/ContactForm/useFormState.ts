import { useEffect, useRef, useState } from 'react';
import { sendContactData } from 'lib/apiRequests';
import { IContactData } from 'types/IContactData';
import { useScrollLock } from 'hooks';

export const useFormState = (reset: () => void) => {
  const { lockScroll, unlockScroll } = useScrollLock();

  const [data, setData] = useState<IContactData | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [emailSentStatus, setEmailSentStatus] = useState<
    'success' | 'failure' | 'verificationFailure' | null
  >(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [formDisabled, setFormDisabled] = useState<boolean>(false);

  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const updateToken = (token: string | null) => {
    setToken(token);
  };

  const closeModal = () => {
    unlockScroll();
    setModalOpen(false);
  };

  const setVerificationFailure = () => {
    setEmailSentStatus('verificationFailure');
    infoRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest',
    });
  };

  const onSubmit = async (formData: IContactData) => {
    setEmailSentStatus(null);
    setData(formData);
    lockScroll();
    setModalOpen(true);
  };

  useEffect(() => {
    if (token && data) {
      const sendMail = async () => {
        try {
          await sendContactData({ ...data, token });
          setEmailSentStatus('success');
          reset();
        } catch (err) {
          console.log(err);
          setEmailSentStatus('failure');
        } finally {
          unlockScroll();
          setModalOpen(false);
          setToken(null);
          infoRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'nearest',
          });
        }
      };
      sendMail();
    }
  }, [token]);

  return {
    modalOpen,
    updateToken,
    setVerificationFailure,
    closeModal,
    formDisabled,
    formRef,
    onSubmit,
    infoRef,
    emailSentStatus,
  };
};
