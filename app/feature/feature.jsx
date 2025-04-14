import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function Feature() {
  return (
    <div className="feature__area">
      <div className="container">
        <div className="row align-items-center bg-left mb-60 flex justify-between">
          <div className="col-xl-6 col-lg-6">
            <div className="feature__area-image">
              <Image
                alt="food on the beach"
                src="/img/villa/villadrobnipijesak-food.jpg"
                width={600}
                height={600}
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="feature__area-left">
              <div className="feature__area-left-title">
                <span className="subtitle__one">Food</span>
                <h2>Signature Farm to Table Experience</h2>
                <p>
                  Indulge in our organic breakfast option sourced from local farms in Montenegro. 
                  Our homemade cheeses, prosciutto, olives and more will tantalize your taste buds.
                </p>
                <Link className="theme-border-btn" href="/about">
                  Read More <FaArrowRight className="ml-10" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center bg-right mb-60 flex justify-between">
          <div className="col-xl-6 col-lg-6  order-last order-lg-first">
            <div className="feature__area-left">
              <div className="feature__area-left-title">
                <span className="subtitle__one">Pool</span>
                <h2>Dive in luxury, our pool is waiting for you!</h2>
                <p>
                  Relax and enjoy the best view of the sea and sunset. 
                  Come and indulge in the wonders of our exceptional pool, which offers a beautiful view of the Vasa sea and enchanting sunsets. 
                  Our pool filled with crystal-clear sea water, provide a unique and invigorating swimming experience.
                </p>
                <Link className="theme-border-btn" href="/about">
                  Read More <FaArrowRight className="ml-10" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="feature__area-image">
              <Image
                src="/img/villa/villadrobnipijesak-pool-1.webp"
                alt="villas pool"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
        <div className="row align-items-center bg-left mb-60 flex justify-between">
          <div className="col-xl-6 col-lg-6">
            <div className="feature__area-image">
              <Image
                src="/img/villa/drobni_pijesak_1.jpg"
                alt=""
                width={600}
                height={600}
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="feature__area-left">
              <div className="feature__area-left-title p-4">
                <span className="subtitle__one">Beach near villa</span>
                <h2>Drobni Pijesak beach</h2>
                <p>
                  Drobni Pijesak beach is true gem along the Montenegrin coast. Nestled in secluded cove, this beach boasts stunning natural beauty. 
                  What makes it even special is its location at the back of an ancient olive grove. As you approach the beach, 
                  you’ll be greeted by mesmerizing sight of crystal-clear turquoise waters gently lapping against the soft, fine sand.
                </p>
                <p>
                  The peacful atmosphere and untouched surroundings create a sense of tranquility that is hard to find elsewhere. 
                  Whether you’re looking to soak up the sun, take a refreshing swim, or simply relax under the shade of an olive tree, 
                  Drobni Pijesak beach offers it all. Don’t miss the chance to experience this slice of paradise on the Montenegrin coast.
                </p>
                <Link className="theme-border-btn" href="/about">
                  Read More <FaArrowRight className="ml-10" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center bg-right mb-60 flex justify-between">
          <div className="col-xl-6 col-lg-6 order-last order-lg-first">
            <div className="feature__area-left">
              <div className="feature__area-left-title">
                <span className="subtitle__one">Comming Soon</span>
                <h2>Vine Cellar</h2>
                <p>
                  Discover a small and cozy vine cellar filled with local Montenegrin vine as well as selection of Italian, French, Portuguese vines.
                </p>
                <Link className="theme-border-btn" href="/about">
                  Read More <FaArrowRight className="ml-10" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="feature__area-image">
              <Image
                src="/img/villa/wine-storage.jpg"
                alt=""
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
        <div className="row align-items-center bg-left flex justify-between">
          <div className="col-xl-6 col-lg-6">
            <div className="feature__area-image">
              <Image
                src="/img/villa/gym.jpg"
                alt=""
                width={600}
                height={600}
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="feature__area-left">
              <div className="feature__area-left-title p-4">
                <span className="subtitle__one">Comming Soon</span>
                <h2>Gym</h2>
                <p>
                  Fully equipped fitness under the pool with the sea view.
                </p>
                <Link className="theme-border-btn" href="/about">
                  Read More <FaArrowRight className="ml-10" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
