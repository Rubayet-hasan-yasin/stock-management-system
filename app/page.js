import Image from 'next/image'
import Header from './components/Header'
import Search from './components/Search'

export default function Home() {
  return (
    <>
      <Header />

      <Search/>


      <div className='container bg-slate-200 mx-auto'>
        <h1>Current stock</h1>
      </div>
    </>

  )
}
