import React from "react";
import Image from "next/image";

const RotatingBubble = () => {
  return (
    <div className="relative flex items-center justify-center w-[420px] h-[420px]">
      <div className="animate-[spin_12s_linear_infinite]">
        <Image
          src="/bubble.png"
          width={251}
          height={236}
          alt=""
        />
      </div>
    </div>
  );
};

export default RotatingBubble;