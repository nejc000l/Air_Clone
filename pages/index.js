import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from '../components/Header'
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/Medium";
import SmallCard from "../components/SmallCard";
import Datas from "../data.json";
import Datas2 from "../data2.json";
import chalk from 'chalk';
const greet = chalk.green.inverse.bold('succses')
console.log(greet)


export default function Home() {
  
  return (
    <div className="">
      <Head>
        <title>Nejc AIR BNB</title>
        <link rel="icon" href="/favicon.icon" />
      </Head>

      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          {/*pull card from server api*/}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Datas.map((data) => {
              return (
                <SmallCard
                  key={data.id}
                  distance={data.distance}
                  img={data.img}
                  location={data.city}
                />
              );
            })}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8 ">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3">
            {Datas2.map((data) => (
              <MediumCard key={data.id} title={data.title} img={data.img} />
            ))}
          </div>
        </section>
        <section>
              <LargeCard
                img="https://links.papareact.com/4cj"
                title="The greatest Outdoors"
                description="Whishlists curated by Airbnb"
                buttonText="Get Inspired"
              />
        </section>
      </main>
      <Footer/>
    </div>
  );
}
