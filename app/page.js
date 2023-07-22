import Image from 'next/image'
import Header from './components/Header'
import Search from './components/Search'
import AddProduct from './components/AddProduct'
import CurrentStock from './components/CurrentStock'

export default function Home() {
  return (
    <>
      <Header />

      <Search/>

      <AddProduct/>

      <CurrentStock/>
    </>

  )
}
