import React from "react";

const Home = () => {
  return (
    <div className="flex">
      <div className="h-screen rounded-xl border-2 border-slate-300 w-1/5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
        magnam.
      </div>
      <div className="h-screen rounded-xl border-2 border-slate-300 w-3/5">
        <div className=" rounded-xl border-2 border-slate-300 h-[89vh] mb-1 overflow-scroll flex flex-col-reverse gap-1">
          <p className="rounded-xl border-2 border-red-300">{lorem}</p>
          <p className="rounded-xl border-2 border-red-300">{lorem}</p>
          <p className="rounded-xl border-2 border-red-300">{lorem}</p>
          <p className="rounded-xl border-2 border-red-300">{lorem}</p>
          <p className="rounded-xl border-2 border-red-300">{lorem}</p>
          <p className="rounded-xl border-2 border-red-300">{lorem}</p>
          <p className="rounded-xl border-2 border-red-300">{lorem}</p>
        </div>
        <div className=" rounded-xl border-2 border-slate-300 h-[10vh]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, quae?
        </div>
      </div>
      <div className="h-screen rounded-xl border-2 border-slate-300 w-2/5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
        magnam.
      </div>
    </div>
  );
};

export default Home;

const lorem = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
pariatur natus hic harum a libero sit delectus ipsum nesciunt
quisquam? Molestias ipsa minus dolorum hic necessitatibus officiis
corrupti ex itaque? Lorem ipsum dolor sit, amet consectetur
adipisicing elit. Similique pariatur natus hic harum a libero sit
`;
