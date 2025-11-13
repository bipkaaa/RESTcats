import React from "react";
import { Button, Description } from "@headlessui/react";
import { Switch } from "@headlessui/react";
import { useState } from "react";

interface Cat {
  name: string;
  type: string;
  description: string;
}

const Wiki = () => {
  const [selectedCat, setSelectedCat] = useState<Cat>({
    name: "none",
    type: "NONE",
    description: "noneMeow",
  });

  const mockedCats: Cat[] = [
    {
      name: "cutie",
      type: "GET",
      description: "meowie meow",
    },
    {
      name: "neutral",
      type: "POST",
      description: "meow",
    },
    {
      name: "killer",
      type: "DELETE",
      description: "aggressive meow",
    },
  ];

  return (
    <main>
      <article>
        <h1>Википедия по котикам</h1>
        <h2>Тут собрана информация по всем рест-котикам</h2>
      </article>

      <section className="flex flex-row">
        <aside className="bg-red-300 flex flex-row">
          {mockedCats.map((cat) => (
            <Button
              key={cat.name}
              onClick={() => setSelectedCat(cat)}
              className="flex flex-col"
            >
              <div>{cat.name}</div>
              <div>{cat.type}</div>
            </Button>
          ))}
        </aside>
        <article>
          {selectedCat.name}
          {selectedCat.type}
          {selectedCat.description}
        </article>
      </section>
    </main>
  );
};

export default Wiki;
