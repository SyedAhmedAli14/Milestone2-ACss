import Image from "next/image";

export default function Home() {
  return (
    <div className="parent">
      {/* Hero Section */}
      <div className="hero">
        <h1>Welcome to the Sports Arena</h1>
        <p>Your ultimate destination for sports updates, news, and gear!</p>
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="text">
          <h2>About Us</h2>
          <p>
            We are passionate about sports and dedicated to bringing you the latest updates,
            gear reviews, and training tips. Whether you're a player or a fan, this is your
            go-to hub for everything sports.
          </p>
        </div>
        <div className="image">
          <img
            className="img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcz0twzVsqh9vTAXc9l5h7wDCYhy5xEq06JQ&s"
            alt="About Sports"
          />
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="cta-section">
        <h2>Get in the Game</h2>
        <p>Explore our exclusive collection of sports gear and accessories today!</p>
        <button className="cta-button">Shop Now</button>
      </div>
    </div>
  );
}