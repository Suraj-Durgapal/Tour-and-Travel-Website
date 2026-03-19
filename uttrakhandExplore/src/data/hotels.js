const hotels = [
    {
      id: 1,
      img: [
        { img1: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg" },
        { img2: "https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg" },
        { img3: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg" }
      ],
      name: "The Grand Heritage",
      location: "Mussoorie, Uttarakhand",
      rating: 4.8,
      discount: "15%",
      reviews: 450,
      baseprice: 8500,
      tax: 1200,
      rooms: [
        {
          id: 101,
          type: "Royal Suite",
          price: 4500,
          capacity: "2 Guests",
          amenities: ["Mini Bar", "Wifi", "King Bed"]
        },
        {
          id: 102,
          type: "Maharani Deluxe",
          price: 6000,
          capacity: "3 Guests",
          amenities: ["AC", "Wifi", "Bathtub", "Garden View"]
        }
      ],
      amenities: [ "Valet Parking", "Restaurant", "Heritage Walk", "Swimming Pool"]
    },
    {
      id: 2,
      img: [
        { img1: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg" },
        { img2: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg" },
        { img3: "https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg" }
      ],
      name: "Ocean Mist Resort",
      location: "Rishikesh, Uttarakhand",
      rating: 4.5,
      discount: "30%",
      reviews: 890,
      baseprice: 4200,
      tax: 450,
      rooms: [
        {
          id: 201,
          type: "Beachfront Hut",
          price: 3000,
          capacity: "2 Guests",
          amenities: ["Sea View", "Wifi", "Hammock"]
        },
        {
          id: 202,
          type: "Luxury Villa",
          price: 8000,
          capacity: "5 Guests",
          amenities: ["Private Pool", "Kitchen", "AC", "TV"]
        }
      ],
      amenities: ["Beach Access", "Bar", "Live Music", "Free Wifi", "Scooter Rental"]
    },
    {
      id: 3,
      img: [
        { img1: "https://images.pexels.com/photos/7166944/pexels-photo-7166944.jpeg" },
        { img2: "https://images.pexels.com/photos/2029722/pexels-photo-2029722.jpeg" },
        { img3: "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg" }
      ],
      name: "Lake View Hotel",
      location: "Nainital, Uttarakhand",
      rating: 4.3,
      discount: "25%",
      reviews: 203,
      baseprice: 5000,
      tax: 530,
      rooms: [
        {
          id: 101,
          type: "Deluxe 2 Room",
          price: 2500,
          capacity: "2 Guests",
          amenities: ["AC", "Wifi", "TV"]
        },
        {
          id: 102,
          type: "Super Deluxe Triple Room",
          price: 3500,
          capacity: "4 Guests",
          amenities: ["AC", "Wifi", "TV", "Balcony"]
        },
        {
          id: 103,
          type: "Family Room",
          price: 5000,
          capacity: "6 Guests",
          amenities: ["AC", "Wifi", "TV", "Balcony", "Living Area"]
        }
      ],
      amenities: ["Free Wifi", "Breakfast", "Gym", "Air Conditioning", "Parking", "Bonfire", "Swimming Pool", "Power Backup"]
    },
    {
      id: 4,
      img: [
        { img1: "https://images.pexels.com/photos/2403209/pexels-photo-2403209.jpeg" },
        { img2: "https://images.pexels.com/photos/2373711/pexels-photo-2373711.jpeg" },
        { img3: "https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg" }
      ],
      name: "The Himalayan Retreat",
      location: "Haridwar, Uttarakhand",
      rating: 4.6,
      discount: "20%",
      reviews: 312,
      baseprice: 3800,
      tax: 400,
      rooms: [
        {
          id: 401,
          type: "Mountain View Room",
          price: 2200,
          capacity: "2 Guests",
          amenities: ["Heater", "Wifi", "Coffee Maker"]
        },
        {
          id: 402,
          type: "Attic Suite",
          price: 4200,
          capacity: "3 Guests",
          amenities: ["Fireplace", "Wifi", "Wooden Interiors"]
        }
      ],
      amenities: ["Trekking Guide", "Bonfire", "Room Service", "Laundry", "Parking"]
    },
    {
      id: 5,
      img: [
        { img1: "https://images.pexels.com/photos/210604/pexels-photo-210604.jpeg" },
        { img2: "https://images.pexels.com/photos/323311/pexels-photo-323311.jpeg" },
        { img3: "https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg" }
      ],
      name: "Urban Skyline Inn",
      location: "Nainital, Uttarakhand",
      rating: 4.1,
      discount: "10%",
      reviews: 1105,
      baseprice: 6200,
      tax: 900,
      rooms: [
        {
          id: 501,
          type: "Standard Business",
          price: 5500,
          capacity: "1 Guest",
          amenities: ["Work Desk", "Wifi", "Iron"]
        },
        {
          id: 502,
          type: "Executive Suite",
          price: 9500,
          capacity: "2 Guests",
          amenities: ["City View", "Mini Fridge", "Bathtub", "AC"]
        }
      ],
      amenities: ["Gym", "Business Center", "Airport Shuttle", "Bar", "24/7 Concierge"]
    },
    {
      id: 6,
      img: [
        { img1: "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg" },
        { img2: "https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg" },
        { img3: "https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg" }
      ],
      name: "Backwater Bliss Villa",
      location: "Alleppey, Kerala",
      rating: 4.9,
      discount: "18%",
      reviews: 156,
      baseprice: 7500,
      tax: 800,
      rooms: [
        {
          id: 601,
          type: "Premium Houseboat Room",
          price: 7500,
          capacity: "2 Guests",
          amenities: ["Deck", "AC", "Traditional Meals"]
        },
        {
          id: 602,
          type: "Luxury Floating Suite",
          price: 12000,
          capacity: "4 Guests",
          amenities: ["Private Deck", "Wifi", "Personal Chef"]
        }
      ],
      amenities: ["Fishing Gear", "Ayurvedic Spa", "Boating", "Traditional Kerala Food", "Sunrise View"]
    }
  ];

export default hotels;