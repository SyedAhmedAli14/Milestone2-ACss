import Image from "next/image"
export default function Contactus() {
  return (
    <div className="parent">
      <div className="child">
        <h1>Get in Touch with Us</h1>
        <p>
          Have any questions or feedback? We're here to help! Feel free to reach out, and we'll respond as soon as possible. Your input helps us grow and improve.
        </p>
        <p>
          Email us at <a href="mailto:syedahmedalis14@gmail.com">syedahmedalis14@gmail.com</a> or call us at <strong>03332823844</strong>. We look forward to hearing from you!
        </p>
      </div>
      <div className="images">
        <img
          className="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVM7DLCI4ugxWEh3mXjDzXH-2iUlcM5dKEA&s"
          alt="Contact Us"
        />
      </div>
    </div>
  );
}
