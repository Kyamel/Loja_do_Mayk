export default function Mapa() {
  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-md">
      <iframe
        src="https://www.openstreetmap.org/export/embed.html?bbox=-43.1727057%2C-19.8411918%2C-43.1627057%2C-19.8311918&layer=mapnik&marker=-19.8361918%2C-43.1677057"
        style={{ border: 0, width: "100%", height: "100%" }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
}


