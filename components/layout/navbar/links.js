import Link from "next/link";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";
import { motion } from "framer-motion";

import { FiUnlock } from "react-icons/fi";

const routes = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/blog",
    title: "Blog",
  },
  {
    href: "/contact",
    title: "Contact",
  },
];

const Links = () => {
  const router = useRouter();
  const path = router.asPath;
  const { data: session } = useSession();

  const logoutHandler = async () => {
    await signOut();
    router.replace("/");
  };

  const variants = {
    hover: { scale: 1.2 },
    tap: { scale: 0.8 },
  };

  return (
    <div className="items-center flex flex-row">
      {routes.map((route) => (
        <motion.div
          key={route.title}
          whileHover="hover"
          whileTap="tap"
          variants={variants}
        >
          <Link href={route.href}>
            <span
              className={`${
                path === route.href ? styles.onPage : styles.notOnPage
              }`}
            >
              {route.title}
            </span>
          </Link>
        </motion.div>
      ))}
      {session && (
        <>
          <motion.div whileHover="hover" whileTap="tap" variants={variants}>
            <Link href="/admin">
              <span
                className={`${
                  path === "/admin" ? styles.onPage : styles.notOnPage
                }`}
              >
                Admin
              </span>
            </Link>
          </motion.div>
          <motion.button
            whileHover="hover"
            whileTap="tap"
            variants={variants}
            onClick={logoutHandler}
            className={styles.logout}
          >
            <FiUnlock />
          </motion.button>
        </>
      )}
    </div>
  );
};

const styles = {
  notOnPage: "mx-3 pb-1.5 text-xl cursor-pointer",
  onPage:
    "mx-3 pb-1.5 border-b-2 border-cyan-500 text-cyan-500 text-xl cursor-pointer",
  logout: "ml-3 p-1.5 border-2 border-black rounded-lg dark:border-white",
};

export default Links;
