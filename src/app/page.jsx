import Image from 'next/image'
import styles from './page.module.css'
import Welcome from '@/components/Welcome'
import Counter from '@/components/articles/Counter';

export default function Home() {
  return (
    <main>
      < Welcome name="François" />
      <Counter />
    </main>
  );
}