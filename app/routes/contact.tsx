import Container from "~/components/container";
import turf from "~/assets/turf.png";
import { Instagram } from "~/components/icons";

export default function Contact() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${turf})` }}
        className="flex h-64 bg-neutral-500  bg-[length:650px] bg-center bg-no-repeat text-white sm:bg-[length:1000px] md:bg-[length:1100px]  xl:bg-[length:1750px] xl:bg-top"
      >
        <Container className="flex flex-col justify-center">
          <h1 className="text-center text-5xl font-bold">CONTACT US</h1>
        </Container>
      </div>
      <Container>
        <article className="lg:prose-lg prose m-auto my-5 max-w-screen-md py-4">
          <h3 className="text-primary">Get in Touch</h3>
          <p className="my-0">
            If you would like to get in contact with management, please email us. As standard
            practice, Muslim League CT management does not engage via text message.
          </p>
          <div className="my-3">
            <h4 className="my-0 text-center">Email Address:</h4>
            <h4 className="text-center text-primary">muslimleaguect@gmail.com</h4>
          </div>
          <h3 className="text-primary">League Updates</h3>
          <p>
            To get the latest information on our leagues, follow us on Instagram and Facebook. We
            are most active on Instagram, so be sure to follow us there. Once registered our
            captains group chat and website will also have the latest details on upcoming games and
            events.
          </p>
          <h4 className="!my-0 text-center">Follow us on Instagram</h4>
          <a
            href="https://www.instagram.com/muslimleaguect"
            rel="noreferrer"
            target="_blank"
            className="!my-0 flex cursor-pointer  items-center justify-center gap-2"
          >
            <Instagram className="h-6 w-6 fill-primary" />
            <h4 className="link link-primary !my-0 text-center">@muslimleaguect</h4>
          </a>
        </article>
        <div className="h-14" />
      </Container>
    </>
  );
}
