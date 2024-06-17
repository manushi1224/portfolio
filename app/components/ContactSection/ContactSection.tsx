function ContactSection() {
  return (
    <div className="flex flex-col text-white p-10 lg:py-24">
      <h1 className="text-4xl md:text-6xl font-bold mb-8">
        LET&apos;S WORK TOGETHER
      </h1>
      <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 text-lg">
        <a
          href="mailto:youremail@example.com"
          className="hover:underline flex items-center space-x-2"
        >
          <span>Email me</span>
          <span>→</span>
        </a>
        <a
          href="https://twitter.com/yourprofile"
          className="hover:underline flex items-center space-x-2"
        >
          <span>Twitter</span>
          <span>→</span>
        </a>
        <a
          href="https://linkedin.com/in/yourprofile"
          className="hover:underline flex items-center space-x-2"
        >
          <span>Linked In</span>
          <span>→</span>
        </a>
        <a
          href="https://dribbble.com/yourprofile"
          className="hover:underline flex items-center space-x-2"
        >
          <span>Dribbble</span>
          <span>→</span>
        </a>
      </div>
    </div>
  );
}

export default ContactSection;
