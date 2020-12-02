import React from 'react'
import Home from './containers/Home'
import NavMenu from './containers/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SignUp from './containers/SignUp'
import PlacesList from './containers/PlacesList'
import AddPlace from './containers/AddPlace'
import UsersList from './containers/UsersList'
import { CartContextProvider } from './context/CartContext'
import ProductDetailContainer from './containers/ProductDetailContainer'

function App() {
  return <>
    <BrowserRouter>
      <CartContextProvider>
        <NavMenu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/product/:id" component={ProductDetailContainer} />
          <Route path="/signup" component={SignUp} />
          <Route path="/places" component={PlacesList} />
          <Route path="/addplaces" component={AddPlace} />
          <Route path="/users" component={UsersList} />
        </Switch>
      </CartContextProvider>
    </BrowserRouter>
  </>
}

export default App;
