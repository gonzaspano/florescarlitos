import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import './SearchNavbar.css'
import { useSearchContext } from '../context/SearchContext'

export default function SearchNavbar() {
    const { getInputValue } = useSearchContext()

    return <>
        <Navbar href="/cart" className="justify-content-center" >
                <Form inline className="form-container">
                    <FormControl onChange={(e) => getInputValue(e) } type="text" placeholder="Search" style={{width: "75vw"}} className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
        </Navbar>
    </>
}
