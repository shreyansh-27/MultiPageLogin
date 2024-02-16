import { useEffect, useState } from "react";

export default function Summary(props) {
  const [data, setData] = useState(props.data);
  const { hosting, period, profile, storage, multiplayer, prices } = data;
  const [price, setPrice] = useState(0);

  useEffect(() => {
    calculation();
  }, [hosting]);

  async function calculation() {
    const cost = await prices[period][hosting];
    console.log(profile);
    setPrice(cost);
  }

  console.log(data);
  return (
    <div className="flex flex-col items-center bg-blue-100 rounded-md p-2 w-full max-w-[500px]">
      <div className="flex relative items-center justify-between w-[400px]">
        <div className="flex justify-between ">
          <h1 className="absolute mb-6">{hosting}</h1>
          <p className=" mt-6">change</p>
        </div>
        <h1 className="">${price}/mo</h1>
      </div>
      <div className="w-full">
        <div class="relative flex py-5 items-center">
          <div class="flex-grow border-t border-gray-400"></div>
        </div>
        <div className="w-full">
          {multiplayer === "checked" && (
            <div className="flex justify-between">
              <p>Online service</p>
              <p>+${prices[period].addON.multiplayer}</p>
            </div>
          )}
          {storage === "checked" && (
            <div className="flex justify-between">
              <p>Larger Storage</p>
              <p>+${prices[period].addON.storage}</p>
            </div>
          )}
          {profile === "checked" && (
            <div className="flex justify-between">
              <p>Customizable profile</p>
              <p>+${prices[period].addON.profile}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
