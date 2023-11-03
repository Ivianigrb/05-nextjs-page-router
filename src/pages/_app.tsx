import AppShell from '@/components/layouts/AppShell';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

//di dalam return ada app shell tang berguna untuk jika ada komponen yang akan di munculkan di semua halaman maka kita akan membuat komponen tersebut di folder AppShell dan cara memanggilnya kita panggil di file app.tsx ini
export default function App({ Component, pageProps }: AppProps) {
  return(
    <AppShell>
      <Component {...pageProps} />
    </AppShell>
  );
}
