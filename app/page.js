import Image from 'next/image'
import Header from './components/Header'
import Search from './components/Search'
import AddProduct from './components/AddProduct'

export default function Home() {
  return (
    <>
      <Header />

      <Search/>

      <AddProduct/>


      <div className='container bg-slate-200 mx-auto'>
        <h1>Current stock</h1>
      </div>
    </>

  )
}
