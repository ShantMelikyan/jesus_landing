import React from "react";

const Newsletter = () => {
  return (
    <div className="flex justify-center w-full mx-auto">
       <iframe
            src="https://embeds.beehiiv.com/32c167b5-f949-4fb7-9f73-363fb45d6438?slim=true"
            data-test-id="beehiiv-embed"
            height="52"
            width="100%"
            frameBorder="0"
            scrolling="no"
            style={{
              margin: 0,
              borderRadius: 0,
              backgroundColor: "transparent",
            }}
            className="w-full mt-20 px-5 max-w-2xl md:px-10"
          ></iframe>
    </div>
  );
};

export default Newsletter;
