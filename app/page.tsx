import Image from "next/image";
import { Search, MapPin, Home as HomeIcon, Trees, Building2, Building, Waves, Bed, Bath, Square } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fdfdfd] pb-20">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <QuickSearch />
        <FeaturedListings />
      </main>
    </div>
  );
}

function Navbar() {
  return (
    <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
      <div className="text-xl font-serif font-semibold tracking-tight">
        LandingProperty
      </div>
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
        <a href="#" className="text-gray-900">New Listings</a>
        <a href="#" className="hover:text-gray-900 transition-colors">Just Sold</a>
        <a href="#" className="hover:text-gray-900 transition-colors">Residential</a>
        <a href="#" className="hover:text-gray-900 transition-colors">Business</a>
        <a href="#" className="hover:text-gray-900 transition-colors">About</a>
      </nav>
      <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
        <Search className="w-4 h-4 text-gray-600" />
      </button>
    </header>
  );
}

function Hero() {
  return (
    <section className="py-12 md:py-20 flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-6 max-w-2xl">
        Find your Perfect Property
      </h1>
      <p className="text-gray-500 mb-10 max-w-md text-sm md:text-base">
        Your leading real estate agency helping you make the right property purchase.
      </p>
      <button className="px-6 py-2.5 rounded-full border border-gray-200 text-sm font-medium hover:bg-gray-50 transition-colors mb-16">
        New listings
      </button>

      {/* Image Gallery */}
      <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] flex justify-center items-stretch gap-2 md:gap-4">
        <div className="w-12 md:w-20 lg:w-24 rounded-full overflow-hidden relative hidden sm:block">
          <Image src="https://picsum.photos/seed/hero-s1/400/1200" alt="Property" fill className="object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="w-16 md:w-24 lg:w-32 rounded-full overflow-hidden relative hidden md:block">
          <Image src="https://picsum.photos/seed/hero-s2/400/1200" alt="Property" fill className="object-cover" referrerPolicy="no-referrer" />
        </div>
        
        <div className="flex-1 max-w-3xl rounded-3xl overflow-hidden relative">
          <Image src="https://picsum.photos/seed/hero-main/1200/800" alt="Main Property" fill className="object-cover" referrerPolicy="no-referrer" />
          <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-800 shadow-sm">
            7 Bed Estate
          </div>
        </div>

        <div className="w-16 md:w-24 lg:w-32 rounded-full overflow-hidden relative hidden md:block">
          <Image src="https://picsum.photos/seed/hero-s3/400/1200" alt="Property" fill className="object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="w-12 md:w-20 lg:w-24 rounded-full overflow-hidden relative hidden sm:block">
          <Image src="https://picsum.photos/seed/hero-s4/400/1200" alt="Property" fill className="object-cover" referrerPolicy="no-referrer" />
        </div>
      </div>
    </section>
  );
}

