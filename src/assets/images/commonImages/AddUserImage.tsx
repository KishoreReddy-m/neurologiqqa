import React from "react";
type Props = {
  color?: string;
  width?: string;
  height?: string;
};
const AddUserImage: React.FC<Props> = ({ color, width, height }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 14 14"
      >
        <path
          id="plus"
          d="M30,55a1.077,1.077,0,0,1-1.077,1.077H24.077v4.846a1.077,1.077,0,0,1-2.154,0V56.077H17.077a1.077,1.077,0,1,1,0-2.154h4.846V49.077a1.077,1.077,0,1,1,2.154,0v4.846h4.846A1.075,1.075,0,0,1,30,55Z"
          transform="translate(-16 -48)"
          fill={color}
        />
      </svg>
    </>
  );
};
export default AddUserImage;
