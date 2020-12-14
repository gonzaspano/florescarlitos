import React from 'react'
import { SearchContextProvider } from './context/SearchContext'
import { CartContextProvider } from './context/CartContext'
import Home from './containers/Home'
import NavMenu from './containers/NavMenu'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SignUp from './containers/SignUp'
import LogIn from './containers/LogIn'
import PlacesList from './containers/PlacesList'
import AddPlace from './containers/AddPlace'
import UsersList from './containers/UsersList'
import ProductDetailContainer from './containers/ProductDetailContainer'
import Cart from './containers/Cart'

function App() {

  return <>
    <CartContextProvider>

      <BrowserRouter>
        <SearchContextProvider>
          <NavMenu />
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/product/:id">
              <ProductDetailContainer />
            </Route>

            <Route path="/cart">
              <Cart />
            </Route>

            <Route path="/signup">
              <SignUp />
            </Route>

            <Route path="/login">
              <LogIn />
            </Route>

            <Route path="/places">
              <PlacesList />
            </Route>

          </Switch>
        </SearchContextProvider>
      </BrowserRouter>
    </CartContextProvider>

  </>
}

export default App;
