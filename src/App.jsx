import { useState } from "react";
import { useEvent } from "./context/EventContext.jsx";


const events = [
  {
    id: 1,
    title: "Tech Fest 2026",
    category: "Technology",
    date: "25 AUG",
    fullDate: "25 August 2026",
    time: "10:00 AM",
    venue: "Main Auditorium",
    price: 100,
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80",
    description:
      "A full day of coding, robotics, innovation and everything tech.",
    color: "from-violet-500 to-indigo-600",
  },
  {
    id: 2,
    title: "Cultural Night",
    category: "Cultural",
    date: "30 AUG",
    fullDate: "30 August 2026",
    time: "6:00 PM",
    venue: "College Ground",
    price: 150,
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
    description:
      "Music, dance, drama and unforgettable performances under the lights.",
    color: "from-pink-500 to-rose-600",
  },
  {
    id: 3,
    title: "Inter College Cricket",
    category: "Sports",
    date: "05 SEP",
    fullDate: "5 September 2026",
    time: "9:00 AM",
    venue: "College Sports Ground",
    price: 80,
    image:
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=900&q=80",
    description:
      "Bring your squad and cheer for your college at the biggest cricket clash.",
    color: "from-emerald-500 to-green-600",
  },
  {
    id: 4,
    title: "Photography Workshop",
    category: "Workshop",
    date: "10 SEP",
    fullDate: "10 September 2026",
    time: "11:00 AM",
    venue: "Seminar Hall",
    price: 200,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80",
    description:
      "Learn photography, composition and creative storytelling from experts.",
    color: "from-orange-400 to-amber-600",
  },
  {
    id: 5,
    title: "Startup Summit",
    category: "Business",
    date: "15 SEP",
    fullDate: "15 September 2026",
    time: "10:30 AM",
    venue: "Conference Hall",
    price: 250,
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
    description:
      "Meet founders, creators and entrepreneurs building the next big thing.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: 6,
    title: "Music Festival",
    category: "Cultural",
    date: "20 SEP",
    fullDate: "20 September 2026",
    time: "5:00 PM",
    venue: "College Ground",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=900&q=80",
    description:
      "Live music, student bands and an evening made for good vibes.",
    color: "from-fuchsia-500 to-purple-600",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [favorites, setFavorites] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [tickets, setTickets] = useState(1);
  const [bookingMessage, setBookingMessage] = useState("");


  const {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice
  } = useEvent();

  const categories = [
    "All",
    "Technology",
    "Cultural",
    "Sports",
    "Workshop",
    "Business",
  ];

  const toggleFavorite = (id) => {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const filteredEvents = events.filter((event) => {
    const matchesCategory =
      selectedCategory === "All" ||
      event.category === selectedCategory;

    const matchesSearch =
      event.title.toLowerCase().includes(search.toLowerCase()) ||
      event.category.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const openBooking = (event) => {
    setSelectedEvent(event);
    setTickets(1);
    setBookingMessage("");
  };

  const closeBooking = () => {
    setSelectedEvent(null);
    setBookingMessage("");
  };

  const increaseTickets = () => {
    if (tickets < 6) {
      setTickets(tickets + 1);
    }
  };

  const decreaseTickets = () => {
    if (tickets > 1) {
      setTickets(tickets - 1);
    }
  };

const bookTickets = () => {
  for (let i = 0; i < tickets; i++) {
    addToCart(selectedEvent);
  }

  setBookingMessage(
    `You're in! ${tickets} ticket${tickets > 1 ? "s" : ""} booked for ${selectedEvent.title}.`
  );
};

  const scrollToEvents = () => {
    document
      .getElementById("events")
      ?.scrollIntoView({ behavior: "smooth" });

    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#faf9ff] text-slate-900">

      {/* ================= NAVBAR ================= */}

      <nav className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

          {/* LOGO */}

          <a
            href="#home"
            className="group flex items-center gap-3"
          >

            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-xl text-white shadow-lg transition duration-300 group-hover:rotate-6 group-hover:scale-105">
              ✦
            </div>

            <div>
              <h1 className="text-xl font-black tracking-tight">
                after<span className="text-violet-600">class</span>
              </h1>

              <p className="hidden text-[10px] font-medium tracking-widest text-slate-400 sm:block">
                YOUR CAMPUS. YOUR VIBE.
              </p>
            </div>

          </a>

          {/* DESKTOP NAV */}

          <div className="hidden items-center gap-8 md:flex">

            <a
              href="#home"
              className="text-sm font-semibold text-slate-600 transition hover:text-violet-600"
            >
              Home
            </a>

            <a
              href="#events"
              className="text-sm font-semibold text-slate-600 transition hover:text-violet-600"
            >
              Discover
            </a>

            <a
              href="#about"
              className="text-sm font-semibold text-slate-600 transition hover:text-violet-600"
            >
              About
            </a>

            <button
              onClick={() =>
                document
                  .getElementById("events")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-violet-600"
            >
              Explore ✦
            </button>

          </div>

          {/* MOBILE MENU */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xl md:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

        {menuOpen && (

          <div className="border-t border-slate-200 bg-white px-5 py-5 md:hidden">

            <div className="flex flex-col gap-4">

              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className="font-semibold"
              >
                Home
              </a>

              <a
                href="#events"
                onClick={() => setMenuOpen(false)}
                className="font-semibold"
              >
                Discover
              </a>

              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="font-semibold"
              >
                About
              </a>

              <button
                onClick={scrollToEvents}
                className="rounded-xl bg-slate-950 py-3 font-bold text-white"
              >
                Explore Events
              </button>

            </div>

          </div>

        )}

      </nav>

      {/* ================= HERO ================= */}

      <section
        id="home"
        className="relative overflow-hidden bg-[#faf9ff]"
      >

        {/* Decorative circles */}

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-violet-200/50 blur-3xl" />

        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-pink-200/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">

          {/* LEFT */}

          <div>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-bold text-violet-700">
              <span className="h-2 w-2 animate-pulse rounded-full bg-violet-600" />
              What's happening on campus?
            </div>

            <h2 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">

              Life doesn't stop

              <span className="block bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
                after class.
              </span>

            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-500">
              Find events, meet your people, catch the
              moments and make memories. Everything
              happening around campus — all in one place.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <button
                onClick={scrollToEvents}
                className="rounded-2xl bg-slate-950 px-7 py-4 font-bold text-white shadow-xl shadow-slate-900/10 transition duration-300 hover:-translate-y-1 hover:bg-violet-600"
              >
                Find your vibe →
              </button>

              <button
                onClick={() => {
                  setSelectedCategory("Cultural");
                  scrollToEvents();
                }}
                className="rounded-2xl border border-slate-200 bg-white px-7 py-4 font-bold text-slate-700 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:text-violet-600"
              >
                ✦ Trending
              </button>

            </div>

            <div className="mt-10 flex items-center gap-5">

              <div className="flex -space-x-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-pink-200">
                  🧑🏻
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-blue-200">
                  👩🏽
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-yellow-200">
                  🧑🏾
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-violet-200">
                  👩🏻
                </div>

              </div>

              <div>
                <p className="text-sm font-bold">
                  10K+ students
                </p>

                <p className="text-xs text-slate-400">
                  already finding their vibe
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT FEATURE CARD */}

          <div className="relative">

            <div className="absolute -inset-5 rounded-[3rem] bg-gradient-to-r from-violet-300/30 to-pink-300/30 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-3 shadow-2xl">

              <div className="relative h-[480px] overflow-hidden rounded-[1.5rem]">

                <img
                  src={events[1].image}
                  alt="Cultural Night"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

                <div className="absolute left-5 top-5">
                  <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-black text-slate-900 backdrop-blur">
                    TRENDING ✦
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white">

                  <p className="text-sm font-semibold text-white/70">
                    30 AUG • 6:00 PM
                  </p>

                  <h3 className="mt-2 text-4xl font-black">
                    Cultural Night
                  </h3>

                  <p className="mt-2 text-sm text-white/70">
                    Music • Dance • Drama • Good vibes
                  </p>

                  <button
                    onClick={() => openBooking(events[1])}
                    className="mt-5 w-full rounded-xl bg-white py-3 font-bold text-slate-950 transition hover:bg-violet-100"
                  >
                    Get Tickets — ₹150
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= STATS ================= */}

      <section className="border-y border-slate-200 bg-white">

        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-slate-200 sm:grid-cols-4 sm:divide-y-0">

          <div className="p-7 text-center">
            <p className="text-3xl font-black">
              50+
            </p>
            <p className="mt-1 text-sm text-slate-400">
              events
            </p>
          </div>

          <div className="p-7 text-center">
            <p className="text-3xl font-black">
              10K+
            </p>
            <p className="mt-1 text-sm text-slate-400">
              students
            </p>
          </div>

          <div className="p-7 text-center">
            <p className="text-3xl font-black">
              25+
            </p>
            <p className="mt-1 text-sm text-slate-400">
              clubs
            </p>
          </div>

          <div className="p-7 text-center">
            <p className="text-3xl font-black">
              ∞
            </p>
            <p className="mt-1 text-sm text-slate-400">
              memories
            </p>
          </div>

        </div>

      </section>

      {/* ================= EVENTS ================= */}

      <section
        id="events"
        className="mx-auto max-w-7xl px-5 py-20 lg:px-8"
      >

        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">

          <div>

            <p className="text-sm font-black tracking-widest text-violet-600">
              DISCOVER
            </p>

            <h2 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">
              Find your next vibe.
            </h2>

            <p className="mt-3 text-slate-500">
              Whatever you're into, there's something waiting.
            </p>

          </div>

          <div className="rounded-full bg-violet-50 px-4 py-2 text-sm font-bold text-violet-600">
            {filteredEvents.length} events found ✦
          </div>

        </div>

        {/* SEARCH */}

        <div className="mb-7 flex max-w-2xl items-center rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition focus-within:border-violet-400 focus-within:ring-4 focus-within:ring-violet-100">

          <span className="mr-3 text-lg">
            ⌕
          </span>

          <input
            type="text"
            placeholder="Search events, categories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent text-sm outline-none"
          />

          {search && (
            <button
              onClick={() => setSearch("")}
              className="text-slate-400 hover:text-slate-700"
            >
              ✕
            </button>
          )}

        </div>

        {/* FILTERS */}

        <div className="mb-10 flex gap-2 overflow-x-auto pb-2">

          {categories.map((category) => (

            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-bold transition ${
                selectedCategory === category
                  ? "bg-slate-950 text-white shadow-lg"
                  : "border border-slate-200 bg-white text-slate-500 hover:border-violet-300 hover:text-violet-600"
              }`}
            >
              {category}
            </button>

          ))}

        </div>

        {/* CARDS */}

        {filteredEvents.length > 0 ? (

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

            {filteredEvents.map((event) => (

              <div
                key={event.id}
                className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-100"
              >

                {/* IMAGE */}

                <div className="relative h-56 overflow-hidden">

                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                  {/* CATEGORY */}

                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-black backdrop-blur">
                      {event.category}
                    </span>
                  </div>

                  {/* FAVORITE */}

                  <button
                    onClick={() => toggleFavorite(event.id)}
                    className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-lg backdrop-blur transition hover:scale-110"
                  >
                    {favorites.includes(event.id)
                      ? "♥"
                      : "♡"}
                  </button>

                  {/* DATE */}

                  <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-lg">

                    <div className="text-center">
                      <p className="text-sm font-black leading-none">
                        {event.date.split(" ")[0]}
                      </p>

                      <p className="mt-1 text-[9px] font-bold text-violet-600">
                        {event.date.split(" ")[1]}
                      </p>
                    </div>

                  </div>

                </div>

                {/* CONTENT */}

                <div className="p-5">

                  <div className="flex items-start justify-between gap-3">

                    <h3 className="text-xl font-black tracking-tight">
                      {event.title}
                    </h3>

                    <span className="whitespace-nowrap text-sm font-black text-violet-600">
                      ₹{event.price}
                    </span>

                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {event.description}
                  </p>

                  <div className="mt-5 space-y-2 text-xs font-semibold text-slate-400">

                    <p>
                      ⏰ {event.time}
                    </p>

                    <p>
                      📍 {event.venue}
                    </p>

                  </div>

                  <button
                    onClick={() => openBooking(event)}
                    className="mt-6 w-full rounded-xl bg-slate-950 py-3.5 text-sm font-black text-white transition duration-300 hover:bg-violet-600"
                  >
                    Get Tickets →
                  </button>

                </div>

              </div>

            ))}

          </div>

        ) : (

          <div className="rounded-3xl border border-slate-200 bg-white px-6 py-20 text-center">

            <div className="text-5xl">
              🫠
            </div>

            <h3 className="mt-5 text-2xl font-black">
              Nothing here yet.
            </h3>

            <p className="mt-2 text-slate-500">
              Try searching for something else.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setSelectedCategory("All");
              }}
              className="mt-6 rounded-xl bg-slate-950 px-6 py-3 font-bold text-white"
            >
              Clear filters
            </button>

          </div>

        )}

      </section>

      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="bg-slate-950 px-5 py-20 text-white lg:px-8"
      >

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-2">

            <div>

              <p className="text-sm font-black tracking-widest text-violet-400">
                ABOUT AFTERCLASS
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                College is more than just classes.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
                AfterClass brings your campus events,
                communities and experiences together.
                Discover something new, meet your people
                and make memories worth keeping.
              </p>

              <button
                onClick={scrollToEvents}
                className="mt-8 rounded-xl bg-white px-6 py-3 font-bold text-slate-950 transition hover:bg-violet-100"
              >
                Explore events →
              </button>

            </div>

            <div className="grid grid-cols-2 gap-4">

              <div className="rounded-3xl bg-white/5 p-7 transition hover:bg-white/10">
                <div className="text-3xl">
                  🎟️
                </div>
                <h3 className="mt-5 text-lg font-bold">
                  Easy tickets
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Find and book events without the hassle.
                </p>
              </div>

              <div className="rounded-3xl bg-white/5 p-7 transition hover:bg-white/10">
                <div className="text-3xl">
                  ✨
                </div>
                <h3 className="mt-5 text-lg font-bold">
                  Good vibes
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Discover experiences you'll actually love.
                </p>
              </div>

              <div className="rounded-3xl bg-white/5 p-7 transition hover:bg-white/10">
                <div className="text-3xl">
                  📱
                </div>
                <h3 className="mt-5 text-lg font-bold">
                  Anywhere
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Built to look good on every screen.
                </p>
              </div>

              <div className="rounded-3xl bg-white/5 p-7 transition hover:bg-white/10">
                <div className="text-3xl">
                  🫶
                </div>
                <h3 className="mt-5 text-lg font-bold">
                  Your people
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Connect through the things you love.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="bg-black px-5 py-10 text-center text-slate-500">

        <div className="mx-auto max-w-7xl">

          <h2 className="text-2xl font-black text-white">
            after<span className="text-violet-500">class</span>
          </h2>

          <p className="mt-3 text-sm">
            Your campus. Your people. Your vibe.
          </p>

          <p className="mt-8 text-xs">
            © 2026 AfterClass — College Event & Ticket Management System
          </p>

        </div>

      </footer>

      {/* ================= BOOKING MODAL ================= */}

      {selectedEvent && (

        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
          onClick={closeBooking}
        >

          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl"
          >

            <div className="relative h-48">

              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <button
                onClick={closeBooking}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 font-bold"
              >
                ✕
              </button>

              <div className="absolute bottom-5 left-5 text-white">

                <p className="text-xs font-bold uppercase tracking-widest text-white/70">
                  {selectedEvent.category}
                </p>

                <h2 className="mt-1 text-2xl font-black">
                  {selectedEvent.title}
                </h2>

              </div>

            </div>

            <div className="p-6">

              <div className="grid grid-cols-2 gap-3">

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-400">
                    Date
                  </p>
                  <p className="mt-1 text-sm font-bold">
                    {selectedEvent.fullDate}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-400">
                    Time
                  </p>
                  <p className="mt-1 text-sm font-bold">
                    {selectedEvent.time}
                  </p>
                </div>

              </div>

              <div className="mt-3 rounded-xl bg-slate-50 p-4">

                <p className="text-xs text-slate-400">
                  Venue
                </p>

                <p className="mt-1 text-sm font-bold">
                  📍 {selectedEvent.venue}
                </p>

              </div>

              <div className="mt-6">

                <p className="mb-3 text-sm font-bold">
                  Number of tickets
                </p>

                <div className="flex items-center justify-between rounded-xl border border-slate-200 p-2">

                  <button
                    onClick={decreaseTickets}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-xl font-bold hover:bg-slate-200"
                  >
                    −
                  </button>

                  <span className="text-lg font-black">
                    {tickets}
                  </span>

                  <button
                    onClick={increaseTickets}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-xl font-bold hover:bg-slate-200"
                  >
                    +
                  </button>

                </div>

              </div>

              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">

                <div>
                  <p className="text-xs text-slate-400">
                    Total
                  </p>

                  <p className="text-3xl font-black">
                    ₹{selectedEvent.price * tickets}
                  </p>
                </div>

                <button
                  onClick={bookTickets}
                  className="rounded-xl bg-slate-950 px-6 py-3 font-bold text-white transition hover:bg-violet-600"
                >
                  Confirm →
                </button>

              </div>

              {bookingMessage && (

                <div className="mt-4 rounded-xl bg-green-50 p-4 text-center text-sm font-bold text-green-700">
                  ✓ {bookingMessage}
                </div>

                            )}

            </div>

          </div>

        </div>

      )}

      {/* CART SECTION */}
      <div className="mx-auto mt-10 max-w-5xl rounded-2xl bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-2xl font-bold text-slate-900">
          🎟️ My Cart
        </h2>

        {cart.length === 0 ? (
          <p className="text-slate-500">
            No tickets added yet.
          </p>
        ) : (
          <div className="space-y-4">

            {cart.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-xl bg-slate-50 p-4"
              >
                <div>
                  <h3 className="font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-500">
                    ₹{item.price}
                  </p>
                </div>

                <button
                  onClick={() => removeFromCart(index)}
                  className="rounded-lg bg-red-500 px-4 py-2 text-white"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="border-t pt-4 text-right">
              <p className="text-xl font-bold">
                Total: ₹{totalPrice}
              </p>
            </div>

          </div>
        )}
      </div>

    </div>
  );

}

export default App;