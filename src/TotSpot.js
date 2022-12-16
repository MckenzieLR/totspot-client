
import React from "react";
import { Route, Routes } from "react-router-dom"
import { Login } from "./components/auth/Login";
import { NavBar } from "./components/nav/NavBar"
import { ProviderNavBar } from "./components/nav/ProviderNavBar"
import { isStaff } from "./utils/isStaff"
import { ApplicationViews } from "./views/ApplicationsViews"
import { ParentViews } from "./views/ParentViews"
import { ProviderViews } from "./views/ProviderViews"


export const TotSpot = () => {
    return (
        <>
        <ApplicationViews />
        
        </>
      )
}

