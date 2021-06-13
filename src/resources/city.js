import Cities from "./cities";

const City = Cities.map((eachCity)=>{
    return({
      "value": eachCity.city + ', ' +  eachCity.state, "label": eachCity.city + ', ' +  eachCity.state
    }
    );

  });
  export default City;
