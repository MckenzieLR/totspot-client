import { Navigate, Outlet } from "react-router-dom"
import { NavBar } from "../components/nav/NavBar"
import { ProviderNavBar } from "../components/nav/ProviderNavBar"
import { ParentViews } from "./ParentViews"
import { ProviderViews } from "./ProviderViews"

export const Authorized = () => {
  const totSpotUser = localStorage.getItem("is_staff")
  const totUser = JSON.parse(totSpotUser)


  if (localStorage.getItem("totuser") && totUser) {
    return <><Outlet /> <ProviderNavBar/>  <ProviderViews/> </>
  } else if (localStorage.getItem("totuser") && !totUser){
    return<><Outlet /> <NavBar/> <ParentViews/>  </>
  }
  return <Navigate to='/login' replace />
}
