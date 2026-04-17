export default function TeamCard({ name, workstation, img }) {
  return (
    <div className="group relative h-90 w-50 hover:w-70 transition-all duration-500 overflow-hidden rounded-4xl cursor-pointer">
      {/* IMAGE */}
      <img
        src={img}
        alt={name}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

      {/* OVERLAY */}
      <div className="absolute inset-0 flex flex-col justify-end items-end p-6 text-white">
        <div
          className="text-right transform translate-x-20 opacity-0 
        group-hover:translate-x-0 group-hover:opacity-100
        transition-all duration-500 delay-200"
        >
          <h3 className="text-2xl font-bold">{name}</h3>
          <p className="text-lg">{workstation}</p>
        </div>
      </div>
    </div>
  );
}
