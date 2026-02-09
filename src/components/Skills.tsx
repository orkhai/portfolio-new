const Skills = () => {
  return (
    <section className="border-border bg-background flex min-h-125 flex-col border-t px-5 py-20 sm:px-20 xl:px-52">
      <div>
        <h1 className="mb-2 text-4xl font-bold">
          Building Digital Experiences
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          I specialize in creating stunning user interfaces and developing
          high-quality applications that stand out.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-12 pt-12 xl:grid-cols-2 2xl:grid-cols-3">
        <div className="border-border flex flex-col rounded-xl border p-8 backdrop-blur-3xl dark:bg-[radial-gradient(146.13%_118.42%_at_50%_-15.5%,hsla(0,0%,100%,.04)_0,hsla(0,0%,100%,0)_99.59%),linear-gradient(180deg,rgba(46,51,90,0),rgba(28,27,51,.04))]">
          <div className="flex items-center pb-4">
            <div className="text-primary mr-5 text-3xl md:text-4xl">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 640 512"
                height={45}
                width={45}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z" />
              </svg>
            </div>
            <h1 className="text-center text-2xl font-bold">What I can do</h1>
          </div>
          <p className="pb-4 text-gray-600 dark:text-gray-400">
            I can help develop solutions that will help you grow your business:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li className="font-medium">UI/UX Design</li>
            <li className="font-medium">Fullstack Web Development</li>
            <li className="font-medium">Mobile App Development</li>
            <li className="font-medium">Database Design</li>
            <li className="font-medium">API Integration</li>
          </ul>
        </div>
        <div className="border-border flex flex-col rounded-xl border p-8 backdrop-blur-3xl dark:bg-[radial-gradient(146.13%_118.42%_at_50%_-15.5%,hsla(0,0%,100%,.04)_0,hsla(0,0%,100%,0)_99.59%),linear-gradient(180deg,rgba(46,51,90,0),rgba(28,27,51,.04))]">
          <div className="flex items-center pb-4">
            <div className="text-primary mr-5 text-3xl md:text-4xl">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z" />
              </svg>
            </div>
            <h1 className="text-center text-2xl font-bold">Tools I Use</h1>
          </div>
          <p className="pb-4 text-gray-600 dark:text-gray-400">
            I use the latest tools and technologies to build functional and
            scalable products:
          </p>
          <ul className="list-disc pl-6">
            <li>
              <h2 className="font-medium">Frontend: </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Tailwind CSS, React, TypeScript
              </p>
            </li>
            <li>
              <h2 className="font-medium">Backend: </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Node.js, Fastify, MongoDB, PostgreSQL
              </p>
            </li>
            <li>
              <h2 className="font-medium">Design: </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Figma, Framer, Photoshop
              </p>
            </li>
          </ul>
        </div>
        <div className="border-border flex flex-col rounded-xl border p-8 backdrop-blur-3xl dark:bg-[radial-gradient(146.13%_118.42%_at_50%_-15.5%,hsla(0,0%,100%,.04)_0,hsla(0,0%,100%,0)_99.59%),linear-gradient(180deg,rgba(46,51,90,0),rgba(28,27,51,.04))]">
          <div className="flex items-center pb-4">
            <div className="text-primary mr-5 text-3xl md:text-4xl">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" />
              </svg>
            </div>
            <h1 className="text-center text-2xl font-bold">UI/UX Design</h1>
          </div>
          <p className="pb-4 text-gray-600 dark:text-gray-400">
            I am a designer first, developer second. I can help design clean and
            modern interfaces:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li className="font-medium">User-Centered Design</li>
            <li className="font-medium">Modern &amp; Clean UI</li>
            <li className="font-medium">Responsive Layouts</li>
            <li className="font-medium">Wireframes &amp; Prototypes</li>
          </ul>
        </div>
      </div>
      <a
        className="ring-offset-background focus-visible:ring-ring border-input hover:bg-accent hover:text-accent-foreground bg-gradient-gray mt-12 ml-auto inline-flex h-11 items-center justify-center rounded-md border px-8 text-sm font-medium whitespace-nowrap shadow-lg transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
        href="/projects"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-layout-dashboard mr-2 h-5 w-5"
        >
          <rect width={7} height={9} x={3} y={3} rx={1} />
          <rect width={7} height={5} x={14} y={3} rx={1} />
          <rect width={7} height={9} x={14} y={12} rx={1} />
          <rect width={7} height={5} x={3} y={16} rx={1} />
        </svg>
        View My Projects
      </a>
    </section>
  );
};

export default Skills;
