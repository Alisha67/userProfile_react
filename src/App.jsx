import { BrowserRouter ,Routes ,Route } from "react-router-dom"
import ProfileLayout from "./components/ProfileLayout/ProfileLayout";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserPostContainer from "./components/UserPostContainer/UserPostContainer";
import PostDetail from "./components/UserPostContainer/PostDetail";
function App() {


  return (
    <>
<BrowserRouter>
<Routes>
  <Route path ="/" element={<ProfileLayout/>}/> 
  <Route path ="/post/:index" element={<PostDetail  />}/> 
  </Routes>
</BrowserRouter>
    </>
  )
}

export default App
