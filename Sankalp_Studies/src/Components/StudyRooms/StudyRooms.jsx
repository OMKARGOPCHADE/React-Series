import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
const rooms = [
    {
      name: 'Seating View',
      capacity: 'Up to 50+ People',
      features: 'Mineral-Water, Wi-Fi, AC, Charger-Point, Seprate-base for girls',
      image: img1,
    },
    {
      name: 'Study Point Overview',
      capacity: 'Up to 50+ People',
      features: 'Mineral-Water, Wi-Fi, AC, Charger-Point, Seprate-base for girls',
      image: img2,
    },
    {
      name: 'Single Cubicale',
      capacity: 'Up to 50+ People',
      features: 'Mineral-Water, Wi-Fi, AC, Charger-Point, Seprate-base for girls',
      image: img3,
    },
  ]
  
  export default function StudyRooms() {
    return (
      <section id="rooms" className="py-20 bg-white dark:bg-gray-800">
        <h3 className="text-3xl font-semibold text-center mb-10">Our Study Rooms</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {rooms.map((room, i) => (
            <div key={i} className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow">
              <img src={room.image} alt={room.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="text-xl font-semibold">{room.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{room.capacity}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{room.features}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  