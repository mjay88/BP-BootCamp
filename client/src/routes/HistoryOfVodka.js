import React from "react";
import VodkaBottles from "../assets/VodkaBottles.jpg";

const HistoryOfVodka = () => {
  return (
    <div className="flex flex-col py-4 px-4">
      <h1 className=" flex justify-center my-5 text-lg">History of Vodka</h1>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsam
          placeat aspernatur quis eos iusto, accusantium maiores optio sit
          eligendi nulla, harum cum? Officiis dignissimos fugiat vel inventore
          eius aperiam. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Hic amet labore veritatis voluptate et corporis deserunt ipsum
          debitis, sapiente saepe totam, ad nostrum numquam! In ea fuga
          accusamus fugit qui?
        </div>
        <div className="col-span-2 row-span-3">
          <img className="object-contain" src={VodkaBottles} />
        </div>
      </div>
    </div>
  );
};

export default HistoryOfVodka;
