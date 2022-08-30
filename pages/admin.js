import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import AboutItemForm from "../components/admin/about-item-form";

const Admin = () => {
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login");
    }
  }, [status, router]);

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-5xl">Admin Page</h1>
        <select className="m-10">
          <option>Add About Item</option>
          <option>Add Blog Item</option>
          <option>Add Contact Item</option>
        </select>
        <AboutItemForm />
      </div>
    </>
  );
};

export default Admin;
