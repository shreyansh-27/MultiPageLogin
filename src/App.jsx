import { useState } from "react";
import SwitchButton from "./components/Switch.jsx";
import Summary from "./components/Summary.jsx";
import bgSidebar from "./assets/images/bg-sidebar-desktop.svg";

const prices = {
  monthly: {
    Arcade: 9,
    Advanced: 12,
    Pro: 15,
    addON: {
      multiplayer: 1,
      profile: 2,
      storage: 2,
    },
  },
  yearly: {
    Arcade: 90,
    Advanced: 120,
    Pro: 150,
    addON: {
      multiplayer: 10,
      profile: 20,
      storage: 20,
    },
  },
};

export default function App() {
  const [steps, setSteps] = useState(0);
  const [switchOn, setSwitchOn] = useState(false);
  const [formData, setFormData] = useState({
    prices,
    period: "monthly",
    hosting: "Arcade",
  });

  function onToggle() {
    setSwitchOn((switchOn) => !switchOn);
    const periodSet = formData.period === "monthly" ? "yearly" : "monthly";
    setFormData({ ...formData, period: periodSet });
  }

  function next() {
    if (steps < 3) {
      const nxtStep = steps + 1;
      setSteps(nxtStep);
    }
  }

  function prev() {
    if (steps > 0) {
      const prevStep = steps - 1;
      setSteps(prevStep);
    }
  }

  function handleInputChange(event) {
    const { name, value, checked } = event.target;
    console.log(checked);
    if (checked) {
      setFormData({ ...formData, [name]: value });
    } else if (name === "Name" || name === "email" || name === "phone") {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  }

  return (
    <div className="relative flex w-screen h-screen items-center justify-center">
      <div className="flex w-full max-w-[900px] max-h-3/4 border border-gray-800 rounded-md p-2 relative">
        <div className="flex flex-col w-full h-full min-w-[240px] max-w-[250px] min-h-[500px] bg-bgsidebar bg-cover bg-no-repeat text-white border rounded-md p-2">
          <div className="flex items-center">
            <p className="flex items-center justify-center border border-gray-300 rounded-full w-[35px] h-[35px] m-1 p-3">
              1
            </p>
            <div className="flex flex-col">
              <p className="text-[12px] text-gray-300">Step 1</p>
              <h1>YOUR INFO</h1>
            </div>
          </div>
          <div className="flex items-center">
            <p className="flex items-center justify-center border border-gray-300 rounded-full w-[35px] h-[35px] m-1 p-3">
              2
            </p>
            <div className="flex flex-col">
              <p className="text-[12px] text-gray-300">Step 2</p>
              <h1>SELECT PLANS</h1>
            </div>
          </div>
          <div className="flex items-center">
            <p className="flex items-center justify-center border border-gray-300 rounded-full w-[35px] h-[35px] m-1 p-3">
              3
            </p>
            <div className="flex flex-col">
              <p className="text-[12px] text-gray-300">Step 3</p>
              <h1>ADD-ONS</h1>
            </div>
          </div>
          <div className="flex items-center">
            <p className="flex items-center justify-center border border-gray-300 rounded-full w-[35px] h-[35px] m-1 p-3">
              4
            </p>
            <div className="flex flex-col">
              <p className="text-[12px] text-gray-300">Step 4</p>
              <h1>SUMMARY</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full border max-w-[800px] ml-2 items-center justify-center">
          {steps === 0 && (
            <div className="flex flex-col items-left gap-2 mb-20">
              <h1 className="text-4xl">Personal info</h1>
              <p className="text-gray-400">
                Please provide your name, email address and phone number.
              </p>
              <label htmlFor="Name">Name</label>
              <input
                className="border border-slate-300 rounded-md p-3 text-md"
                type="text"
                placeholder="e.g. Stephen King"
                name="Name"
                value={formData.Name}
                onChange={handleInputChange}
              />
              <label>Email</label>
              <input
                className="border border-slate-300 rounded-md p-3 text-md"
                type="email"
                name="email"
                placeholder="e.g.stephenking@lorem.com"
                value={formData.email}
                onChange={handleInputChange}
              />
              <label>Phone</label>
              <input
                className="border border-slate-300 rounded-md p-3 text-md"
                type="number"
                name="phone"
                placeholder="e.g.+1 234 567 890"
                value={formData.phone}
                id=""
                onChange={handleInputChange}
              />
            </div>
          )}
          {steps === 1 && (
            <div className="flex flex-col">
              <h1 className="text-4xl absolute top-10 w-full ">
                Select your plan
              </h1>
              <p className="text-gray-400 absolute top-20">
                You have the option of monthly or yearly billing
              </p>
              {!switchOn ? (
                <div className="">
                  <ul class="grid w-full gap-6 md:grid-cols-3">
                    <li>
                      <input
                        type="radio"
                        id="Arcade"
                        name="hosting"
                        value="Arcade"
                        checked={formData.hosting === "Arcade"}
                        className="hidden peer"
                        onChange={handleInputChange}
                        required
                      />
                      <label
                        for="Arcade"
                        className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-700 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-700 dark:text-gray-600 dark:bg-white dark:hover:bg-blue-100"
                      >
                        <div className="flex flex-col gap-4">
                          <div className="w-10 h-10 bg-arcade"></div>
                          <div>
                            <div className="w-full text-lg font-semibold">
                              Arcade
                            </div>
                            <div class="w-full">$9/mo</div>
                          </div>
                        </div>
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="Advanced"
                        name="hosting"
                        value="Advanced"
                        checked={formData.hosting === "Advanced"}
                        onChange={handleInputChange}
                        className="hidden peer"
                      />
                      <label
                        for="Advanced"
                        className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-700 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-700 dark:text-gray-600 dark:bg-white dark:hover:bg-blue-100"
                      >
                        <div className="flex flex-col gap-4">
                          <div className="w-10 h-10 bg-advanced"></div>
                          <div>
                            <div className="w-full text-lg font-semibold">
                              Advanced
                            </div>
                            <div class="w-full">$12/mo</div>
                          </div>
                        </div>
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="Pro"
                        name="hosting"
                        value="Pro"
                        checked={formData.hosting === "Pro"}
                        onChange={handleInputChange}
                        className="hidden peer"
                      />
                      <label
                        for="Pro"
                        className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-700 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-700 dark:text-gray-600 dark:bg-white dark:hover:bg-blue-100"
                      >
                        <div className="flex flex-col gap-4">
                          <div className="w-10 h-10 bg-pro"></div>
                          <div>
                            <div className="w-full text-lg font-semibold">
                              Pro
                            </div>
                            <div class="w-full">$15/mo</div>
                          </div>
                        </div>
                      </label>
                    </li>
                  </ul>
                </div>
              ) : (
                <div>
                  <ul class="grid w-full gap-6 md:grid-cols-3">
                    <li>
                      <input
                        type="radio"
                        id="Arcade"
                        name="hosting"
                        value="Arcade"
                        checked={formData.hosting === "Arcade"}
                        className="hidden peer"
                        onChange={handleInputChange}
                        required
                      />
                      <label
                        for="Arcade"
                        className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-700 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-700 dark:text-gray-600 dark:bg-white dark:hover:bg-blue-100"
                      >
                        <div className="flex flex-col gap-4">
                          <div className="w-10 h-10 bg-arcade"></div>
                          <div>
                            <div className="w-full text-lg font-semibold">
                              Arcade
                            </div>
                            <div class="w-full">$90/mo</div>
                            <div className="w-full">2 months free</div>
                          </div>
                        </div>
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="Advanced"
                        name="hosting"
                        value="Advanced"
                        checked={formData.hosting === "Advanced"}
                        onChange={handleInputChange}
                        className="hidden peer"
                      />
                      <label
                        for="Advanced"
                        className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-700 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-700 dark:text-gray-600 dark:bg-white dark:hover:bg-blue-100"
                      >
                        <div className="flex flex-col gap-4">
                          <div className="w-10 h-10 bg-advanced"></div>
                          <div>
                            <div className="w-full text-lg font-semibold">
                              Advanced
                            </div>
                            <div class="w-full">$120/mo</div>
                            <div className="w-full">2 months free</div>
                          </div>
                        </div>
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="Pro"
                        name="hosting"
                        value="Pro"
                        checked={formData.hosting === "Pro"}
                        onChange={handleInputChange}
                        className="hidden peer"
                      />
                      <label
                        for="Pro"
                        className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-700 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-700 dark:text-gray-600 dark:bg-white dark:hover:bg-blue-100"
                      >
                        <div className="flex flex-col gap-4">
                          <div className="w-10 h-10 bg-pro"></div>
                          <div>
                            <div className="w-full text-lg font-semibold">
                              Pro
                            </div>
                            <div class="w-full">$150/mo</div>
                            <div className="w-full">2 months free</div>
                          </div>
                        </div>
                      </label>
                    </li>
                  </ul>
                </div>
              )}

              <SwitchButton state={switchOn} handleToggle={onToggle} />
            </div>
          )}

          {steps === 2 && (
            <div className="flex flex-col items-center">
              {!switchOn ? (
                <div>
                  <h1 className="text-4xl absolute top-10 w-full ">
                    Pick add-ons
                  </h1>
                  <p className="text-gray-400 absolute top-20">
                    Add-ons helps enhance your gaming experirence
                  </p>

                  <div className="flex items-center w-[500px] ps-4 border border-gray-200 rounded dark:border-gray-700 mb-2">
                    <input
                      id="bordered-checkbox-1"
                      type="checkbox"
                      value="checked"
                      name="multiplayer"
                      checked={formData.multiplayer === "checked"}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <div className="flex justify-between w-full items-center">
                      <div className="pl-2">
                        <label
                          for="multiplayer"
                          className="w-full py-4 ms-2 text-lg font-medium text-black"
                        >
                          Online service
                        </label>
                        <p className="pl-2 text-gray-400">
                          Access to multiplayer games
                        </p>
                      </div>
                      <p className="pr-1">+$1/mo</p>
                    </div>
                  </div>

                  <div className="flex items-center w-[500px] ps-4 border border-gray-200 rounded dark:border-gray-700 mb-2">
                    <input
                      id="bordered-checkbox-1"
                      type="checkbox"
                      value="checked"
                      name="storage"
                      checked={formData.storage === "checked"}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <div className="flex justify-between w-full items-center">
                      <div className="pl-2">
                        <label
                          for="multiplayer"
                          className="w-full py-4 ms-2 text-lg font-medium text-black"
                        >
                          Larger Storage
                        </label>
                        <p className="pl-2 text-gray-400">
                          Extra 1TB of cloud space
                        </p>
                      </div>
                      <p className="pr-1">+$2/mo</p>
                    </div>
                  </div>

                  <div className="flex items-center w-[500px] ps-4 border border-gray-200 rounded dark:border-gray-700 mb-2">
                    <input
                      id="bordered-checkbox-1"
                      type="checkbox"
                      value="checked"
                      name="profile"
                      checked={formData.profile === "checked"}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <div className="flex justify-between w-full items-center">
                      <div className="pl-2">
                        <label
                          for="multiplayer"
                          className="w-full py-4 ms-2 text-lg font-medium text-black"
                        >
                          Customizable Profile
                        </label>
                        <p className="pl-2 text-gray-400">
                          Custom theme on your profile
                        </p>
                      </div>
                      <p className="pr-1">+$2/mo</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <h1 className="text-4xl absolute top-10 w-full ">
                    Pick add-ons
                  </h1>
                  <p className="text-gray-400 absolute top-20">
                    Add-ons helps enhance your gaming experirence
                  </p>
                  <div className="flex items-center w-[500px] ps-4 border border-gray-200 rounded dark:border-gray-700 mb-2">
                    <input
                      id="bordered-checkbox-1"
                      type="checkbox"
                      value="checked"
                      name="multiplayer"
                      checked={formData.multiplayer === "checked"}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <div className="flex justify-between w-full items-center">
                      <div className="pl-2">
                        <label
                          for="multiplayer"
                          className="w-full py-4 ms-2 text-lg font-medium text-black"
                        >
                          Online service
                        </label>
                        <p className="pl-2 text-gray-400">
                          Access to multiplayer games
                        </p>
                      </div>
                      <p className="pr-1">+$10/mo</p>
                    </div>
                  </div>

                  <div className="flex items-center w-[500px] ps-4 border border-gray-200 rounded dark:border-gray-700 mb-2">
                    <input
                      id="bordered-checkbox-1"
                      type="checkbox"
                      value="checked"
                      name="storage"
                      checked={formData.storage === "checked"}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <div className="flex justify-between w-full items-center">
                      <div className="pl-2">
                        <label
                          for="multiplayer"
                          className="w-full py-4 ms-2 text-lg font-medium text-black"
                        >
                          Larger Storage
                        </label>
                        <p className="pl-2 text-gray-400">
                          Extra 1TB of cloud space
                        </p>
                      </div>
                      <p className="pr-1">+$20/mo</p>
                    </div>
                  </div>

                  <div className="flex items-center w-[500px] ps-4 border border-gray-200 rounded dark:border-gray-700 mb-2">
                    <input
                      id="bordered-checkbox-1"
                      type="checkbox"
                      value="checked"
                      name="profile"
                      checked={formData.profile === "checked"}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <div className="flex justify-between w-full items-center">
                      <div className="pl-2">
                        <label
                          for="multiplayer"
                          className="w-full py-4 ms-2 text-lg font-medium text-black"
                        >
                          Customizable Profile
                        </label>
                        <p className="pl-2 text-gray-400">
                          Custom theme on your profile
                        </p>
                      </div>
                      <p className="pr-1">+$20/mo</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {steps === 3 && (
            <div>
              <h1 className="text-4xl absolute top-10 w-full ">Finishing up</h1>
              <p className="text-gray-400 absolute top-20">
                Double check everything looks OK before confirming
              </p>
              <Summary data={formData} />
            </div>
          )}

          <div className="flex w-full max-w-[500px] justify-between absolute bottom-10">
            <div className="flex">
              <button className="text-gray-400" type="submit" onClick={prev}>
                Go Back
              </button>
            </div>
            <div className="flex bg-black rounded-md p-3 hover:bg-gray-400">
              <button className=" text-white" type="submit" onClick={next}>
                Next Step
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
