import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { SET_USER } from "./redux/constants/user"
import { ADD_PRODUCTS } from "./redux/constants/product"

const App = () => {
  const dispatch = useDispatch()

  const user = useSelector((state) => state.userReducer)
  const product = useSelector((state) => state.productReducer)

  console.log(user);
  console.log(product);

  useEffect(() => {
    dispatch({
      type: SET_USER,
      payload: "Abhishek"
    })

    dispatch({
      type: ADD_PRODUCTS,
      payload: {
        id: 1,
        name: "Apple"
      }
    })
  }, [])
  return (
    <div>
      hello
    </div>
  )
}

export default App