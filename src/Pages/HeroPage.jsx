
const HeroPage = () => {
  const navItems = {
    Logo: "LOGO",
    NavLinks: ["Home", "About", "Services", "Contact"],
    CTALink: "BUY A BUNDLE",
  };
  return (
    <main className="bg-lavender h-[150vh] px-22 py-8">
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
      <section className="mt-7">
        <div className="mb-15">
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
            <div className="bg-mint-green absolute -bottom-8 left-39 flex size-24 rotate-8 items-center justify-center rounded-full">
              <span className="flex items-center justify-center">😊</span>
            </div>
          </h1>
        </div>
        <p className="font-jakarta text-5xl font-medium">
          We take your content stress away, so <br /> you can focus on the
          bigger picture.
        </p>
        <button className="bg-vibrant-coaral mt-12 rounded-full font-montserrat text-pure-white px-4 text-lg font-semibold py-2">Checkout bundles</button>
      </section>
    </main>
  );
};

export default HeroPage;
