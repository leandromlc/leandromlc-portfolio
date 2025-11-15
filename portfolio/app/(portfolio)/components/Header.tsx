const Header = () => (
  <header className="text-center mb-8 pb-4 border-b border-ink-black">
    <p className="text-sm font-serif-body font-semibold mb-2 text-faded-gray small-caps">
      Leandro M. | Software Developer
    </p>

    <h1 className="font-script text-6xl md:text-8xl text-ink-black leading-none mb-4">
      The Leandro Daily
    </h1>

    <p className="text-lg md:text-xl font-serif-fancy font-bold border-t border-b border-ink-black py-2 small-caps">
      A Professional Report on Automation, Data, and Cloud Innovation
    </p>

    <div className="flex justify-between items-center text-xs text-faded-gray mt-2 px-2">
      <span>Experience: 2+ Years</span>
      <span>Portfolio Edition</span>
    </div>
  </header>
);

export default Header;