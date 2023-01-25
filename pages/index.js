import { useEffect } from "react";
import { useRouter } from "next/router";

const HomePage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/page1");
  }, []);

  return null;
};
export default HomePage;
