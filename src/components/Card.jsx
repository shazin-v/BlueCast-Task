import { useState } from "react";
import Icon from "../img/icon-person.svg"

const Card = () => {
  const [amount, setAmount] = useState("");
  const [people, setPeople] = useState("");
  const [tip, setTip] = useState("");
  const [error, setError] = useState("");

  console.log(amount, "amount");
  console.log(people, "people");
  console.log(tip, "tip");

  const perPersonShare = amount / people || 0;
  console.log("perPersonShare", perPersonShare);

  const tipValue = (tip / 100) * amount || 0;
  const totalAmountPerPerson =
    people > 0 ? (parseFloat(amount) + parseFloat(tipValue)) / people : 0;
  const tipAmountPerPerson = people > 0 ? tipValue / people : 0;

  const handleReset = () => {
    setAmount("");
    setPeople("");
    setTip("");
    setError("");
  };
  const handlePeopleChange = (e) => {
    const value = e.target.value;
    setPeople(value);
    if (value <= 0) {
      setError("Can't be zero");
    } else {
      setError("");
    }
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg md:w-[800px] flex flex-col md:flex-row p-6">
        {/* left side */}

        <div className="w-full md:w-1/2 p-5">
          <div className="flex flex-col  py-5">
            <label htmlFor="" className="font-bold text-gray-400">
              Bill
            </label>
            <div className="relative mt-2">
              <span className="absolute left-4 top-3 text-[#7f9d9f]">$</span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="bg-[#f3f8fb] w-full px-10 py-3 rounded-md text-[#a3b4b4] font-bold text-right"
                placeholder="0"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor=""
              className="text-[#748181] capitalize font-semibold py-5"
            >
              select Tip %
            </label>

            {/* tip */}
            <div className="grid grid-cols-3 gap-3 mt-3">
              {[5, 10, 15, 25, 50].map((tipValue) => (
                <button
                  key={tipValue}
                  onClick={() => setTip(tipValue)}
                  className={`py-3 rounded-md text-lg font-bold ${
                    tip === tipValue
                      ? "bg-[#26c2ad] text-white"
                      : "bg-[#00474b] text-white"
                  }`}
                >
                  {tipValue}%
                </button>
              ))}
              <input
                type="number"
                onChange={(e) => setTip(e.target.value)}
                className=" py-3 rounded-md bg-[#f3f9fa] text-[#00474b] font-bold text-center placeholder:text-[#7f9d9f]"
                placeholder="Custom"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center justify-between">
          <label
            htmlFor=""
            className="text-[#748181] capitalize font-semibold py-5"
            >
            Number of people
          </label>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
              </div>
        <div className="relative">
          <input
            type="number"
            value={people}
            onChange={handlePeopleChange}
            className={`bg-[#f3f9fa] w-full px-10 py-3 rounded-md text-[#00474b] font-bold text-right ${
                error ? "border border-red-500" : ""
                }`}
                placeholder="0"
                />
          <span className="absolute left-4 top-4 text-[#7f9d9f]">
             <img src={Icon} alt="" />
            </span>
                </div>
        </div>
        </div>
      
        {/* right */}
        <div className="w-full md:w-1/2 bg-[#00474b] text-white rounded-xl p-6 flex flex-col justify-between">
         <div>
            <div className="flex justify-between gap-5">
              <div>
                <span>Tip Amount</span>
                <p className="text-[#4d8083] text-sm">/ Person</p>
              </div>

              <span className="text-[#35b2a4] text-xl font-bold">
                ${tipAmountPerPerson.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between">
              <div>
                <span>Total</span>
                <p className="text-[#4d8083] text-sm">/ Person</p>
              </div>

              <span className="text-[#35b2a4] text-xl font-bold">
                ${totalAmountPerPerson.toFixed(2)}
              </span>
            </div>
          </div>

            <button onClick={handleReset} className="mt-6 bg-[#26c2ad] text-[#00474b] text-lg font-bold py-3 rounded-md uppercase hover:bg-[#9fe8df]"
            >
              Reset
            </button>
        </div>
      </div>
    </>
  );
};

export default Card;
