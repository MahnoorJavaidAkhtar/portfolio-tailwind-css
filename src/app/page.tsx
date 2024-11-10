import Image from 'next/image';

export default function Home() {
  return (
    <section
      className="h-screen flex flex-col md:flex-row items-center justify-center bg-home text-white p-4"
      style={{
        backgroundImage: "url('/backgroundimg.jpg')", // Change the path to your background image here
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Left Side Content */}
      <div className="md:w-1/2 md:pr-8 flex flex-col items-start">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Hi, THIS IS MAHNOOR JAVAID</h1>
        <h3 className="text-xl md:text-2xl mb-4">Frontend Developer</h3>
        <p className="text-base md:text-lg">
          A beginner frontend developer with a growing passion for creating dynamic web applications.
          Currently exploring TypeScript, Tailwind CSS, and Next.js, building my skills as I progress.
          I love the challenge of learning new technologies and am excited to see
          how I can apply them to real-world projects.
        </p>
      </div>

      {/* Right Side Content with Profile Picture */}
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-lg overflow-hidden border-4 border-white">
          <Image
            src="/profile.jpg" // Change the path to your profile picture here
            alt="Profile Picture"
            width={256}
            height={256}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
