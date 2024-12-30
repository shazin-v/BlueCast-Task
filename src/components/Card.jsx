import { useState } from "react";

const Card = () => {
  const [amount, setAmount] = useState(0);
  const [people, setPeople] = useState(0);
  const [tip, setTip] = useState(0);
  //   const [error, setError] = useState("");

  console.log(amount, "amount");
  console.log(people, "people");
  console.log(tip, "tip");

  const perPersonShare = amount / people || 0;
  console.log("perPersonShare", perPersonShare);

  var tipValue = (tip / 100) * amount;
  tipValue = Math.round(tipValue * 100) / 100;
  tipValue = tipValue.toFixed(2);
  console.log("tipValue", tipValue);

  //   if (people === 0) {
  //     setError("Can't be zero");
  //   }
  //   console.log("error",error)

  //   const Tip = [
  //     { id: 1, value: "5" },
  //     { id: 2, value: "10" },
  //     { id: 3, value: "15" },
  //     { id: 4, value: "25" },
  //     { id: 5, value: "50" },
  //   ];

  return (
    <>
      <div className="bg-white rounded-lg shadow-md  md:max-w-2xl md:flex p-5">
        {/* left side */}

        <div className="w-full md:w-1/2 p-5">
          <div className="flex flex-col  py-5">
            <label htmlFor="" className="font-bold text-gray-400">
              Bill
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="bg-[#f3f8fb] px-5 py-1 justify-between rounded-lg text-[#a3b4b4]"
              placeholder="$"
            />
          </div>

          <div>
            <label
              htmlFor=""
              className="text-[#748181] capitalize font-semibold py-5"
            >
              select Tip %
            </label>

            {/* tip */}
            <div>
              {/* {Tip.map((item, index) => {
{                console.log(Tip[0].value,"tip")
}                <li key={index}>
                  <button className="bg-[#00474b] text-white">{item.value}</button>;
                </li>;
              })} */}
              <div className="flex flex-wrap gap-2">
                <div className="bg-[#00474b] text-white rounded-lg w-1/3 list-none">
                  <input
                    type="radio"
                    id="a5"
                    name="amount"
                    value={5}
                    onChange={(e) => setTip(e.target.value)}
                    className="bg-[#00474b] text-white rounded-lg w-1/3 list-none"
                  />
                  <label htmlFor="a5">$5</label>
                </div>

                <div className="bg-[#00474b] text-white rounded-lg w-1/3 list-none">
                  <input
                    type="radio"
                    id="a10"
                    name="amount"
                    value={10}
                    onChange={(e) => setTip(e.target.value)}
                    className="bg-[#00474b] text-white rounded-lg w-1/3 list-none"
                  />
                  <label htmlFor="a10">$10</label>
                </div>

                <div className="bg-[#00474b] text-white rounded-lg w-1/3 list-none">
                  <input
                    type="radio"
                    id="a15"
                    name="amount"
                    value={15}
                    onChange={(e) => setTip(e.target.value)}
                    className="bg-[#00474b] text-white rounded-lg w-1/3 list-none"
                  />
                  <label htmlFor="a15">$15</label>
                </div>
                <div className="bg-[#00474b] text-white rounded-lg w-1/3 list-none">
                  <input
                    type="radio"
                    id="a25"
                    name="amount"
                    value={25}
                    onChange={(e) => setTip(e.target.value)}
                    className="bg-[#00474b] text-white rounded-lg w-1/3 list-none"
                  />
                  <label htmlFor="a25">$25</label>
                </div>
                <div className="bg-[#00474b] text-white rounded-lg w-1/3 list-none">
                  <input
                    type="radio"
                    id="a50"
                    name="amount"
                    value={50}
                    onChange={(e) => setTip(e.target.value)}
                    className="bg-[#00474b] text-white rounded-lg w-1/3 list-none"
                  />
                  <label htmlFor="a50">$50</label>
                </div>
                {/* custom */}

                <div className="bg-[#00474b] text-white rounded-lg w-1/3 list-none">
                  <input
                    type="number"
                    id="a60"
                    name="amount"
                    // value={50}
                    // onChange={(e) => setTip(e.target.value)}
                    placeholder="Custom"
                    className="bg-[#f3f8fb] text-[#567979] rounded-lg  list-none"
                  />
                </div>
              </div>
            </div>
          </div>

          <label
            htmlFor=""
            className="text-[#748181] capitalize font-semibold py-5"
          >
            Number of people
          </label>
          <input
            type="number"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            className="block bg-[#f3f8fb] px-5 py-1 justify-between"
            placeholder="$"
          />
          {/* <Icon /> */}
        </div>

        {/* right */}
        <div className="w-full md:w-1/2 bg-[#00474b] text-white rounded-lg">
          <div className="flex flex-col gap-5 p-5">
            <div className="flex justify-between gap-5">
              <div>
                <span>Tip Amount</span>
                <p className="text-[#4d8083] text-sm">/ Person</p>
              </div>

              <span className="text-[#35b2a4] text-xl font-bold">
                $ {tipValue}
              </span>
            </div>

            <div className="flex justify-between">
              <div>
                <span>Total</span>
                <p className="text-[#4d8083] text-sm">/ Person</p>
              </div>

              <span className="text-[#35b2a4] text-xl font-bold">
                ${perPersonShare}
              </span>
            </div>

            <button className="bg-[#9fe8df] uppercase cursor-pointer transform hover:bg-[#7af3e5] text-[#0c514e] w-full sticky bottom-0 ">
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
