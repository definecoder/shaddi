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
          src="https://s3-alpha-sig.figma.com/img/5747/ef30/99bd4b0b65d8ead976dfcf0b69eabab2?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JXRG2I7jqnt78Kuu7g1nSpIJsLGfBbvpWp4-cWE2v3KDM-K65bS4DUmriKKFbL-VqeEasmbAE-~WND8jVLhRh~1KhFfEzd9mtD5pnawsO9Sd4zFGnPsw4Spq6wE~jVW37GxdnnfSMsd7PrODi7hszYhPyFkpv9NV5jgvk97~YfiXfCzoB6kQ4GvUz6e~9XS5zSSXMxzZH7e4HSc6T7yITvBLOUqm2704C~04twgB0MHc1JjfMEOIsOTCFcdBmzoN1AM3KwPBZn2km0edSJRjtQ3xYgutzFBBrQuiy-tfjM5ntbnYH7cSILj6mxfYvGVVsJWtv3Ov~-1UO-cz9CWBJA__"
          serviceName="Venues"
          selectedServices={selectedServices}
          setSelectedServices={setSelectedServices}
          windowWidth={windowWidth}
        />
        <FooterItem
          src="https://s3-alpha-sig.figma.com/img/413b/67bd/7938623eb23eb184f460400b778435d9?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CgPi6uX3yOBwxR7LXJVLkhE7ucLPprdQshNjjm4Oacmf4MdgoTmjcIil6Hkq98qGazHxDrpUmGNGIvuZbmhiF8EBS3bDH3zg2zxqvRXtZ0KiIBsNwzBfdUuEODQq39s-pC2sgtbRbiQQkkzXFm73G2z8R2UQ4JieIYUrYbTlHzaeaSWAedXJb8YpdyFhlVu3ZwOfdJa9bX8jwKG-PpjE29ErvnXOoYVDU-tq9WhtGj1ixDbO34ubhroTm5FUs44IO1wwKgpdg6kTB2umof~mK48ANJ~B6yQbGWSkiCr7TPaQQEj65fKYPf7oIYa9GSvxw6aZsuIgq9QwcyFsWntJFA__"
          serviceName="Caterers"
          selectedServices={selectedServices}
          setSelectedServices={setSelectedServices}
          windowWidth={windowWidth}
        />
        <FooterItem
          src="https://s3-alpha-sig.figma.com/img/0991/b547/0532fe779b99f9626c2c8ec92b4d0cd5?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DcN~VQ8RFO7i~rIWlZ-4PjDdGmQqNI3MyOp0TpeZRoDNq0anRXrEgOG3Fc5~lmFBhq1QKgELGByfTYhsczhP673XH8TaOr3N~jpn1nK-EPE32zvO-HGaZm~CwksCo4XAElCq9Wb5ld6sDdU8iLOciZSlfJeG-5YebDR8At~vtY-dcktH9D2EWe8d9ureFiKlIZeZbxFanAhDI1JETYEJ13hHtTYUTZeduQjmO2yhff-MEy-lFRnvzXcPMrfOBFq8L8DbR~XHmOruN9zi1wi0oqvQtOZBMC7Trk-y3OxzMYB5olIA1BdBvcDPqiqaJ0c6VevAvZ5KVFgXxOeFp5LmuA__"
          serviceName="Videography & Photography"
          selectedServices={selectedServices}
          setSelectedServices={setSelectedServices}
          windowWidth={windowWidth}
        />
        <FooterItem
          src="https://s3-alpha-sig.figma.com/img/2a3f/e4f0/49210c75e53aeab5931fdd1df48929dc?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cf00JPza12krDTZOoRazJIgf5ztrrqFQmx4UY44ttkSFDdSCVZ-anOkPXie74EnzOFsPwPsSnZhnPcqC9fUuwzxxX3VpHJ~7oCLrUcvjr9AHgV~yMgp7C3LQ0zkMnh4m8B7QgU32omNYbjBO1B6v5rwHKilF7OaeMN5WTPPAz7zRxVI6bmfHofO~sm5d5Y6HkT4L0e6ajoU5mB~K3k8iaptBnkkkd0auerahx9x85s2B~EGZGyrZg7sHd2yBpBKBRQzwpIb8slxRyBTO91vWcXCDqevB7aNYtOshgHwW34zynKO7EF7O4neZAm2BinCMJf9Wo~ARUu9sOVcT2i3Whg__"
          serviceName="Florists"
          selectedServices={selectedServices}
          setSelectedServices={setSelectedServices}
          windowWidth={windowWidth}
        />
        <FooterItem
          src="https://s3-alpha-sig.figma.com/img/15f7/671f/211b93d6ae68bcdb161ceb8a04dc16ce?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c8OiCA6~ulTVBU6fp41pnRjunygu30N5ZT1mUGa7YX8BFbmmqL9ENgtMIbGJKYPGGLcyQ0xfdns2dBDqrDmtzw0F0mrBf-AJdtGro4vQNNnur1xRIjuRHUbHVlg1VjF9iBra5hfDNhTYUZB7oqSZqsQag2oAr2d6fR2sq6afkY02kRL9Rxo204ug7pl25s5w9ozWM0R30qtfNFETOHWSDrC7IDir9QoadneOeRnEVmsSTYU-nw~J0H8Fep7c1XEr~6RMsu1l-vCL0tZd1mQ50cIV5BLTaa5IZOO29hPQKE6s6M4Av6pNUclEkyX5WCbG5tk2E1jfrf-ZprgW8QMbEQ__"
          serviceName="Decor"
          selectedServices={selectedServices}
          setSelectedServices={setSelectedServices}
          windowWidth={windowWidth}
        />
        <FooterItem
          src="https://s3-alpha-sig.figma.com/img/6fec/87ed/2a18c034830ed05659f71e640a461661?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q8RnE9Ao4V2auL-i986IIjMEMJXeY5OWncwuahF9qN6ZR9vrTDg2ZXcbqRsTN5mhgEHiiIqRzlVJ4db4bu7GXh~jvtXdKrZxS8UjCWFyzfdZhpCwhQfPBy62jCBwYIU9pnmUxT8naqYuka~A6sEFBr0ujqmibjtw1koQNiZ3O~OSB7IzbRK07GLtt0pLjiLaEnnQPXrsUI1JxqlSm6zNuhftpIhFBZa5VW1vO4hUmHbleNyTWc5mQCfBPnpWI6IxdGjM8Q2x99HA947wlSEuPC9lrAIzhKo48SdX54tMSO3HKNU4BUpCneqGxnK7obFU5hk4YrJcaCmzYYy~oG5zNg__"
          serviceName="Entertainment"
          selectedServices={selectedServices}
          setSelectedServices={setSelectedServices}
          windowWidth={windowWidth}
        />
        <FooterItem
          src="https://s3-alpha-sig.figma.com/img/ab2f/bce8/c1c91d00749d65fc03eceeba400d9e04?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B4FClLFkWYm5JaGCpOB0WcUgBHpXKM1BSY~v1Kh~C6C1ivJ718hmhqot2qDhbOJpbO6Rz6xo5xiQGpkX0jEImmQF49dueRXwbZyBCpn~MsGHYx2PVbvIN9-e~F1JVG3WJ-5C7Rvle5GFYNqeHRYOUH~-uqIZy2hOtC8BZyqLOZkmDrFsKJ~HqHEkYQzh9fqHHt1Vv1Atj9UhTcsb6BKLGfZ3Ml5fjPCd4H2BSJ-Fjvd3kXpmW3vKKqsT0BzFxcFAKPl4QKWejc2QnOv5wwLr4MW3F2AEYdw0banaag6a2LUANFZ~g6br9atMio9bKresm~podNHeodUKgpb07qjd5w__"
          serviceName="Hair, Make Up & Mehndi"
          selectedServices={selectedServices}
          setSelectedServices={setSelectedServices}
          windowWidth={windowWidth}
        />
        <FooterItem
          src="https://s3-alpha-sig.figma.com/img/45d8/3191/c2c0ac6f0a89ee59308e9cfbc5a6ade6?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=daE-neEGiIXGRIIa~40EY1fnAGTxIaSYTSwHjWfWlXZDn5IokWSnMIr9V6WdgG95aSl8grOKB~0w8FKB5OsHQSqlRSLhBnoCNW-OP3FK3AiDpiNZuX4zTnwkVMOZdTpg-HdDeNoKGlheLfVdJxyUX9Gmr~N47ZpDWqqKpC5SkJCHeUqiQrsON7~AC9GxJeFCy6hX6WMCTxEEBOE~9lKEwU2AebW~QNE30CrpaKBZhF2pA6yadC7CiYcKHEUceNh13Odx7Uh18BTrM5boIxMVbJfsaFIIaa~unRIIsJALZqY3eZx05F10jQc9-hB62xpG5ckWCDzY511-DIbHNWhFAw__"
          serviceName="Wedding Cakes"
          selectedServices={selectedServices}
          setSelectedServices={setSelectedServices}
          windowWidth={windowWidth}
        />
        <FooterItem
          src="https://s3-alpha-sig.figma.com/img/5d97/e57a/2f010418903697df041a2e3b48ee41e7?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c7pMR5O~0nAyKY4enFa9huhhKuM0LUtGWk93K4zTs22bGlkMaOHmqZmFH~eUESEKtoNH7T7wutyLTATnhGqwiBvve7wjzTLfHW7qy8DyUGkrlspWP1TK4u8c-ZbloHmgRglKuaEuvMdlO3OUBumSHk3nMmD5tXgkNQCeAc73rDSF3of6hLdMNak8IwhxVUmA4t2zcjEIT20fb0Tvn92lJM6JmxY-xaGSS4LPYQcDqV~xxeQ5-RmJ8TR-0T3iwATXy9WmrL3LPwxYLgK1dHTUXCk9yiF3XCDMHuh0vUN5MwPepFDTm-tUVb5WWlzFYhb5nhSxsweIICDy~7hJ9Ys~ZQ__"
          serviceName="Wedding Favours"
          selectedServices={selectedServices}
          setSelectedServices={setSelectedServices}
          windowWidth={windowWidth}
        />
        <FooterItem
          src="https://s3-alpha-sig.figma.com/img/fb19/4948/fd839d2b550e19e148bdc403546c41ae?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ouyTVre2uJcWEkmDff~JMkkbPak9ZRfWhliw-9pQn9gvlipEULgJckYVpT45lRqA57NdDy-gQBGxn9Mg0Yva0ixF5XzuBjqdWaNHx0NHZxPiM7-pGTvDzAbpcCfU3Ya3lTgJL6dCdHk16Uka3ezSrRiqZ~vNpKWLn-5bNaEIZf-pUQU2DGRdD-aV4UqVi8RGyltMRvrJIZWMXTiKglKe3agphGD9jbUUu9v0mp4lGZxVRHqShzM~0c01zHLVWc6I1DKqX62UEospGfYZ~wcED0WR9bY08ZAbFZx1YRYphGeXCQvHrommiSSFeoF79liXdD1poZaolrmDMzJiM5PMWA__"
          serviceName="Stationary"
          selectedServices={selectedServices}
          setSelectedServices={setSelectedServices}
          windowWidth={windowWidth}
        />
        <FooterItem
          src="https://s3-alpha-sig.figma.com/img/d3fa/fccc/9eb8e919abf44bc4d480532703c08566?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lo7UwzpCv0j8bThvm84kRfnlQteXNZ5efKbD-R~dZEJS701QplUfN2I6qxuDY7Jb9VsAlv3SPzvjl-6ZqHHudXi0O3f~Z0-LEbxY7RnE7zFbcrRg2rzlnF~EtSPdjkByvxn2lGaW1LOOKOOYfJdEIEJXxRUvHySRIhoYZAULbBeoINJglDOS0d-6z~90WBItTdKGUbJ-toDZVHx8nVZTNCh~JoR9T38HHws~v2KErAI8erzhabgchuIvcIINwtaw-CpkR3s-UFuYrI9pvzK~hSF~dv~lXSsGvNhI1XcHkRPgS3pRRCGZC5Hu8KbifX1RQ5z6j3JsnPbS1-W8KRkHmg__"
          serviceName="Transport"
          selectedServices={selectedServices}
          setSelectedServices={setSelectedServices}
          windowWidth={windowWidth}
        />
        <FooterItem
          src="https://s3-alpha-sig.figma.com/img/2417/84d2/b5cf612a9ca977a6cd2ba6f1798d47f7?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZDHK6ZPQnnAIu749OHf2v-hIw9BosQmQiezwM9VBPv6DYNXtpbZjCpMXW5vzCbteB4w~ePDLGt8iIjbon92g5iMeoqhGSpe3hyLFm1KqNlWkYflXUEH5~i-ceV4uX17mVHlrg~dRg9R6pQPqIllLKiAYGhKzvcT0KBWNKfWoonJcrHk3V677~guLoVtIlUYIj-Px-DOrZSk98IVqjM105KsD65jZHOM1KY-iuuMIM5rhMNzp7dut1TZSRBtf1DMUUey5exfy3ebqR3AZdZMqdw3qqzUyY00XYbNvrY2yLL6Jm7RT0vg5sXfbY8GLd4Yi~gLsKg1sZuQhZpq5m3XUYw__"
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
