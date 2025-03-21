import React ,{ReactNode} from "react";
type props = {
    children: ReactNode;
}

const Card: React.FC<props> = ({ children }) => {
    return <div>{children}</div>
}

export default Card;