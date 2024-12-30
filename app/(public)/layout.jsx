import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const layout = ({children}) => {
  return (
    <div>
        <Header />
        <main className="min-h-[80vh] mt-32 mx-auto max-w-6xl px-8">{children}</main>
        <Footer />
    </div>
  )
}

export default layout