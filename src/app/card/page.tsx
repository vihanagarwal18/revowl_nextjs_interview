import React from 'react';
import './page.css';
import Image from 'next/image';

const cards = [
  { id: 1, title: "Leo Messi", imagepath: "/photos/leomessi.jpeg" },
  { id: 2, title: "Super Max", imagepath: "/photos/max.jpeg" },
  { id: 3, title: "Virat Kohli", imagepath: "/photos/viratkohli.jpeg" },
  { id: 4, title: "Xavi Hernandez", imagepath: "/photos/xavi.jpg" },
  { id: 5, title: "Lamine Yamal", imagepath: "/photos/yamal.jpeg" },
  { id: 6, title: "Super Max", imagepath: "/photos/max.jpeg" }
];

const Page = () => {
    return (
      <div className="card-grid">
        {cards.map(card => (
          <div key={card.id} className="card">
            <Image 
                src={card.imagepath} 
                alt={card.title} 
                width={500} 
                height={300}
             />
            <h3>{card.title}</h3>
          </div>
        ))}
      </div>
    );
  };
  
  export default Page;