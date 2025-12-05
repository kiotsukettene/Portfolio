import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PROFILE_QUERY = defineQuery(`*[_id == "singleton-profile"][0]{
  firstName,
  lastName
}`);

export async function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const { data: profile } = await sanityFetch({ query: PROFILE_QUERY });

  return (
    <>
      <Navbar firstName={profile?.firstName} lastName={profile?.lastName} />
      <main>{children}</main>
      <Footer firstName={profile?.firstName} lastName={profile?.lastName} />
    </>
  );
}

