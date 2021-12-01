import Head from 'next/head'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const Layout = ({children}) => {
    return (
        <>
         <Head>
            <meta charSet="utf-8" />
            <meta name="author" content="www.frebsite.nl" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
            <title>LearnUp - Online Course &amp; Education HTML Template</title>
            <link href="assets/css/styles.css" rel="stylesheet" />
            <link href="assets/css/colors.css" rel="stylesheet" />
         </Head>  
         <Header />
          {children} 
          <Footer />
        </>
    )
}

export default Layout;