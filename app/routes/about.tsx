import Container from "~/components/container";
import turf from "~/assets/turf.png";

export default function About() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${turf})` }}
        className="flex h-64 bg-neutral-500  bg-[length:650px] bg-center bg-no-repeat text-white sm:bg-[length:1000px] md:bg-[length:1100px]  xl:bg-[length:1750px] xl:bg-top"
      >
        <Container className="flex flex-col justify-center">
          <h1 className="text-center text-5xl font-bold">ABOUT US</h1>
        </Container>
      </div>
      <Container className="min-h-[480px]">
        <article className="lg:prose-lg prose m-auto my-5 max-w-screen-md">
          <h3 className="text-primary">Who are we?</h3>
          <p>
            We are a brotherhood of Muslims who share a passion for religion, competition, and
            sports. We unite to pray together, play together, and to build bridges between diverse
            Muslim communities across CT.
          </p>
          <h3 className="text-primary">Our Mission</h3>
          <p>
            Muslim League CT is driven to unite the Ummah (Muslims of the world) through sport. Our
            mission is to foster brotherhood and connection between brothers (and sisters inshallah)
            through their love of sport. Through our basketball and soccer leagues we seek to
            channel the energy associated with intense competition and build meaningful connections
            between Muslims from all walks of life.
          </p>
          <p>
            Our core is Islam. Our religion is our backbone. Without it, we lose sight of our
            mission. Our aim is to drive Muslims brothers together through their love for sport: to
            create lasting friendships and a sense of unity; to offer an outlet to those looking for
            a safe place to practice their faith and compete at their best.
          </p>
        </article>
      </Container>
    </>
  );
}
