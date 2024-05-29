import type { MetaFunction } from "@remix-run/react";

import prayerImg from "~/assets/prayer.jpg";

import Container from "~/components/container";
import NewsPanel from "~/components/news-panel";

export const meta: MetaFunction = () => {
  return [
    { title: "MBLCT Home | ProLeagues" },
    { name: "description", content: "Muslim Basketball League CT Home Page" },
    {
      name: "keywords",
      content: "ProLeagues, Home League Muslim Basketball CT, Basketball, Scores, Stats, Schedule",
    },
  ];
};

export default function Home() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${prayerImg})` }}
        className="flex h-64 bg-neutral-500  bg-[length:650px] bg-center bg-no-repeat text-white sm:bg-[length:800px] md:h-80 md:bg-[length:1000px] lg:bg-[length:1100px]  xl:bg-[length:1750px] xl:bg-top"
      >
        <Container className="flex flex-col justify-end">
          <h1 className="text-center text-5xl font-semibold"> Muslim League CT </h1>
          <h2 className="mb-5 text-center text-2xl">
            Uniting muslim athletes across CT
          </h2>
        </Container>
      </div>

      <Container className="min-h-[420px]">
        <NewsPanel title="UPCOMING">
          Season kickoff for the Muslim Soccer League starts May 10th! Please have your team
          registrations complete In order for the full schedule to release.
        </NewsPanel>
      </Container>
    </>
  );
}
