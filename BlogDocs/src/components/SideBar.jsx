import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

const people = [
  { id: 1, name: "Tom Cook" },
  { id: 2, name: "Wade Cooper" },
  { id: 3, name: "Tanya Fox" },
  { id: 4, name: "Arlene Mccoy" },
  { id: 5, name: "Devon Webb" },
];

export function Search() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(people[1]);

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div className="w-64 pt-5">
      <Combobox
        value={selected}
        onChange={(value) => setSelected(value)}
        onClose={() => setQuery("")}
        __demoMode
      >
        <div className="relative">
          <ComboboxInput
            className={clsx(
              "w-full rounded-lg border-solid border-2 border-zinc-200 bg-white/5 py-1.5 pr-8 pl-3 text-sm/6 text-black",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
            )}
            displayValue={(person) => person?.name}
            onChange={(event) => setQuery(event.target.value)}
          />
          <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
            <ChevronDownIcon className="size-4 fill-black/60 group-data-[hover]:fill-black" />
          </ComboboxButton>
        </div>

        <ComboboxOptions
          anchor="bottom"
          transition
          className={clsx(
            "w-[var(--input-width)] rounded-xl border border-black/5 bg-black/5 p-1 [--anchor-gap:var(--spacing-1)] empty:invisible",
            "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0",
          )}
        >
          {filteredPeople.map((person) => (
            <ComboboxOption
              key={person.id}
              value={person}
              className="z-30 group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-black/10"
            >
              <CheckIcon className="z-30 invisible size-4 fill-black group-data-[selected]:visible" />
              <div className="text-sm/6 text-black">{person.name}</div>
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
    </div>
  );
}
const Bar = () => {
  const [activeElement, setActiveElement] = useState(null);

  const handleClick = (element) => {
    setActiveElement(element);
  };

  return (
    <div className="pt-20">
      <ul>
        <li>
          <Link
            to="/element-1"
            className={activeElement === "Element 1" ? "active" : ""}
            onClick={() => handleClick("Element 1")}
          >
            Element 1
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className={activeElement === "Element 2" ? "active" : ""}
            onClick={() => handleClick("Element 2")}
          >
            Element 2
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className={activeElement === "Element 3" ? "active" : ""}
            onClick={() => handleClick("Element 3")}
          >
            Element 3
          </Link>
        </li>
      </ul>
    </div>
  );
};

const ChildElements = ({ element }) => (
  <ul className="child-elements">
    <li>Child {element}.1</li>
    <li>Child {element}.2</li>
    <li>Child {element}.3</li>
    <li>Child {element}.4</li>
    <li>Child {element}.5</li>
  </ul>
);
function SideBar() {
  return (
    <>
        <Search />
        <Bar />
        <Routes>
          <Route
            path="/element-1"
            element={<ChildElements element="Element 1" />}
          />
          <Route
            path="/element-2"
            element={<ChildElements element="Element 2" />}
          />
          <Route
            path="/element-3"
            element={<ChildElements element="Element 3" />}
          />
        </Routes>
    </>
  );
}

export default SideBar;