function QuickSearch() {
  const categories = [
    { name: "Beach Houses", icon: Waves, image: "https://picsum.photos/seed/beach/400/300", color: "bg-[#f4f1e1]", textColor: "text-gray-800" },
    { name: "Cabins", icon: Trees, image: "https://picsum.photos/seed/cabin/400/300", color: "bg-[#6b8e5c]", textColor: "text-white" },
    { name: "Large Estates", icon: HomeIcon, image: "https://picsum.photos/seed/estate/400/300", color: "bg-[#8b5a33]", textColor: "text-white" },
    { name: "Apartment", icon: Building2, image: "https://picsum.photos/seed/apartment/400/300", color: "bg-[#2b5c8f]", textColor: "text-white" },
    { name: "Loft", icon: Building, image: "https://picsum.photos/seed/loft/400/300", color: "bg-[#3a3a3a]", textColor: "text-white" },
    { name: "Waterfront", icon: MapPin, image: "https://picsum.photos/seed/waterfront/400/300", color: "bg-[#3b9b9b]", textColor: "text-white" },
  ];

  return (
    <section className="py-16 flex flex-col items-center">
      <h2 className="text-3xl font-serif text-gray-900 mb-8">Quick Search</h2>
      
      {/* Search Bar */}
      <div className="flex items-center bg-white border border-gray-200 rounded-full p-2 shadow-sm mb-12 max-w-3xl w-full overflow-x-auto">
        <div className="flex-1 min-w-[150px] px-4 py-2 border-r border-gray-100">
          <input type="text" placeholder="Address, Postal Code, City" className="w-full outline-none text-sm text-gray-700 placeholder:text-gray-400 bg-transparent" />
        </div>
        <div className="flex-1 min-w-[120px] px-4 py-2 border-r border-gray-100">
          <select className="w-full outline-none text-sm text-gray-700 bg-transparent appearance-none cursor-pointer">
            <option value="">Property Type</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
          </select>
        </div>
        <div className="flex-1 min-w-[120px] px-4 py-2 border-r border-gray-100">
          <select className="w-full outline-none text-sm text-gray-700 bg-transparent appearance-none cursor-pointer">
            <option value="">Listing Type</option>
            <option value="sale">For Sale</option>
            <option value="rent">For Rent</option>
          </select>
        </div>
        <div className="flex-1 min-w-[100px] px-4 py-2">
          <select className="w-full outline-none text-sm text-gray-700 bg-transparent appearance-none cursor-pointer">
            <option value="">Price</option>
            <option value="100k-500k">$100k - $500k</option>
            <option value="500k-1m">$500k - $1M</option>
          </select>
        </div>
        <button className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors ml-2 shrink-0">
          <Search className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
        {categories.map((cat, idx) => (
          <div key={idx} className="rounded-2xl overflow-hidden flex flex-col h-48 group cursor-pointer shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-32 w-full">
              <Image src={cat.image} alt={cat.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
            </div>
            <div className={`flex-1 flex flex-col justify-center px-4 ${cat.color} ${cat.textColor}`}>
              <cat.icon className="w-5 h-5 mb-1 opacity-80" />
              <span className="text-sm font-medium">{cat.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FeaturedListings() {
  const listings = [
    {
      id: 1,
      title: "982 Rosewood pl",
      price: "$2,340,000",
      location: "Villa in Spain",
      beds: 3,
      baths: 4,
      sqft: 2207,
      mainImage: "https://picsum.photos/seed/feat1/800/500",
      thumbs: [
        "https://picsum.photos/seed/feat1-1/100/100",
        "https://picsum.photos/seed/feat1-2/100/100",
        "https://picsum.photos/seed/feat1-3/100/100",
        "https://picsum.photos/seed/feat1-4/100/100",
        "https://picsum.photos/seed/feat1-5/100/100",
      ]
    },
    {
      id: 2,
      title: "1112 Ravens Street",
      price: "$15,120,000",
      location: "Villa in Spain",
      beds: 5,
      baths: 6,
      sqft: 4500,
      mainImage: "https://picsum.photos/seed/feat2/800/500",
      thumbs: [
        "https://picsum.photos/seed/feat2-1/100/100",
        "https://picsum.photos/seed/feat2-2/100/100",
        "https://picsum.photos/seed/feat2-3/100/100",
        "https://picsum.photos/seed/feat2-4/100/100",
        "https://picsum.photos/seed/feat2-5/100/100",
      ]
    },
    {
      id: 3,
      title: "1 SE Amar pl",
      price: "$12,340,000",
      location: "Villa in Spain",
      beds: 4,
      baths: 5,
      sqft: 3800,
      mainImage: "https://picsum.photos/seed/feat3/800/500",
      thumbs: [
        "https://picsum.photos/seed/feat3-1/100/100",
        "https://picsum.photos/seed/feat3-2/100/100",
        "https://picsum.photos/seed/feat3-3/100/100",
        "https://picsum.photos/seed/feat3-4/100/100",
        "https://picsum.photos/seed/feat3-5/100/100",
      ]
    }
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-serif text-gray-900 mb-8">Featured Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {listings.map((listing) => (
          <div key={listing.id} className="group cursor-pointer">
            {/* Main Image */}
            <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-2">
              <Image src={listing.mainImage} alt={listing.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              <div className="absolute top-3 right-3 bg-[#4ade80] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                New
              </div>
            </div>
            
            {/* Thumbnails */}
            <div className="flex gap-2 mb-4">
              {listing.thumbs.map((thumb, idx) => (
                <div key={idx} className="relative h-12 flex-1 rounded-lg overflow-hidden">
                  <Image src={thumb} alt="Thumbnail" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>

            {/* Details */}
            <div className="flex justify-between items-start mt-2">
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-semibold text-gray-900">{listing.title}</h3>
                <p className="text-sm font-bold text-gray-900">{listing.price}</p>
                <p className="text-[10px] text-gray-500">{listing.location}</p>
              </div>
              <div className="flex flex-col items-end gap-1 text-[10px] text-gray-600">
                <div className="flex items-center gap-1">
                  <Bed className="w-3 h-3" />
                  <span>{listing.beds} Bed</span>
                </div>
                <div className="flex items-center gap-1">
                  <Bath className="w-3 h-3" />
                  <span>{listing.baths} Bath</span>
                </div>
                <div className="flex items-center gap-1">
                  <Square className="w-3 h-3" />
                  <span>{listing.sqft} Sqft</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
