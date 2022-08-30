import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Footer from "./footer/footer";
import NavigationBar from "./navbar/navigation-bar";

const Layout = ({ children }) => {
  const router = useRouter();
  const path = router.pathname;

  return (
    <>
      <div className="sticky top-0 z-50">
        <NavigationBar />
      </div>
      <motion.div
        className="m-20"
        key={path}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 30,
          damping: 10,
          staggerChildren: "true",
          // repeat : true or false
          // bounce
          // mass
        }}
        exit={{ opacity: 0 }}
      >
        <main>{children}</main>
      </motion.div>
      <Footer />
    </>
  );
};

export default Layout;
