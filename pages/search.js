import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import moment from "moment";
import InfoCard from "../components/InfoCard";
function Search() {
  const searchResaults = [
    {
      "id":1,
      "img":"https://links.papareact.com/xqj",
      "location":"Private Room in center of London",
      "description":"1 guest 1 bedroom 1 bed",
      "star":"4.73",
      "price":"$40 a night",
      "total":"$100 total",
      "long":"-0.0022275",
      "lat":"51.5421655",
      "title":"Vici Mansion"
   }, {
      "id":2,
      "img":"https://links.papareact.com/hz2",
      "location":"Private Room in center of London",
      "description":"1 guest 1 bedroom 1 bed",
      "star":"5",
      "price":"$30 a night",
      "total":"$90 total",
      "long":"-0.095091",
      "lat":"51.48695",
      "title":"Edwards Castel"
   },
   {
      "id":3,
      "img":"https://links.papareact.com/uz7",
      "location":"Private Room in center of London",
      "description":"1 guest 1 bedroom 1 bed",
      "star":"3.9",
      "price":"$30 a night",
      "total":"$110 total",
      "long":"-0.135638",
      "lat":"51.521916",
      "title":"London Eye"
   }
  ]
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;

  const sDate = moment(startDate);
  const eDate = moment(endDate);
  const formattedStartDate = sDate.utc().format("DD MMMM yyyy");
  const formattedEndDate = eDate.utc().format("DD MMMM yyyy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className="">
      <Header placeholder={`${location} | ${range} | ${noOfGuests}guests`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays {range} for {noOfGuests} guests.
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap ">
            <p className="button">Cancelation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>
          <div className="flex flex-col">
            {searchResaults.map(
              ({ id, img, location, description, star, price, long, lat,title,total}) => (
                <InfoCard
                  key={id}
                  location={location}
                  description={description}
                  star={star}
                  price={price}
                  long={long}
                  lat={lat}
                  img={img}
                  title={title}
                  total={total}
                />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

//export async function getServerSideProps() {
  //const searchResaults = await fetch("http://localhost:8000/tshirt").then(
    //(res) => res.json()
 // );
  //return {
   // props: {
     // searchResaults,
    //},
  //};
//}
