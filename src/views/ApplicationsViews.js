import { Route, Routes } from "react-router-dom"
import { AllergyForm } from "../components/allergies/AllergyForm"
import { AllergyList } from "../components/allergies/AllergyList"
import { Login } from "../components/auth/Login"
import { ParentRegister } from "../components/auth/ParentRegister"
import { ProviderRegister } from "../components/auth/ProviderRegister"
import { ChildDetails } from "../components/children/ChildrenDetails"
import { ChildList } from "../components/children/ChildrenList"
import { CommentForm } from "../components/comments/CommentForm"
import { CommentList } from "../components/comments/CommentList"
import { ParentDetails } from "../components/parents/ParentDetails"
import { ParentList } from "../components/parents/ParentList"
import { PostForm } from "../components/posts/PostForm"
import { PostList } from "../components/posts/PostLists"
import { PostEdit } from "../components/posts/UpdatePost"
import { ProviderList } from "../components/providers/ProviderList"

import { Authorized } from "./Authorized"



export const ApplicationViews = ({ token, setToken }) => {
    return <>
      <Routes>
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/parentRegister" element={<ParentRegister setToken={setToken} />} />
        <Route path="/providerRegister" element={<ProviderRegister setToken={setToken} />} />
        <Route path="/*" element={<Authorized />}> 
        </Route>
        </Routes>
  </>
}