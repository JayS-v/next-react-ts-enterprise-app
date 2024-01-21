import ReactMarkdown from 'react-markdown';
import styles from './MarkdownRenderer.module.scss';

interface Props {
  children: string;
}

export const MarkdownRenderer: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.markdown_wrapper}>
      <ReactMarkdown>{children}</ReactMarkdown>
    </div>
  );
};
