import Link from "next/link";

const Accommodationstext = () => {
  return (
    <div className="col-xl-5 col-lg-6 lg-mb-50">
      <div className="accommodations__area-title">
        <span className="subtitle__one">Accommodations</span>
        <h2>Luxury Awaits You</h2>
        <p>
          If you are looking for a luxurious retreat that feels like a home away from home, look no further. This exquisite haven offers more that just a place to stay – it is a sanctuary for your soul. As you unwind and relax, you will be treated to breathtaking sunset that paint the sky with vibrant hues. The Mediterranean climate adds to the allure, ensuring pleasant weather throughout your stay. The stunning garden surrounding the property creates a serene ambiance, while the beautiful pool invites you to take a refreshing dip. Whether you seek tranquility or simply want to indulge in the lap of luxury, this is the perfect destination for you.

        </p>
        <Link className="theme-btn" href="/about">
          Read More <i className="fal fa-long-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default Accommodationstext;
