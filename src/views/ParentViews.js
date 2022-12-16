import { Route, Routes } from "react-router-dom"
import { AllergyList } from "../components/allergies/AllergyList"
import { Login } from "../components/auth/Login"
import { ParentRegister } from "../components/auth/ParentRegister"
import { ChildForm } from "../components/children/ChildForm"
import { ChildDetails } from "../components/children/ChildrenDetails"
import { ChildList } from "../components/children/ChildrenList"
import { CommentList } from "../components/comments/CommentList"
import { ParentDetails } from "../components/parents/ParentDetails"
import { ParentList } from "../components/parents/ParentList"
import { PostForm } from "../components/posts/PostForm"
import { PostList } from "../components/posts/PostLists"
import { PostEdit } from "../components/posts/UpdatePost"
import { ProviderList } from "../components/providers/ProviderList"

import { Authorized } from "./Authorized"



export const ParentViews = ({ token, setToken }) => {
    return <>
      <Routes>
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/parentregister" element={<ParentRegister setToken={setToken} />} />
        <Route element={<Authorized token={token} />}> 
        </Route>
            <Route path="/posts" element={<PostList />} />
            <Route path="/posts/:postId/edit" element={<PostEdit />} />
            <Route path="/posts/new" element={<PostForm/>} />
            <Route path="/parents" element={<ParentList/>} />
            <Route path="/parents/:parentId" element={<ParentDetails/>} />
            <Route path="/providers" element={<ProviderList/>} />
            <Route path="/children/:childId" element={<ChildDetails/>} />
            <Route path="/children" element={<ChildList/>} />
            <Route path="/children/new" element={<ChildForm/>} />
            <Route path="/comments" element={<CommentList/>} />
            <Route path="/allergies" element={<AllergyList/>} />
        </Routes>
  </>
}