
import React, {useState, useEffect} from 'react';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Btn from "./components/Btn";
import axios from "axios";
import People from "./components/People"
import Cards from "./components/Cards"
import Planets from "./components/Planets"
import Loader from "./components/Loader"
import Starships from "./components/Starships"
import 'semantic-ui-css/semantic.min.css'
import './App.css';



function App() {

  const [people, setPeople] = useState([]);
  const [starships, setStarships] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [next, setNext] = useState("");
  const [page, setPage] = useState(1);
  const [type, setType] = useState("people");
  const [card, setCard] = useState([])

  let url = `https://swapi.dev/api/${type}/?page=${page}`;

  useEffect(()=>{

    var navImgs = document.getElementsByClassName("navImg");

    async function nav(){
    for (var i = 0; i < navImgs.length; i++) {
      navImgs[i].addEventListener("change", (event)=>{
          event.preventDefault();
        });


    navImgs[i].addEventListener("click", (event)=>{
        setType(event.target.parentElement.name);
        setLoading(true);

       });
    }
    }
    

    async function fetchData(){
      let res = await fetch(url)
      let data =await res.json();
        switch(type){
            case "people":
            setPeople(data.results);
            break;

            case "planets":
            setPlanets(data.results);
            break;

            case "starships":
            setStarships(data.results);
            break;

          }
    }

      fetchData();
      nav();

      setLoading(false);
      

  });



  async function goNext(){
          let pageN = page;
          pageN++;
          url = `https://swapi.dev/api/${type}/?page=${pageN}`;
          setPage(pageN)
          let res = await fetch(url);
          let data = await res.json();
         
          switch(type){
            case "people":
            setPeople([...people,...data.results]);
            break;

            case "planets":
            setPlanets([...planets,...data.results]);
            break;

            case "starships":
            setStarships([...starships,...data.results]);
            break;

          }

        }


  

  async function getDetails(url){
          let res = await fetch(url); 
          let data = await res.json();


           if(data.films !== undefined){
          
                    const films=[]
                     for(let i=0; i<data.films.length; i++){
                          let res = await fetch(data.films[i]);
                          let film = await res.json();
                          films.push(film.title);
                      }
                    
                    data.films = films;
                    data.films = data.films.join(" ⭐ ");
            }


          if(data.vehicles !== undefined){
          
                    const vehicles=[]
                     for(let i=0; i<data.vehicles.length; i++){
                          let res = await fetch(data.vehicles[i]);
                          let vehicle = await res.json();
                          vehicles.push(vehicle.name);
                      }
                      console.log(vehicles)
                    
                    data.vehicles = vehicles.join(',  ');    
            }


          if(data.residents !== undefined){
          
                    const residents=[]
                     for(let i=0; i<data.residents.length; i++){
                          let res = await fetch(data.residents[i]);
                          let person = await res.json();
                          residents.push(person.name);
                      }
                    
                    data.residents = residents.join(', ');    
            }

          if(data.pilots !== undefined){
          
                    const pilots=[]
                     for(let i=0; i<data.pilots.length; i++){
                          let res = await fetch(data.pilots[i]);
                          let person = await res.json();
                          pilots.push(person.name);
                      }
                    
                    data.pilots = pilots.join(', ');    
            }

            if(data.species !== undefined){
  
            const species=[]
             for(let i=0; i<data.species.length; i++){
                  let res = await fetch(data.species[i]);
                  let specie = await res.json();
                  species.push(specie.name);
              }
              console.log(species)
            
              data.species = species.join(',  ');    
            }          

          if(data.starships !== undefined){
          
                    const ships=[]
                     for(let i=0; i<data.starships.length; i++){
                          let res = await fetch(data.starships[i]);
                          let ship = await res.json();
                          ships.push(ship.name);
                      }
                    
                    data.starships = ships.join(',  ');    
            }

            if (data.homeworld !== undefined) {
              let res = await fetch(data.homeworld);
              let home = await res.json();
              data.homeworld = home.name;
            }



          setCard(await data);


          
          const keys = Object.entries(data);
                setType("card");
        
  }



////////////////////////////////////
// Loads all Cards in the section //
///////////////////////////////////

var deck = document.querySelector("#deck");
if(deck){
  deck.addEventListener("click",
    async ()=>{
            let pages = [];
            for (var i = 1; i <= 9; i++) {
                
                url = `https://swapi.dev/api/${type}/?page=${i}`;
                let res = await fetch(url);
                let data = await res.json();
                let d = await data.results;
                if(d){
                for(var n = 0; n < d.length; n++){
                    pages.push(d[n]);
                }
              }else{
                return;
              }


                  
            }

          switch(type){
            case "people":
            setPeople([...pages]);
        
            return;

            case "planets":
            setPlanets([...pages]);
            return;

            case "starships":
            setStarships([...pages]);
            return;

          }
  })
}


    /// Render

  switch(type){
      case "card":
           return(
            <>
                <Header />
                <Cards data={card} />
            </>);
           

      case "people":
        return (
          <>
       <Header className ="header" />
              <People onClick={(event)=>{
                      url = event.target.id;
                      getDetails(url)}} data={people} />
          </>

        );


        

        case "planets":
          return (
          <>
       <Header className ="header" />
              
              <Loader />
              <Planets onClick={(event)=>{
                      url = event.target.id;
                      getDetails(url)}} data={planets} />

          </>
        );
        

        case "starships":
          return (
          <>
       <Header className ="header" />
              <Loader />
              <Starships onClick={(event)=>{
                      url = event.target.id;
                      getDetails(url)}} data={starships} />
          </>
        );
        

  }

              



}



export default App; 
