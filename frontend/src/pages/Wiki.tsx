import { useState } from "react";
import { Button } from "@mui/material";

interface Cat {
  name: string;
  type: string;
  description: string;
  picture_src: string;
}

const Wiki = () => {
  const [selectedCat, setSelectedCat] = useState<Cat>({
    name: "none",
    type: "NONE",
    description: "noneMeow",
    picture_src: "./public/mockups/swagger.jpg",
  });

  const mockedCats: Cat[] = [
    {
      name: "cutie",
      type: "GET",
      description: "meowie meow",
      picture_src: "./public/mockups/get_kittie.jpg",
    },
    {
      name: "neutral",
      type: "POST",
      description: "meow",
      picture_src: "./public/mockups/post_kittie.jpg",
    },
    {
      name: "killer",
      type: "DELETE",
      description: "aggressive meow",
      picture_src: "./public/mockups/delete_kittie.jpg",
    },
    {
      name: "killer",
      type: "DELETE",
      description: "aggressive meow",
      picture_src: "./public/mockups/delete_kittie.jpg",
    },
    {
      name: "killer",
      type: "DELETE",
      description: "aggressive meow",
      picture_src: "./public/mockups/delete_kittie.jpg",
    },
    {
      name: "killer",
      type: "DELETE",
      description: "aggressive meow",
      picture_src: "./public/mockups/delete_kittie.jpg",
    },
    {
      name: "killer",
      type: "DELETE",
      description: "aggressive meow",
      picture_src: "./public/mockups/delete_kittie.jpg",
    },
    {
      name: "killer",
      type: "DELETE",
      description: "aggressive meow",
      picture_src: "./public/mockups/delete_kittie.jpg",
    },
    {
      name: "killer",
      type: "DELETE",
      description: "aggressive meow",
      picture_src: "./public/mockups/delete_kittie.jpg",
    },
    {
      name: "killer",
      type: "DELETE",
      description: "aggressive meow",
      picture_src: "./public/mockups/delete_kittie.jpg",
    },
    {
      name: "killer",
      type: "DELETE",
      description: "aggressive meow",
      picture_src: "./public/mockups/delete_kittie.jpg",
    },
    {
      name: "killer",
      type: "DELETE",
      description: "aggressive meow",
      picture_src: "./public/mockups/delete_kittie.jpg",
    },
    {
      name: "killer",
      type: "DELETE",
      description: "aggressive meow",
      picture_src: "./public/mockups/delete_kittie.jpg",
    },
    {
      name: "killer",
      type: "DELETE",
      description: "aggressive meow",
      picture_src: "./public/mockups/delete_kittie.jpg",
    },
    {
      name: "killer",
      type: "DELETE",
      description: "aggressive meow",
      picture_src: "./public/mockups/delete_kittie.jpg",
    },
    {
      name: "killer",
      type: "DELETE",
      description: "aggressive meow",
      picture_src: "./public/mockups/delete_kittie.jpg",
    },
    {
      name: "killer",
      type: "DELETE",
      description: "aggressive meow",
      picture_src: "./public/mockups/delete_kittie.jpg",
    },
  ];

  return (
    <main>
      <article>
        <h1>Википедия по котикам</h1>
        <h2>Тут собрана информация по всем рест-котикам</h2>
      </article>

      <section className="flex flex-row">
        <aside className="flex flex-wrap gap-4 max-w-128 overflow-y-auto h-256">
          {mockedCats.map((cat) => (
            <Button
              variant="outlined"
              key={cat.name}
              onClick={() => setSelectedCat(cat)}
              className="flex flex-col"
            >
              <div>{cat.name}</div>
              <div>{cat.type}</div>
              <img src={cat.picture_src} className="size-32" />
            </Button>
          ))}
        </aside>
        <article>
          {selectedCat.name}
          {selectedCat.type}
          {selectedCat.description}
          <img src={selectedCat.picture_src} className="size-32" />
        </article>
      </section>
    </main>
  );
};

export default Wiki;
