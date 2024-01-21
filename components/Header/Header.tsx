import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMediaQuery, useScrollLock } from 'hooks';
import { Container } from 'components';
import { CloseIcon, MenuIcon } from 'components/icons';
import logo from 'public/images/logo.png';
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher';
import { contactBtnText, navbarItems, navbarItemsDE } from './consts';
import { dataEn, dataDe } from 'lib/consts';
import variables from 'styles/variables.module.scss';
import styles from './Header.module.scss';
import { Button, SignIn, SignOut } from '../ui';
import { useSession, signOut } from 'next-auth/react';
import { handleKeycloackSignIn } from '../../pages/api/auth/[...nextauth]';

function Header() {
  const session = useSession();
  const { pathname, locale, asPath } = useRouter();
  const widthMobileMenu = useMediaQuery(
    `(max-width: ${variables.widthMobileMenu})`
  );
  const { lockScroll, unlockScroll } = useScrollLock();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const navItems = locale === 'de' ? navbarItemsDE : navbarItems;
  const btnText = locale ? contactBtnText[locale] : contactBtnText['en'];
  const imprintLinkText =
    locale === 'de' ? dataDe.imprintData : dataEn.imprintData;
  console.log(session)
  const closeMenu = () => {
    setTimeout(() => {
      setMenuOpen(false);
      unlockScroll();
    }, 200);
  };

  const openMenu = () => {
    setMenuOpen(true);
    lockScroll();
  };

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
          <Link href="/" className={styles.logo}>
            <Image src={logo} alt="logo" fill priority />
          </Link>

          {widthMobileMenu && (
            <div className={styles.buttonWrapper}>
              <LanguageSwitcher />

              <button
                type="button"
                className={styles.menuButton}
                onClick={openMenu}
                aria-label="menu">
                <MenuIcon className={styles.icon} />
              </button>
            </div>
          )}

          <div
            className={
              menuOpen ? [styles.menu, styles._active].join(' ') : styles.menu
            }>
            {widthMobileMenu && (
              <button
                type="button"
                className={styles.closeButton}
                onClick={closeMenu}
                aria-label="close menu">
                <CloseIcon className={styles.icon} />
              </button>
            )}

            <nav>
              <ul className={styles.list}>
                {navItems.map(({ name, path, id }) => (
                  <li key={id} className={styles.menuItem}>
                    <Link
                      className={
                        pathname === path ||
                        pathname === `${path}/[currentPage]`
                          ? [styles.link, styles._active].join(' ')
                          : styles.link
                      }
                      href={path}
                      onClick={closeMenu}>
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {session.status === 'authenticated' && <SignOut handleClick={signOut} />}
            {session.status === 'unauthenticated' && (
              <SignIn handleClick={() => handleKeycloackSignIn(asPath)} />
            )}

            {!widthMobileMenu && <LanguageSwitcher />}

            <Button type={'link'} href={'/contacts'} handle={closeMenu}>
              {btnText}
            </Button>

            {widthMobileMenu && (
              <Link
                href="/imprint"
                className={styles.imprint}
                onClick={closeMenu}>
                {imprintLinkText}
              </Link>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
