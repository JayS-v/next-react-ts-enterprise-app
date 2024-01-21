import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useClickOutside } from 'hooks';
import { TriangleDownIcon } from 'components/icons';
import styles from './LanguageSwitcher.module.scss';

function LanguageSwitcher() {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { id: 1, name: 'en', icon: '/images/flag_usa_icon.png' },
    { id: 2, name: 'de', icon: '/images/flag_germany_icon.png' },
  ];
  const currentLanguage = languages.find((lang) => lang['name'] === locale);
  const dropdownItems = languages.filter((lang) => lang['name'] !== locale);

  const showDropdown = () => {
    setDropdownOpen(true);
  };

  const switchLanguage = (language: string) => () => {
    router.push({ pathname, query }, asPath, { locale: language });
    setDropdownOpen(false);
  };

  useClickOutside(dropdownRef, () => {
    setDropdownOpen(false);
  });

  return (
    <div
      className={
        dropdownOpen
          ? [styles.wrapper, styles._active].join(' ')
          : styles.wrapper
      }
      ref={dropdownRef}>
      <button type="button" className={styles.button} onClick={showDropdown}>
        {currentLanguage && (
          <Image
            src={currentLanguage.icon}
            alt={currentLanguage.name}
            width={24}
            height={24}
            priority
          />
        )}
        <span className={styles.locale}>{locale}</span>
        <TriangleDownIcon />
      </button>

      <div className={dropdownOpen ? styles.dropdown : styles.hidden}>
        {dropdownItems.map(({ name, id, icon }) => (
          <button
            type="submit"
            className={styles.button}
            key={id}
            onClick={switchLanguage(name)}>
            <Image src={icon} alt={name} width={24} height={24} priority />
            <span className={styles.locale}>{name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default LanguageSwitcher;
