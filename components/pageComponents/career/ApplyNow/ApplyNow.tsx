import { useState, useEffect, useRef } from 'react';
import styles from './ApplyNow.module.scss';
import { ContactForm } from 'components/pageComponents/contacts';
import { CloseIcon, MenuIcon } from 'components/icons';

interface Props {
  applyButtonText: string;
}

export const ApplyNow: React.FC<Props> = ({ applyButtonText }) => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [buttonHeight, setButtonHeight] = useState<number>(0);
  const anchorRef = useRef<HTMLButtonElement | null>(null);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (anchorRef.current && dialogRef.current) {
      const buttonRect = anchorRef.current.getBoundingClientRect();
      const dialogRect = dialogRef.current.getBoundingClientRect();

      setButtonHeight(buttonRect.height);

      dialogRef.current.style.left = `${
        buttonRect.left + buttonRect.width + 10
      }px`;
      dialogRef.current.style.transform = `translateY(-${
        dialogRect.height / 2
      }px)`;
    }
  }, [isDialogOpen]);

  return (
    <div className={styles.wrapper} style={{ maxHeight: buttonHeight }}>
      <button
        ref={anchorRef}
        onClick={handleOpenDialog}
        className={styles.apply_button}>
        {applyButtonText}
      </button>
      <div
        ref={dialogRef}
        className={`${styles.dialog} ${isDialogOpen && styles.open}`}>
        <div className={styles.content}>
          <span onClick={handleCloseDialog} className={styles.icon_wrapper}>
            <CloseIcon className={styles.icon} />
          </span>

          <ContactForm type="apply" />
        </div>
      </div>
    </div>
  );
};
