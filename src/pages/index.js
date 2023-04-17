import { useState } from "react";

import connectDB from "@/utils/connectDB";
import Coffee from "@/models/Coffee";
import Tea from "@/models/Tea";

import Header from "@/c/Header";
import Intro from "@/c/Intro";
import Grid from "@/c/Grid";
import Footer from "@/c/Footer";

const Brewed = ({ coffee, tea }) => {
  // We are setting the default tab here: coffee or tea
  const [active, setActive] = useState("coffee");

  return (
    <>
      <Header active={active} setActive={setActive} />
      <main>
        <Intro />
        <Grid coffee={coffee} tea={tea} active={active} />
        <Footer />
      </main>
    </>
  );
};

/**
 * We use getStaticProps, because the data won't be changing very often.
 * And if it will change, revalidation will happen:
 * https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration
 */
export const getStaticProps = async () => {
  let coffee = null;
  let tea = null;

  await connectDB();

  try {
    const resC = await Coffee.find({});
    const resT = await Tea.find({});

    coffee = resC.map((doc) => {
      const item = doc.toObject();

      item._id = item._id.toString();

      return item;
    });

    tea = resT.map((doc) => {
      const item = doc.toObject();

      item._id = item._id.toString();

      return item;
    });
  } catch (err) {
    throw new Error("🛑 Something went wrong!", { cause: err });
  }

  return { props: { coffee, tea }, revalidate: 10 };
};

export default Brewed;
