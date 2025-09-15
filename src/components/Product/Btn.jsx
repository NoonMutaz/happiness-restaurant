import { assets } from "../../assets/assets";
export default function Btn({ name, onClick, img2, sectionRef }) {

const buttonData = [
  {
    name: "All",
    img2: "https://images.pexels.com/photos/32766647/pexels-photo-32766647.jpeg",
    onClick: () => console.log("All clicked"),
  },
  {
    name: "Cars",
    img2: assets.yellowCar,
    onClick: () => console.log("Cars clicked"),
  },
  {
    name: "Furniture",
    img2: assets.oldTv,
    onClick: () => console.log("Furniture clicked"),
  },
  {
    name: "Clothing",
    img2: assets.clothing,
    onClick: () => console.log("Clothing clicked"),
  },
  {
    name: "Random",
    img2: "https://images.pexels.com/photos/2911521/pexels-photo-2911521.jpeg",
    onClick: () => console.log("Random clicked"),
  },
  {
    name: "Free",
    img2: "https://images.pexels.com/photos/7957755/pexels-photo-7957755.jpeg",
    onClick: () => console.log("Free clicked"),
  },
  {
    name: "Art",
    img2: assets.art,
    onClick: () => console.log("Art clicked"),
  },
  {
    name: "Books",
    img2: assets.books,
    onClick: () => console.log("Books clicked"),
  },
];

  return (
    <div ref={sectionRef} className="flex flex-col items-center ">
      {" "}
      <div
        style={{
          backgroundImage: `url(${img2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxShadow: "3px 3px 7px rgba(0, 0, 0, 0.6)",
        }}
        className=" h-[60px] flex items-center justify-center w-[60px] cursor-pointer hover:text-[white]  rounded-full   font-sans font-semibold   text-[white] bg-[#bd3a3a]  "
        onClick={onClick}
      >
        {" "}
      </div>
      <div className="text-black font-bold mt-[10px]">{name}</div>
    </div>
  );
}