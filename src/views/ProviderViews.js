import { Route, Routes } from "react-router-dom"
import { AllergyForm } from "../components/allergies/AllergyForm"
import { AllergyList } from "../components/allergies/AllergyList"
import { Login } from "../components/auth/Login"
import { ProviderRegister } from "../components/auth/ProviderRegister"
import { ChildDetails } from "../components/children/ChildrenDetails"
import { ChildList } from "../components/children/ChildrenList"
import { CommentForm } from "../components/comments/CommentForm"
import { CommentList } from "../components/comments/CommentList"
import { CommentEdit } from "../components/comments/UpdateComment"
import { ParentDetails } from "../components/parents/ParentDetails"
import { ParentList } from "../components/parents/ParentList"
import { PostList } from "../components/posts/PostLists"
import { ProviderList } from "../components/providers/ProviderList"

import { Authorized } from "./Authorized"



export const ProviderViews = ({ token, setToken }) => {
    return <>
      <Routes>
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/providerRegister" element={<ProviderRegister setToken={setToken} />} />
        <Route element={<Authorized token={token} />}> 
        </Route>
            <Route path="/posts" element={<PostList />} />
            <Route path="/parents" element={<ParentList/>} />
            <Route path="/parents/:parentId" element={<ParentDetails/>} />
            <Route path="/providers" element={<ProviderList/>} />
            <Route path="/children/:childId" element={<ChildDetails/>} />
            <Route path="/children" element={<ChildList/>} />
            <Route path="/comments" element={<CommentList/>} />
            <Route path="/comments/:postId/new" element={<CommentForm/>} />
            <Route path="/comments/:commentId/edit" element={<CommentEdit/>} />
            <Route path="/allergies/new" element={<AllergyForm/>} />
            <Route path="/allergies" element={<AllergyList/>} />
        </Routes>
  </>
}