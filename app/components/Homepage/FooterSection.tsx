"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";
import { FaCheckSquare } from "react-icons/fa";

const getStyles = (
  serviceName: string,
  selectedServices: string[],
  windowWidth: number
) => {
  const baseStyle = selectedServices.includes(serviceName)
    ? { fontSize: "2.5rem", marginTop: serviceName.length > 18 ? "-6.5rem" :"-4.5rem", marginLeft: "1.5rem", lineHeight: "2.5rem" }
    : { fontSize: "2rem", marginTop: "-3rem", marginLeft: "1.5rem" };

  if (windowWidth < 700) {
    // Example media query for screens smaller than 768px
    return {
      ...baseStyle,
      fontSize: selectedServices.includes(serviceName) ? "1.1rem" : "1rem",
      marginTop: selectedServices.includes(serviceName) ? serviceName.length > 16 ? "-3rem" : "-2.5rem" : serviceName.length > 16 ? "-3rem" : "-2rem",
      marginLeft: "0.7rem",
      lineHeight: "1.2rem",
    };
  }

  return baseStyle;
};

const FooterItem = ({
  src,
  serviceName,
  selectedServices,
  setSelectedServices,
  windowWidth,
}: {
  src: string;
  serviceName: string;
  selectedServices: string[];
  setSelectedServices: (services: string[]) => void;
  windowWidth: number;
}) => {
  return (
    <div
      className="image-wrapper w-full hover:cursor-pointer rounded-xl"
      onClick={() => {
        if (selectedServices.includes(serviceName)) {
          setSelectedServices(
            selectedServices.filter((s: string) => s !== serviceName)
          );
        } else {
          setSelectedServices([...selectedServices, serviceName]);
        }
      }}
    >
      <Image
        src={src}
        alt={serviceName}
        width={378}
        height={244}
        className={"w-full hover:opacity-70"}
        style={{ opacity: selectedServices.includes(serviceName) ? 0.3 : 0.5 }}
      />
      <div
        className="absolute -mt-10 ml-6 text-xl font-semibold flex gap-2 items-center"
        style={getStyles(serviceName, selectedServices, windowWidth)}
      >
        {selectedServices.includes(serviceName) && <FaCheckSquare />}
        {serviceName}
      </div>
    </div>
  );
};

