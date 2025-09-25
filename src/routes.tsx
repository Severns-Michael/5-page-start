import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'
import App from './App'
const Home=lazy(()=>import('./pages/Home/Home'))
const About=lazy(()=>import('./pages/About'))
const Services=lazy(()=>import('./pages/Services'))
const Portfolio=lazy(()=>import('./pages/Portfolio'))
const Contact=lazy(()=>import('./pages/Contact'))
const FAQ=lazy(()=>import('./pages/FAQ'))
const Locations=lazy(()=>import('./pages/Locations'))
const NotFound=lazy(()=>import('./pages/NotFound'))
export const routes: RouteObject[]=[{path:'/',element:<App/>,children:[{index:true,element:<Home/>},{path:'about',element:<About/>},{path:'services',element:<Services/>},{path:'portfolio',element:<Portfolio/>},{path:'contact',element:<Contact/>},{path:'faq',element:<FAQ/>},{path:'locations',element:<Locations/>},{path:'*',element:<NotFound/>}]}]
