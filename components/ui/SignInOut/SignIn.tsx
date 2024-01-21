import Image from 'next/image';
import signIn from '../../../public/images/sign-in.svg';
import styles from './SignInStyle.module.scss';

type Props = {
  handleClick: () => void;
};

const SignIn = ({ handleClick }: Props) => {
  return (
    <div onClick={handleClick} className={styles.sign}>
      <Image src={signIn} alt={'Sign In'} />
    </div>
  );
};

export default SignIn;
