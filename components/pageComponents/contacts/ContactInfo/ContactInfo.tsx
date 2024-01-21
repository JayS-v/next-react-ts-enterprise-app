import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { Container } from 'components';
import image from 'public/images/contacts/contacts-3.png';
import styles from './ContactInfo.module.scss';
import { dataEn } from '../../../../lib/consts';

function ContactInfo() {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.col}>
            <h2 className={styles.title}>{t('contacts:info_title')}</h2>

            <Image
              src={image}
              alt="Contact office"
              className={styles.image}
              priority
              width={300}
            />
          </div>

          <div className={styles.col}>
            <p className={styles.name}>MONITAET Technology GmbH</p>
            <p>
              <span className={styles.subtitle}>
                {t('contacts:info_address')}:
              </span>
              Rehrhofer Weg 102, D-29633 Munster, GERMANY
            </p>

            <p>
              <span className={styles.subtitle}>
                {t('contacts:info_representative')}:
              </span>
              Igor Gendel
            </p>

            <p>
              <span className={styles.subtitle}>Tel.:</span>
              <a href="tel:+49051921379330">{dataEn.tel}</a>
            </p>

            <p>
              <span className={styles.subtitle}>E-mail:</span>
              <a href="mailto:info@monitaet.com">info@monitaet.com</a>
            </p>

            <p>
              <span className={styles.subtitle}>
                {t('contacts:info_website')}:
              </span>
              <a
                href="https://www.monitaet.com/"
                target="_blank"
                rel="noreferrer">
                www.monitaet.com
              </a>
            </p>

            <p>
              <span className={styles.subtitle}>
                {t('contacts:info_registrer_court')}:
              </span>
              Amtsgericht Lüneburg
            </p>

            <p>
              <span className={styles.subtitle}>
                {t('contacts:info_register_number')}:
              </span>
              HRB 211013
            </p>

            <p className={styles.taxNotice}>{t('contacts:info_tax_notice')}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ContactInfo;
