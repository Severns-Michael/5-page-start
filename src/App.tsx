import Header from '@/components/Header/Header'
import ScrollToTop from '@/lib/scrollToTop'
import { Outlet } from 'react-router-dom'
export default function AppShell(){return(<div style={{minHeight:'100vh',background:'#0b0d12',color:'#fff'}}><Header/><ScrollToTop/><main style={{maxWidth:960,margin:'0 auto',padding:'2rem 1rem'}}><Outlet/></main><footer style={{borderTop:'1px solid rgba(255,255,255,.08)',padding:'2rem 1rem'}}>© {new Date().getFullYear()} Frontline Web & Software</footer></div>)}
