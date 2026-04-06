import MarqueeLib from "react-fast-marquee";
const Marquee = MarqueeLib.default;

const ImageCard = ({ imgSrc }) => {
  return (
    <div className="bg-pure-white h-sm w-sm shrink-0 rounded-xl p-1">
      <img src={imgSrc} alt="" className="rounded-xl" />
    </div>
  );
};

const HeroPage = () => {
  const navItems = {
    Logo: "LOGO",
    NavLinks: ["Home", "About", "Services", "Contact"],
    CTALink: "BUY A BUNDLE",
  };
  console.log(Marquee);
  const cards = [
    {
      imgSrc:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=400&h=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=400&h=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?q=80&w=400&h=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=400&h=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=400&h=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const marqueeText = [
    "Content creation simplified",
    "Brand storytelling made easy",
    "High-quality visuals on demand",
    "Engaging copy for every channel",
    "Fast delivery, no stress",
    "Grow your audience with style",
    "Creative strategy that works",
    "Scale your content machine",
  ];
  return (
    <>
      <main className="bg-lavender flex h-[150vh] flex-col gap-15">
        <section className="px-22 py-8">
          <nav className="font-share-tech flex items-center justify-between text-lg font-bold">
            <h1>{navItems.Logo}</h1>
            <ul className="flex items-center justify-center gap-24 uppercase">
              {navItems.NavLinks.map((link, index) => (
                <li key={index}>{link}</li>
              ))}
            </ul>
            <button className="bg-mint-green rounded-full border-none px-9 py-3">
              {navItems.CTALink}
            </button>
          </nav>
          <div className="mt-7 flex flex-col items-start justify-center gap-10">
            <div className="">
              <div className="relative flex items-center">
                <h1 className="font-jakarta text-9xl font-extrabold tracking-tight uppercase">
                  content
                </h1>
                <div className="bg-stickynote mt-6 -ml-2.5 h-fit rotate-10 rounded-md">
                  <span className="font-indie-flower flex items-center justify-center text-2xl uppercase">
                    hello, i am
                  </span>
                  <div className="px-2 py-2">
                    <h2 className="font-jakarta bg-pure-white rounded-md px-1 text-center text-xl font-extrabold tracking-tighter">
                      Crusing on a <br />
                      Content Cloud
                    </h2>
                  </div>
                </div>
              </div>

              <h1 className="font-jakarta relative text-9xl font-extrabold tracking-tight uppercase">
                on demand
                <div className="bg-mint-green absolute -bottom-8 left-39 flex size-24 -rotate-10 items-center justify-center rounded-full">
                  <span className="flex items-center justify-center">😊</span>
                </div>
              </h1>
            </div>
            <p className="font-jakarta text-justify text-5xl font-medium">
              We take your content stress away, so <br /> you can focus on the
              bigger picture.
            </p>
            <button className="bg-vibrant-coaral font-montserrat text-pure-white rounded-full px-4 py-2 text-lg font-semibold">
              Checkout bundles
            </button>
          </div>
        </section>
        <div className="flex gap-8 overflow-clip">
          {cards.map((card, index) => (
            <ImageCard key={index} imgSrc={card.imgSrc} />
          ))}
        </div>
        <Marquee>
          {marqueeText.map((text, index) => (
            <span key={index} className="mx-4 text-2xl font-bold">
              {text}
            </span>
          ))}
        </Marquee>
      </main>
    </>
  );
};

export default HeroPage;
