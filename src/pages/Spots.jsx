// import React, { useState } from "react";
// import { Checkbox, FormControlLabel } from "@mui/material";
// import Navbar from "../components/navbar";
// import Hero from "../components/Hero";

// const categories = [
//   { name: "Sites", subcategories: ["Historical", "Museums", "Parks"] },
//   { name: "Shopping", subcategories: ["Malls", "Boutiques", "Markets"] },
//   { name: "To Do", subcategories: ["Tours", "Activities", "Nightlife"] },
//   { name: "Restaurants", subcategories: ["Italian", "Chinese", "Mexican"] },
//   { name: "Events", subcategories: ["Concerts", "Festivals", "Sports"] },
// ];

// const Spots = () => {
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [selectedSubcategories, setSelectedSubcategories] = useState([]);

//   const handleCategoryChange = (event, category) => {
//     if (event.target.checked) {
//       setSelectedCategories([...selectedCategories, category]);
//     } else {
//       setSelectedCategories(
//         selectedCategories.filter((item) => item !== category)
//       );
//     }
//   };

//   const handleSubcategoryChange = (event, subcategory) => {
//     if (event.target.checked) {
//       setSelectedSubcategories([...selectedSubcategories, subcategory]);
//     } else {
//       setSelectedSubcategories(
//         selectedSubcategories.filter((item) => item !== subcategory)
//       );
//     }
//   };

//   return (
//     <div>
//       <div className="nav">
//         <Navbar />
//       </div>
//       <div className="hero-spots">
//         <Hero
//           title="Spots"
//           description="Discover the hidden gems of the city"
//           // backgroundImage={herobg}
//         />
//       </div>
//       <div className="faceted-search">
//         <h2>Categories</h2>
//         {categories.map((category) => (
//           <FormControlLabel
//             key={category.name}
//             control={
//               <Checkbox
//                 onChange={(event) => handleCategoryChange(event, category.name)}
//               />
//             }
//             label={category.name}
//           />
//         ))}
//         <h3>Subcategories</h3>
//         {selectedCategories.length > 0 &&
//           categories
//             .filter((category) => selectedCategories.includes(category.name))
//             .flatMap((category) => category.subcategories)
//             .map((subcategory) => (
//               <FormControlLabel
//                 key={subcategory}
//                 control={
//                   <Checkbox
//                     onChange={(event) =>
//                       handleSubcategoryChange(event, subcategory)
//                     }
//                   />
//                 }
//                 label={subcategory}
//               />
//             ))}
//       </div>
//       <div className="cards">{/* Display cards here */}</div>
//     </div>
//   );
// };

// export default Spots;

import React, { useState } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import "../styles/Spots.css";
import {
  sites_historical,
  sites_museums,
  sites_parks,
  sites_religious,
  Resturants_Asian,
  Resturants_Brunch,
  Resturants_FastFood,
  Resturants_Italian,
  Resturants_Seafood,
  Resturants_Vegan,
  Resturants_FamilyFriendly,
  Resturants_FineDining,
  Resturants_Cafes,
  Shopping_Boutiques,
  Shopping_Malls,
  Shopping_Markets,
  ToDo_Activities,
  ToDo_Nightlife,
  ToDo_Tours,
} from "../assets/SpotsLists";
import herobg from "../assets/spots-bg.jpeg";

const categories = [
  { name: "Sites", subcategories: ["Historical", "Museums", "Parks"] },
  { name: "Shopping", subcategories: ["Malls", "Boutiques", "Markets"] },
  { name: "To Do", subcategories: ["Tours", "Activities", "Nightlife"] },
  {
    name: "Restaurants",
    subcategories: ["Italian", "Chinese", "Mexican", "Cafes", "FastFood"],
  },
  // { name: "Events", subcategories: ["Concerts", "Festivals", "Sports"] },
];

