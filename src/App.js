import React from 'react'
import Home from './containers/Home'
import NavMenu from './containers/NavMenu'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SignUp from './containers/SignUp'
import LogIn from './containers/LogIn'
import PlacesList from './containers/PlacesList'
import AddPlace from './containers/AddPlace'
import UsersList from './containers/UsersList'
import { CartContextProvider } from './context/CartContext'
import ProductDetailContainer from './containers/ProductDetailContainer'
import Cart from './containers/Cart'
import { SearchContextProvider } from './context/SearchContext'

function App() {
  return <>
    <BrowserRouter>
      <CartContextProvider>
        <SearchContextProvider>
          <NavMenu />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/product/:id" component={ProductDetailContainer} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={LogIn} />
            <Route path="/places" component={PlacesList} />
            <Route path="/addplaces" component={AddPlace} />
            <Route path="/users" component={UsersList} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </SearchContextProvider>
      </CartContextProvider>
    </BrowserRouter>
  </>
}

export default App;
