import FindAddress from "@/components/find-address";
import Header from "@/components/header";
import AppDownload from "@/components/app-download";
import Pricing from "@/components/pricing";
import RegisterProperty from "@/components/register-property";
import Footer from "@/components/footer";
import PropertyFraud from "@/components/property-fraud";
import onSearch from "@/mock/onSearch";
import Stepper from '@/components/stepper';
import PhoneStepper from '@/components/phone-stepper';



export default function Home() {
  return (
    <>
      <Header />
      <main>
        <FindAddress onSearch={onSearch} />
        <Stepper />
        <PropertyFraud />
      </main>
      <PhoneStepper />
      <AppDownload />
      <Pricing />
      <RegisterProperty />
      <Footer />
    </>
  )
}
