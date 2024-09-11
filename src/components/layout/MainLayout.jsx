import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <main className="w-full flex flex-col">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
