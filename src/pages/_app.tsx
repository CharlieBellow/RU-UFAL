import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SidebarProvider } from '../components/Sidebar/SidebarContext';
import Sidebar from '../components/Sidebar/Sidebar';




export default function App({ Component, pageProps }: AppProps) {
  return (
    <SidebarProvider>
      <Sidebar>
        <Component { ...pageProps } />

      </Sidebar>
      
    </SidebarProvider>
  );
}
