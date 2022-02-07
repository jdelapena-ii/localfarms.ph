import Head from 'next/head'
import Header from '../components/Header';
import { AirbnbExample } from '../components/AirBnbExample';
import { Flex } from '@chakra-ui/react'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Local Farms Ph</title>
        <meta name="description" content="Local Farms Philippines" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Flex>
          <AirbnbExample />
        </Flex>
      </main>  
    </div>
  )
}
