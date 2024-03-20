import { redirect } from 'next/navigation'

export default function Home() {
  redirect('/work')
  return (
    <main>
    </main>
  );
}
