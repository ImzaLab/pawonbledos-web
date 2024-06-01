import { ChildrenProps } from "@/types/common";
import { FC } from "react";

const MainLayout: FC<ChildrenProps> = ({ children }) => {
    return (
        <div className="h-full flex flex-col bg-var(--background)">{children}</div>
    );
}

export default MainLayout