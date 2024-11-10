import Image from 'next/image';

export default function About() {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-[#0f0715] text-white p-4">
      {/* Profile Picture in Square Shape */}
      <div className="w-32 h-32 md:w-40 md:h-40 overflow-hidden border-4 border-white mb-8">
        <Image
          src="/profile.jpg" // replace with the actual path to your profile picture
          alt="Profile Picture"
          width={560}
          height={560}
          className="object-cover"
        />
      </div>

      {/* About Me Heading */}
      <h1 className="text-3xl md:text-5xl font-bold mb-4">About Me</h1>
      
      {/* About Me Description */}
      <p className="mt-4 max-w-lg text-center text-base md:text-lg">
        Hi, I’m Mahnoor, a passionate FrontEnd developer. I love building creative web solutions.
      </p>
    </section>
  );
}