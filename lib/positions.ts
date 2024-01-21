import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'positions');

export function getPositionContent() {
  const fileNames = fs.readdirSync(postsDirectory);

  const fullPath = path.join(postsDirectory, fileNames[0]);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  return {
    fileContents,
    ...matterResult.data,
  };
}
