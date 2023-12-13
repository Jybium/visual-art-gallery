// COMPONENTS AND IMPORTS

import Image from "next/image";
import Button from "./components/Button";
import { Atomic_Age } from "next/font/google";
import Link from "next/link";
import { ArtWorks, Painting, PopularPiece, PricesRange } from "@/constants/data";
import ArtWork from "./components/ArtWork";
import ArtCard from "./components/ArtCard";
import { MdKeyboardArrowRight, MdOutlineArrowForward  } from "react-icons/md";
import Accordion from "./components/Accordion";
import Banner from "./components/Banner";
import { GrMail } from "react-icons/gr";


// IMAGES
import firstPaint from "../../public/abstraction.png";
import secondPaint from "../../public/landscape.png";
import thirdPaint from "../../public/streetart.png";
import fourthPaint from "../../public/portrait.png";
import fifthPaint from "../../public/popculture.png";
import sixthPaint from "../../public/horror.png";
import PriceRange from "../../public/landing-page-our-company-2.png";
import Commitment from "../../public/landing-page-Committment.png";
import Newletter from "../../public/landing-page-newletter2.png"
import globe from "../../public/globe.png"
import question from "../../public/question.png"
import unique from "../../public/unique.png"


const Atomic = Atomic_Age({ subsets: ["latin"], weight: "400" });


