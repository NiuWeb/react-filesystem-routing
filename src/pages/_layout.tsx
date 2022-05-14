import React from "react";

export default ({children}: {children: React.ReactNode}) => {
    return <div>
        Main layout:
        {children}
    </div>
}