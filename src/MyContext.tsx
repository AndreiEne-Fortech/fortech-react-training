import React from "react";

export const MyContext = React.createContext<(event: React.ChangeEvent<HTMLInputElement>)=> void>(()=> null);