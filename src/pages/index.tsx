import FindAddress from "@/components/find-address";
import Header from "@/components/header";
import AppDownload from "@/components/app-download";
import Pricing from "@/components/pricing";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <FindAddress />
      </main>
      <AppDownload />
      <Pricing />
      <Footer />
    </>
  )
}
