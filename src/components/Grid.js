import clsx from "clsx";
import Image from "next/image";

const Grid = ({ coffee, tea, active }) => {
  const items = active == "coffee" ? coffee : tea;

  return (
    <section className="container">
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items &&
          items.length &&
          items.map((item) => (
            <li
              className="rounded-lg border border-border bg-white p-4"
              key={item._id}
            >
              <Image
                className="mx-auto"
                src={item.image}
                width="248"
                height="248"
                alt={item.name}
              />
              <div className="mt-4 flex justify-between gap-4 border-t border-border pt-[9px]">
                <h2 className="text-lg font-semibold leading-[22px]">
                  {item.name}
                </h2>
                {item.tags && (
                  <ul className="flex flex-col gap-1">
                    {item.tags.map((tag) => (
                      <li
                        className={clsx(
                          "rounded-sm px-2 py-1 text-[13px] font-semibold uppercase leading-4 text-white",
                          tag == "Arabic" && `bg-[#CD4C15]`,
                          tag == "Robusta" && `bg-[#758266]`
                        )}
                        key={tag}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Grid;