export default function Home() {

  const styles = `text-white font-bold text-2xl +  ${Atomic.className}`;

  return (
    <main className="flex min-h-screen flex-col justify-between w-full">
      {/* BANNER */}
      <Banner className="bg-banner">
        <div className="w-1/2 pl-14 grid gap-6 h-[40vh] justify-center tracking-wide place-content-center">
          <h1 className={styles} style={Atomic.style}>
            Welcome to DecoArt Exchange where art comes to life.
          </h1>
          <div className="text-xs grid gap-3 text-white">
            <p className="flex items-center gap-4">
              <Image
                src={unique}
                objectFit="cover"
                objectPosition="center"
                alt="unique icon"
              />
              <span>Unique Artworks by professional artists</span>
            </p>
            <p className="flex items-center gap-4">
              <Image
                src={globe}
                objectFit="cover"
                objectPosition="center"
                alt="globe icon"
              />
              <span>International artists delivered to your home</span>
            </p>
            <p className="flex items-center gap-4">
              <Image
                src={question}
                objectFit="cover"
                objectPosition="center"
                alt="artist question icon"
              />
              <span>Our team of Art advisors available 24/7 to help you</span>
            </p>
          </div>
          <Button
            title="Explore Our Category"
            classname="bg-blue-600 text-white text-[10px] tracking-normal rounded w-1/3"
          />
        </div>
      </Banner>

      {/* TRENDING ARTWORK */}
      <section className="w-11/12 m-auto py-10">
        <div className="font-bold flex justify-between">
          <p className="text-lg">Trending Artworks</p>
          <p className="text-sm">See All Trends</p>
        </div>
        <div className="grid grid-flow-col gap-12 py-10">
          {ArtWorks.map((data) => (
            <ArtWork artwork={data} />
          ))}
        </div>
      </section>

      {/* NEWEST ARTWORK */}
      <section className=" py-10 bg-[#F2F2F2C9]">
        <div className="w-11/12 m-auto">
          <div className="font-bold flex justify-between">
            <p className="text-lg">New Artworks</p>
            <p className="text-sm">See All New Artworks</p>
          </div>
          <div className="grid grid-flow-col gap-12 py-10">
            {ArtWorks.map((data) => (
              <ArtWork artwork={data} />
            ))}
          </div>
        </div>
      </section>

      {/* SHOP BY ART STYLE */}
      <section className="py-10 bg-[#F2f2f2c9] my-20">
        <div className="w-11/12 mx-auto">
          <div className="font-bold flex justify-between">
            <p className="text-lg">Shop By Art Style</p>
            <p className="text-sm">All Our Painting</p>
          </div>

          <div className="my-8">
            <div className="flex justify-between gap-5">
              {/* FIRST COLUMN */}
              <div className="relative">
                <Image
                  src={firstPaint}
                  objectFit="cover"
                  objectPosition="center"
                  alt={`A sample picture of Abstarction`}
                  className="relative "
                />
                <p className="absolute left-3 bottom-3 text-white tracking-wider text-xs">
                  Abstraction
                </p>
              </div>
              {/* SECOND COLUMN */}
              <div className="relative">
                <Image
                  src={secondPaint}
                  objectFit="cover"
                  objectPosition="center"
                  alt={`A sample picture of landscape`}
                  className="relative "
                />
                <p className="absolute left-3 bottom-3 text-white tracking-wider text-xs">
                  Landscape
                </p>
              </div>
              {/* THIRD COLUMN */}
              <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                <div className="relative">
                  <Image
                    src={thirdPaint}
                    objectFit="cover"
                    objectPosition="center"
                    alt={`A sample picture of Street art`}
                    className="relative "
                  />
                  <p className="absolute left-3 bottom-3 text-white tracking-wider text-xs">
                    Street Art
                  </p>
                </div>
                <div className="relative">
                  <Image
                    src={fourthPaint}
                    objectFit="cover"
                    objectPosition="center"
                    alt={`A sample picture of portrait`}
                    className="relative "
                  />
                  <p className="absolute left-3 bottom-3 text-white tracking-wider text-xs">
                    Portrait
                  </p>
                </div>
                <div className="relative">
                  <Image
                    src={fifthPaint}
                    objectFit="cover"
                    objectPosition="center"
                    alt={`A sample picture of horror`}
                    className="relative "
                  />
                  <p className="absolute left-3 bottom-3 text-white tracking-wider text-xs">
                    Horror
                  </p>
                </div>
                <div className="relative">
                  <Image
                    src={sixthPaint}
                    objectFit="cover"
                    objectPosition="center"
                    alt={`A sample picture of pop culture`}
                    className="relative "
                  />
                  <p className="absolute left-3 bottom-3 text-white tracking-wider text-xs">
                    Pop Culture
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR COLLECTION */}
      <section className="w-11/12 m-auto py-10">
        <div className="grid gap-3 tracking-wide">
          <h1 className="font-bold text-xl">
            Which new artwork would you love to get?
          </h1>
          <p className="text-xs">
            Discover selections of artwork inspired by feelings.
          </p>
          <p className="font-bold flex gap-4 items-center">
            All our collections{" "}
            <span>
              <MdOutlineArrowForward size={20} />
            </span>
          </p>
        </div>
        <div className="flex gap-12 items-center">
          {PopularPiece.map((data) => (
            <ArtCard data={data} />
          ))}
        </div>
      </section>

      {/* ARTWORK PRICE RANGE */}
      <section className="bg-[#f2f2f2c9] py-10">
        <div className="w-11/12 m-auto flex justify-between items-center">
          <div className="w-[40%]">
            <h1>Artwork Price Range</h1>
            <div className="grid  gap-3 text-white mt-7 ">
              {PricesRange.map((data) => (
                <div className="flex justify-between items-center bg-blue-500 p-2 px-5 rounded">
                  <div className="grid gap-1">
                    <p className="text-xs tracking-wider font-thin">
                      {data.name}
                    </p>
                    <p className="font-bold text-sm">{data.price}</p>
                  </div>
                  <MdKeyboardArrowRight size={25} />
                </div>
              ))}
            </div>
          </div>
          <Image
            src={PriceRange}
            alt=""
            objectFit="cover"
            objectPosition="center"
            className="w-[42%] h-[16rem]"
          />
        </div>
      </section>

      {/* OUR COMMITMENT */}
      <section className="flex w-11/12 m-auto py-10 items-center justify-between">
        <div className="grid gap-6 tracking-wide w-[52%]">
          <h1 className="font-bold text-xl">Our commitment to you</h1>
          <p
            className="text-[11px] tracking-wider"
            style={{ lineHeight: "20px" }}
          >
            Are you in search of the perfect piece of art that fulfills all your
            criteria and captures your heart? Our dedicated personal advisors
            are ready for open discussions about your taste and preferences,
            guiding you to discover the ideal artwork. With our generous 1-year
            return policy, you have ample time to decide if your chosen piece
            truly resonates with you. Additionally, each artwork undergoes
            thorough originality verification by our team, and you'll receive a
            signed certificate of authenticity for your assurance. How can we
            assist you in finding your ideal artwork?
          </p>
          <Button
            title="LEARN MORE ABOUT US"
            classname="bg-blue-600 text-white text-[9px] tracking-normal rounded w-[40%] "
          />
        </div>
        <Image
          src={Commitment}
          alt=""
          objectFit="cover"
          objectPosition="center"
          className="w-[45%] h-[17rem]"
        />
      </section>

      {/* FAQ */}
      <section className="py-10 bg-[#F2f2f2c9] my-20">
        <div className="w-11/12 mx-auto">
          <div className="font-bold flex justify-between">
            <p className="text-lg">How to buy art on DecoArt Exchange?</p>
          </div>

          <div>
            <Accordion />
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className=" w-11/12 h-60 justify-between px-10 m-auto bg-[#F2f2f2c9] my-20 flex ">
        <div className="flex flex-col justify-center gap-3 bg-white rounded h-2/3 my-auto p-4">
          <h1 className="font-bold text-xl">Let us inspire you</h1>
          <p className="text-sm">
            Want to receive exciting art and lifestyle content, directly to your
            inbox?
          </p>

          <div className="flex gap-1">
            <div className="relative">
              <GrMail className="absolute bottom-[30%] left-3" size={13} />
              <input
                type="email"
                name="subscribe"
                placeholder="Email Address"
                id="subscribe"
                className="text-sm border-[1px] py-2 px-4 pl-10 border-black placeholder:text-xs placeholder:text-black"
              />
            </div>
            <Button
              title="subscribe"
              classname="bg-black text-white text-[10px] tracking-normal rounded w-1/6 justify-center flex items-center h-auto px-2"
            />
          </div>
        </div>
        <Image
          src={Newletter}
          alt=""
          objectFit="contain"
          objectPosition="center"
          className="w-auto mx-auto "
        />
      </section>
    </main>
  );
}
