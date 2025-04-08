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
                src="/img/features/feature-3.jpg"
                alt=""
                width={600}
                height={600}
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="feature__area-left">
              <div className="feature__area-left-title p-4">
                <span className="subtitle__one">Fitness Equipment</span>
                <h2>Exercise equipment</h2>
                <p>
                  Fully equipped gym under a pool is comming soon!
                </p>
                <Link className="theme-border-btn" href="/about">
                  Read More <FaArrowRight className="ml-10" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center bg-right flex justify-between">
          <div className="col-xl-6 col-lg-6 order-last order-lg-first">
            <div className="feature__area-left">
              <div className="feature__area-left-title">
                <span className="subtitle__one">Experiences</span>
                <h2>Swimming Pool</h2>
                <p>
                  Proin massa augue, lacinia at blandit ac, fringilla
                  scelerisque tortor. Mauris sit amet lectus porta,
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
                src="/img/features/feature-4.jpg"
                alt=""
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
