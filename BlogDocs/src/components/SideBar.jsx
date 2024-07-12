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
<<<<<<< HEAD
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
=======
import { Link, useLocation, useNavigate } from "react-router-dom";

const elements = [
  { id: 1, name: "Getting Started", path: "/getting-started", depth: 0 },
  {
    id: 2,
    name: "Setup",
    path: "/getting-started/setup",
    depth: 1,
    parent: "Getting Started",
  },
  { id: 3, name: "Config", path: "/config", depth: 0 },
  { id: 4, name: "node", path: "/config/node", depth: 1, parent: "Config" },
  { id: 5, name: "Element 3", path: "/element-3", depth: 0 },
];

export function SideBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  // Extract current pathname for active route determination
  const currentPath = location.pathname;

  const handleElementSelected = (element) => {
    setSelected(element);
    navigate(element.path);
  };

  // Filter elements based on search query
  const filteredElements =
    query === ""
      ? elements
      : elements.filter((element) =>
          element.name.toLowerCase().includes(query.toLowerCase())
        );

  // Filter main elements and immediate children based on currently selected main element
  const filteredMainElements = elements.filter(
    (element) =>
      element.depth === 0 || // Only main elements (depth 0)
      (element.depth === 1 &&
        selected &&
        selected.name === element.parent) // Include child elements of the currently selected main element
  );

  return (
    <div className="flex flex-col w-64 bg-gray-50 h-screen border-r border-gray-200">
      {/* Search Input */}
      <div className="relative z-10 w-full px-4 py-2">
        <Combobox
          value={selected}
          onChange={(value) => {
            setSelected(value);
            handleElementSelected(value);
          }}
          onClose={() => setQuery("")}
        >
          <div className="relative">
            <ComboboxInput
              autoComplete="off"
              className={clsx(
                "w-full rounded-lg border border-gray-300 bg-white py-2 pl-3 pr-10 text-sm leading-5 text-gray-900",
                "focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              )}
              displayValue={(element) => element?.name}
              onChange={(event) => setQuery(event.target.value)}
            />
            <ComboboxButton className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDownIcon className="h-5 w-5 text-gray-400" />
            </ComboboxButton>
          </div>

          {/* Combobox Options */}
          <ComboboxOptions className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredElements.map((element) => (
              <ComboboxOption
                key={element.id}
                value={element}
                className={clsx(
                  "relative cursor-default select-none py-2 pl-10 pr-4 text-gray-900",
                  element === selected ? "bg-blue-600 text-white" : ""
                )}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {element.name}
                    </span>
                    {selected && (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                        <CheckIcon className="h-5 w-5" />
                      </span>
                    )}
                  </>
                )}
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        </Combobox>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col space-y-2 px-4 pt-2">
        {filteredMainElements.map((element, index) => {
          const isActive = currentPath.startsWith(element.path);

          return (
            <Link
              key={element.id}
              to={element.path}
              className={clsx(
                "block px-3 py-2 rounded-md text-base font-medium",
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-900 hover:bg-gray-100",
                index > 0 &&
                  filteredMainElements[index - 1].depth < element.depth &&
                  !isActive
                  ? "ml-2 border-l-2 pl-2"
                  : "" // Add border and indent for child elements
              )}
              onClick={() => setSelected(element)}
            >
              {element.name}
            </Link>
          );
        })}
      </div>
    </div>
>>>>>>> 5d63a35 (added the sidebar and styled his elements)
  );
}

export default SideBar;
<<<<<<< HEAD
=======

>>>>>>> 5d63a35 (added the sidebar and styled his elements)
