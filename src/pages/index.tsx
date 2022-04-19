import FindAddress from "@/components/find-address";
import Header from "@/components/header";
import Footer from "@/components/footer";
import PropertyFraud from "@/components/property-fraud";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <FindAddress />
        <PropertyFraud />
      </main>
      <Footer />
    </>
  )
}
