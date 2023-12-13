import React from "react";

const layout = ({ children }) => {
  return (
    <main>
      <section>
        <div className="text-center grid justify-center">
          <div>
            <Image
              src={Log}
              alt="Nexus logo"
              width={40}
              objectFit="contain"
              objectPosition="center"
            />
          </div>
        </div>

        <div className="text-center">
          <h1 className="font-bold text-xl tracking-wider">
            Create account with DecoArt Exchange
          </h1>
          <p
            className="text-[#7C7C7C] text-xs mt-2 line-clamp-2 break-words w-[60%] m-auto"
            style={{ lineHeight: "1.5" }}
          >
            In just a few easy steps, set up your account, making it the top
            platform for art management
          </p>
        </div>
      </section>
      <section>{children}</section>
    </main>
  );
};

export default layout;
