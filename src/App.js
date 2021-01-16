import React from 'react'
import { SearchContextProvider } from './context/SearchContext'
import { CartContextProvider } from './context/CartContext'
import Home from './containers/Home'
import NavMenu from './containers/NavMenu'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SignUp from './containers/SignUp'
import LogIn from './containers/LogIn'
import ProductDetailContainer from './containers/ProductDetailContainer'
import Cart from './containers/Cart'
import CheckOut from '../src/containers/CheckOut'
import { ProductsContextProvider } from './context/ProductsContext'
import Footer from './containers/Footer'
import AddProducts from './containers/AddProducts'
import Categories from './containers/Categories'
import './App.css'

function App() {

  return <>
    <BrowserRouter>

      <CartContextProvider>
        <ProductsContextProvider>
          <SearchContextProvider>

            <NavMenu />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/categories/:category">
                <Categories />
              </Route>

              <Route path="/product/:id">
                <ProductDetailContainer />
              </Route>

              <Route path="/addproducts">
                <AddProducts />
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

              <Route path="/checkout">
                <CheckOut />
              </Route>
            </Switch>
            <Footer />

          </SearchContextProvider>
        </ProductsContextProvider>
      </CartContextProvider>

    </BrowserRouter>
  </>
}

export default App;
