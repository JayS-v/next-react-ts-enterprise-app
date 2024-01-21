import signOut from '../../../public/images/sign-out.svg';
import styles from './SignInStyle.module.scss';
import Image from 'next/image';

type Props = {
  handleClick: () => void;
};

const SignOut = ({ handleClick }: Props) => {
  return (
    <div onClick={handleClick} className={styles.sign}>
      <Image src={signOut} alt={'Sign Out'} />
    </div>
  );
};

export default SignOut;