export const FooterSection = () => {
  const [businessName, setBusinessName] = useState("");
  const [contactDetails, setContactDetails] = useState("");
  const [contactNumber, setContactNumber] = useState(""); 
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [windowWidth, setWindowWidth] = useState(1920);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    console.log("selectedServices", selectedServices);
  }, [selectedServices]);

  return (
    <div
      className="w-full bg-[#3E2362] text-white px-[5vw] py-[10vh]"
      id="footer"
    >
      <div>
        <h1 className="text-3xl">Become a Vendor</h1>
        <p className="text-[#EDB93D] text-3xl font-semibold">
          Sign up to our mailing list and stay up to date!
        </p>
      </div>
      <div className="mt-[10vh] grid md:grid-cols-3 gap-6">
        <div>
          <h1 className="text-2xl">Business Name</h1>
          <input
            type="text"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            placeholder="Enter your business name"
            className="w-full bg-[#ffffff] text-black p-2 rounded-lg mt-2 focus:outline-none px-6 py-3.5 placeholder:text-[#00000080]"
          />
        </div>
        <div>
          <h1 className="text-2xl">Contact Email</h1>
          <input
            type="text"
            value={contactDetails}
            onChange={(e) => setContactDetails(e.target.value)}
            placeholder="Enter your email"
            className="w-full bg-[#ffffff] text-black p-2 rounded-lg mt-2 focus:outline-none px-6 py-3.5 placeholder:text-[#00000080]"
          />
        
        </div>
        <div>
          <h1 className="text-2xl">Contact Number</h1>
          <input
            type="text"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            placeholder="Enter your telephone number"
            className="w-full bg-[#ffffff] text-black p-2 rounded-lg mt-2 focus:outline-none px-6 py-3.5 placeholder:text-[#00000080]"
          />
        
        </div>
      </div>

      <div className="text-2xl mt-12">Select your Services</div>

      <div className="grid grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
        <FooterItem
          src="/venue.png"
          serviceName="Venues"
          selectedServices={selectedServices}
          setSelectedServices={setSelectedServices}
          windowWidth={windowWidth}
        />
        <FooterItem
          src="/caterers.jpeg"
          serviceName="Caterers"
          selectedServices={selectedServices}
          setSelectedServices={setSelectedServices}
          windowWidth={windowWidth}
        />
        <FooterItem
          src="/photography.jpeg"
          serviceName="Videography & Photography"
          selectedServices={selectedServices}
          setSelectedServices={setSelectedServices}
          windowWidth={windowWidth}
        />
        <FooterItem
          src="/florist.jpeg"
          serviceName="Florists"
          selectedServices={selectedServices}
          setSelectedServices={setSelectedServices}
          windowWidth={windowWidth}
        />
        <FooterItem
          src="/decor.png"
          serviceName="Decor"
          selectedServices={selectedServices}
          setSelectedServices={setSelectedServices}
          windowWidth={windowWidth}
        />
        <FooterItem
          src="/entertainment.jpeg"
          serviceName="Entertainment"
          selectedServices={selectedServices}
          setSelectedServices={setSelectedServices}
          windowWidth={windowWidth}
        />
        <FooterItem
          src="/hair_makeup_mehendi.png"
          serviceName="Hair, Make Up & Mehndi"
          selectedServices={selectedServices}
          setSelectedServices={setSelectedServices}
          windowWidth={windowWidth}
        />
        <FooterItem
          src="/cake.png"
          serviceName="Wedding Cakes"
          selectedServices={selectedServices}
          setSelectedServices={setSelectedServices}
          windowWidth={windowWidth}
        />
        <FooterItem
          src="/favors.png"
          serviceName="Wedding Favours"
          selectedServices={selectedServices}
          setSelectedServices={setSelectedServices}
          windowWidth={windowWidth}
        />
        <FooterItem
          src="/statonary.png"
          serviceName="Stationary"
          selectedServices={selectedServices}
          setSelectedServices={setSelectedServices}
          windowWidth={windowWidth}
        />
        <FooterItem
          src="/transport.png"
          serviceName="Transport"
          selectedServices={selectedServices}
          setSelectedServices={setSelectedServices}
          windowWidth={windowWidth}
        />
        <FooterItem
          src="/celebrant.png"
          serviceName="Celebrant"
          selectedServices={selectedServices}
          setSelectedServices={setSelectedServices}
          windowWidth={windowWidth}
        />
      </div>
      <div className="flex justify-end mt-8">
        <button
          className="px-[17vw] text-2xl py-3.5 rounded-xl text-center "
          style={
            businessName && contactDetails && selectedServices.length > 0
              ? {
                  backgroundColor: "#ffffff",
                  color: "black",
                  fontWeight: "bold",
                }
              : {
                  backgroundColor: "#ffffff20",
                  color: "white",
                }
          }
          onClick={async () => {
            if (
              !businessName ||
              !contactDetails ||
              selectedServices.length === 0
            ) {
              toast.error("Please fill in all fields");
              return;
            }
            try {
              setLoading(true);
              const response = await fetch(
                "https://the-shadi-server.vercel.app/api/v1/vendors/enroll",
                {
                  method: "POST",
                  body: JSON.stringify({
                    businessName: businessName,
                    contactEmail: contactDetails,
                    contactNumber: contactNumber,
                    chosenServices: selectedServices,
                  }),
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );
              const data = await response.json();
              console.log(data);
              setBusinessName("");
              setContactDetails("");
              toast.success(
                "Thank you for becoming our vendor, We will reach out soon!"
              );
              setLoading(false);
            } catch (error) {
              console.error(error);
              toast.error("Something went wrong, please try again");
            }
          }}
        >
          {loading ? "Submitting..." : "Sign Up"}
        </button>
      </div>
    </div>
  );
};
