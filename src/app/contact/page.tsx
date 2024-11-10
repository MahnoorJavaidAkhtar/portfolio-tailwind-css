import Image from 'next/image';

export default function Contact() {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-[#0f0715] text-white p-4">
      {/* Profile Picture */}
      <div className="w-24 h-24 md:w-32 md:h-32 rounded-md overflow-hidden border-4 border-white mb-6">
        <Image
          src="/profile.jpg" // Replace with the actual path to your profile picture
          alt="Profile Picture"
          width={128}
          height={128}
          className="object-cover"
        />
      </div>

      {/* Contact Heading */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h1>
      
      {/* Contact Information */}
      <p className="text-base md:text-lg text-center mb-2">
        Feel free to reach out if you have any questions, want to collaborate, or just want to connect. I&apos;m always open to interesting conversations and opportunities!
      </p>
      <p className="text-base md:text-lg">📧 Email: mahnoorjavaid342@gmail.com</p>
      <p className="text-base md:text-lg">📍 Location: Karachi, Pakistan</p>
    </section>
  );
}