const SpotCard = ({ name, location, description, image, category }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{location}</p>
      <p>{description}</p>
      <p>{category}</p>
      <button>Add to List</button>
    </div>
  );
};

const SpotDetailsModal = ({ open, onClose, spot }) => {
  if (!open) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{spot.name}</h2>
        <p>{spot.location}</p>
        <p>{spot.description}</p>
        <p>{spot.category}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const Spots = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const [selectedSpot, setSelectedSpot] = useState(null);

  function getSelectedCategories() {
    return selectedCategories;
  }

  function updateDisplayedCards() {
    const selectedCategories = getSelectedCategories();
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      const cardCategory = card.getAttribute("data-category");

      if (selectedCategories.includes(cardCategory)) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  }

  const handleCardClick = (spot) => {
    setSelectedSpot(spot);
  };

  const handleModalClose = () => {
    setSelectedSpot(null);
  };

  const handleCategoryChange = (event, category) => {
    if (event.target.checked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== category)
      );
    }

    updateDisplayedCards();
  };

  const handleSubcategoryChange = (event, subcategory) => {
    if (event.target.checked) {
      setSelectedSubcategories([...selectedSubcategories, subcategory]);
    } else {
      setSelectedSubcategories(
        selectedSubcategories.filter((item) => item !== subcategory)
      );
    }
  };

  let spots = [];
  if (selectedSubcategories.length > 0) {
    spots = selectedSubcategories.flatMap((subcategory) => {
      switch (subcategory) {
        case "Historical":
          return sites_historical;
        case "Museums":
          return sites_museums;
        case "Parks":
          return sites_parks;
        case "Malls":
          return Shopping_Malls;
        case "Boutiques":
          return Shopping_Boutiques;
        case "Markets":
          return Shopping_Markets;
        case "Tours":
          return ToDo_Tours;
        case "Activities":
          return ToDo_Activities;
        case "Nightlife":
          return ToDo_Nightlife;
        case "Italian":
          return Resturants_Italian;
        case "Chinese":
          return Resturants_Asian;
        case "Cafes":
          return Resturants_Cafes;
        case "FastFood":
          return Resturants_FastFood;
        default:
          return [];
      }
    });
  } else {
    // If no subcategories are selected, show random cards or featured cards
    // Here, you can define the logic to fetch or randomly select cards
    spots = []; // Replace this with your logic to fetch random/featured cards
  }

  return (
    <div>
      <div className="nav">
        <Navbar />
      </div>
      <div className="hero-spots">
        <Hero
          title="Spots"
          description="Discover the hidden gems of the city"
          backgroundImage={herobg}
        />
      </div>
      <div className="spots-container">
        <div className="faceted-search">
          <h2>Categories</h2>
          {categories.map((category) => (
            <FormControlLabel
              key={category.name}
              control={
                <Checkbox
                  onChange={(event) =>
                    handleCategoryChange(event, category.name)
                  }
                />
              }
              label={category.name}
            />
          ))}
          {selectedCategories.length > 0 && (
            <>
              <h3>Subcategories</h3>
              {categories
                .filter((category) =>
                  selectedCategories.includes(category.name)
                )
                .flatMap((category) => category.subcategories)
                .map((subcategory) => (
                  <FormControlLabel
                    key={subcategory}
                    control={
                      <Checkbox
                        onChange={(event) =>
                          handleSubcategoryChange(event, subcategory)
                        }
                      />
                    }
                    label={subcategory}
                  />
                ))}
            </>
          )}
        </div>
        <div className="spot-cards">
          {spots.map((spot) => (
            <div key={spot.name} onClick={() => handleCardClick(spot)}>
              <SpotCard {...spot} />
            </div>
          ))}
        </div>
        {selectedSpot && (
          <SpotDetailsModal
            open={!!selectedSpot}
            onClose={handleModalClose}
            spot={selectedSpot}
          />
        )}
      </div>
    </div>
  );
};

export default Spots;
