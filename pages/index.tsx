import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Card from "./components/Card";
import Form from "./components/Form";

const Home = () => {
  const sectionRefs = useRef([]);
  const [selectedKit, setSelectedKit] = useState<
    "kit-one" | "kit-two" | undefined
  >(undefined);
  const [formCompleted, setFormCompleted] = useState<boolean>(false);

  const onSelectKit = (kit: "kit-one" | "kit-two") => setSelectedKit(kit);
  const scrollToSection = (index, position) => {
    sectionRefs.current[index].scrollIntoView({
      behavior: "smooth",
      block: position,
    });
  };

  return (
    <div>
      <Head>
        <title>Date Night Eats by Miraim</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className={styles.container}>
          <img
            src="/assets/logo.svg"
            alt="main-logo"
            width={500}
            height={500}
          />
          <div
            className="mt-20 animate-bounce cursor-pointer"
            onClick={() => scrollToSection(0, "start")}
          >
            <Image src="/assets/heart-arrow.svg" width={30} height={30} />
          </div>
          <div className="text-lg">Scroll</div>
        </div>
        <main
          className="text-center w-full px-6 sm:px-24 pb-12 m-auto"
          ref={(el) => (sectionRefs.current[0] = el)}
        >
          <div className="mt-16 mb-12">
            <img
              src="/assets/choose-title.svg"
              alt="choose-title"
              width={600}
              height={150}
              className="m-auto"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-8 justify-items-center">
            <div className="col-1 w-full xl:max-w-3xl">
              <Card
                title="Kit No. 1"
                onSelect={() => {
                  onSelectKit("kit-one");
                  setTimeout(() => scrollToSection(1, "start"), 50);
                }}
                selected={selectedKit === "kit-one"}
              />
            </div>
            <div className="col-1 w-full xl:max-w-3xl">
              <Card
                title="Kit No. 2"
                onSelect={() => {
                  onSelectKit("kit-two");
                  setTimeout(() => scrollToSection(1, "start"), 50);
                }}
                selected={selectedKit === "kit-two"}
              />
            </div>
          </div>
        </main>
        {selectedKit && (
          <div
            className="m-auto px-12 w-full md:w-3/4 lg:w-7/12 xl:w-1/2 py-16"
            ref={(el) => (sectionRefs.current[1] = el)}
          >
            <div
              className={`mt-36 text-2xl sm:text-5xl text-center ${
                !selectedKit ? "invisible" : "visible"
              }`}
            >
              You selected{" "}
              <span className="italic underline">
                {selectedKit === "kit-one" ? "Kit No. 1" : "Kit No. 2"}
              </span>
            </div>
            <div className="mt-16 mb-28 text-center">
              <img
                src="/assets/fill-form.svg"
                alt="fill-form-title"
                width={600}
                height={150}
                className="m-auto"
              />
            </div>
            <Form
              selectedKit={selectedKit}
              formCompleted={formCompleted}
              onHandleCompleted={() => {
                setFormCompleted(true);
              }}
              scrollToSection={() =>
                setTimeout(() => scrollToSection(2, "start"), 50)
              }
            />
            {formCompleted && (
              <div
                className="text-center py-32"
                ref={(el) => (sectionRefs.current[2] = el)}
              >
                <img
                  src="/assets/thank-you.svg"
                  alt="thank-you-logo"
                  width={500}
                  height={500}
                  className="m-auto"
                />
                <div className="text-lg sm:text-xl">
                  Thanks for your order! I'll confirm your order within 24
                  hours. Please check your email/phone for updates.
                </div>
              </div>
            )}
          </div>
        )}
        <footer className="text-center py-4 text-lg md:text-2xl">
          <div>&copy; Miriam Bustos 2020</div>
          <div className="py-2 text-sm md:text-lg">Designed by Joh Studios</div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
