import React from "react";
import { useRouter } from 'next/router'

import Header from "@/client/container/Header";
import Footer from "@/client/container/Footer";
import ErrorHandler from "@/client/component/ErrorHandler";

const NotFound: React.FC<{}> = () => {

	const router = useRouter()

  return <>
    <ErrorHandler>
      <Header marketIndices={null} />
    </ErrorHandler>
    <div className="bg-[#f5f5f5] h-[400px] flex items-center justify-center">
    	<div className="text-center">
      	<div>Page not Found</div>
      	<a onClick={e => router.push(`/?p=leaders`, undefined, { shallow: true })} className="cursor-pointer">Go to index page</a>
      </div>
    </div> 
    <ErrorHandler>
      <Footer />
    </ErrorHandler>
  </>
}

export default NotFound;
