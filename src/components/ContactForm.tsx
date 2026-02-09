const ContactForm = () => {
  return (
    <section className="border-border bg-background flex flex-col border-t border-none px-5 py-20 sm:px-20 xl:px-52">
      <div className="border-border relative z-0 overflow-hidden rounded-xl border after:absolute after:top-0 after:left-0 after:z-[-1] after:h-full after:w-full after:bg-[radial-gradient(at_38%_100%,hsla(331_100%_50%)_0px,transparent_40%),radial-gradient(at_97%_50%,hsla(0_100%_59%)_0px,transparent_50%),radial-gradient(at_80%_130%,hsla(198_100%_50%)_0px,transparent_50%),radial-gradient(at_20%_160%,hsla(34_100%_65%)_0px,transparent_50%)] after:opacity-60 after:blur-[100px] after:content-[''] dark:after:bg-[radial-gradient(at_38%_100%,hsla(0_100%_50%/0.3)_0px,transparent_40%),radial-gradient(at_97%_50%,hsla(262_100%_59%/0.38)_0px,transparent_50%),radial-gradient(at_80%_130%,hsla(198_100%_50%/0.62)_0px,transparent_50%),radial-gradient(at_20%_160%,hsla(34_100%_65%/0.37)_0px,transparent_50%)]">
        <div className="relative flex flex-col justify-between gap-12 bg-[radial-gradient(146.13%_118.42%_at_50%_-15.5%,hsl(263_31%_15%/.04)_0,hsl(263_31%_15%/0)_99.59%),linear-gradient(200deg,hsl(263_31%_15%/0)_0,hsl(263_31%_15%/.04)_100%)] p-8 before:absolute before:top-0 before:left-0 before:z-[-1] before:h-full before:w-full before:bg-[url(/images/waves.svg)] before:bg-cover before:bg-position-[50%] before:bg-no-repeat before:opacity-10 before:content-[''] lg:items-center lg:p-12 2xl:flex-row dark:bg-[radial-gradient(146.13%_118.42%_at_50%_-15.5%,hsl(263_77%_73%/.04)_0,hsl(263_77%_73%/0)_99.59%),linear-gradient(200deg,hsl(263_77%_73%/0)_0,hsl(263_77%_73%/.04)_100%)]">
          <div className="md:text-center 2xl:mb-10 2xl:text-left">
            <h1 className="text-primary text-3xl font-bold 2xl:text-5xl">
              Bringing your ideas to life.
              <br />
              Let&#39;s turn your vision into reality
            </h1>
            <p className="text:lg text-secondary mt-2 2xl:text-xl">
              Have a project in mind or just want to chat? Let&#39;s connect!
            </p>
          </div>
          <div className="bg-background border-border z-50 w-full rounded-lg border bg-[radial-gradient(146.13%_118.42%_at_50%_-15.5%,hsla(0,0%,100%,.04)_0,hsla(0,0%,100%,0)_99.59%),linear-gradient(180deg,rgba(46,51,90,0),rgba(28,27,51,.04))] p-6 shadow-xl backdrop-blur-xl lg:w-125">
            <form>
              <div className="flex flex-col gap-2">
                <label
                  className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Your Name"
                  required
                  name="name"
                />
                <label
                  className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="contact@example.com"
                  required
                  name="email"
                />
                <label
                  className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-32 min-h-20 w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                  name="message"
                  placeholder="Your message here..."
                  required
                  defaultValue={""}
                />
                <button
                  className="ring-offset-background focus-visible:ring-ring border-input bg-background hover:bg-accent hover:text-accent-foreground mt-2 ml-auto inline-flex h-10 items-center justify-center rounded-md border px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
