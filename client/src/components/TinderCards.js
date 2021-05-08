import React, {useState, useEffect} from 'react';
import "../css/TinderCards.css";
import TinderCard, { displayName } from "react-tinder-card";
import axios from "axios";

function TinderCards() {
    const [people, setPeople] = useState([]);

      useEffect(() => {
        async function fetchData(){
        const req = await axios.get('/tinder/cards');
        setPeople(req.data);
      }
        fetchData();
      }, []);
console.log(people);

    const swiped = (direction, nameToDelete) => {
        console.log("removing" + nameToDelete);
  };

    const outOfFrame = (Name) => {
        console.log(Name + "left the screen");
    };



    return (
        <div className="TinderCard">
            <div className="tindercard__cardContainer">
            {people && people.map((person) => {
              return (<TinderCard
               className="swipe"
               key={person.name}
               preventSwipe={["up", "down"]}
               onSwipe = {(dir) => swiped(dir, person.name)}
               onCardLeftScreen = {() => outOfFrame(person.name)}
               >
                   <div
                    style = {{backgroundImage: `url(${person.imgUrl})`}}
                    className = "card"
                   > <h3>{person.name}</h3>
                    </div>
               </TinderCard>)
            })
            }

            </div>

        </div>
    );
}

export default TinderCards;
