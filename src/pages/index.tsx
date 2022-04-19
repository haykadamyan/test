import FindAddress from "@/components/find-address";
import Header from "@/components/header";
import Footer from "@/components/footer";
import PropertyFraud from "@/components/property-fraud";
import onSearch from "@/mock/onSearch";
import Stepper from '@/components/stepper';



export default function Home() {
  return (
    <>
      {/*<Header />*/}
      <main>
        <FindAddress onSearch={onSearch} />
        <Stepper />
        <PropertyFraud />
      </main>
      {/*<Footer />*/}
    </>
  )
}
