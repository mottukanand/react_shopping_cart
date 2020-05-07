import React, { Component, Fragment } from 'react';
import products from './data/products.json'
import { Nav, Navbar, Card } from 'react-bootstrap';
import Cart from './Cart'

var added_products = []
var productList = []

class Dashboard extends Component {

    state = {
        showCart: false,
        change: true
    }

    changeProduct = () => {
        productList.length === 0 &&
            products.data.forEach((product) => {
                product.added_to_cart = false
                productList.push(product)
            })
    }

    add_product = (product) => {
        productList.forEach((data) => {
            if (data.Name === product.Name) {
                data.added_to_cart = true
                data.count = 1
                added_products.push(product)
            }
        })
        this.props.cartProductAction(product)
    }

    goToCart = (e) => {
        e.preventDefault()
        this.setState({ showCart: true })
    }

    goToShop = (e) => {
        e.preventDefault()
        this.setState({ showCart: false })
    }

    increaseCount = (product) => {
        added_products.forEach((pro) => {
            if (pro.Name === product.Name) {
                pro.count += 1
                this.setState({ change: !this.state.change })
            }
        })
    }

    decreaseCount = (product) => {
        added_products.forEach((pro) => {
            if (pro.Name === product.Name) {
                pro.count -= 1
                this.setState({ change: !this.state.change })
            }
        })
    }

    removeProduct = (product) => {
        added_products.forEach((pro, index) => {
            if (pro.Name === product.Name) {
                added_products.splice(index, 1)
                this.setState({ change: !this.state.change })
            }
        })
        productList.forEach((data) => {
            if (data.Name === product.Name) {
                data.added_to_cart = false
            }
        })
    }

    logOut = (e) => {
        e.preventDefault()
        this.props.logOut().then(() => {
            this.props.history.push('/login')
        })
    }


    render() {
        return (
            <Fragment>

                <Navbar className="header">
                    <Navbar.Brand >Shopping</Navbar.Brand>
                    <Navbar.Toggle label="button">Burr</Navbar.Toggle>
                    <Nav activeKey="/home">
                    </Nav>
                    <Navbar.Collapse>
                        <Nav className="justify-content-end" activeKey="/home" style={{ width: "100%  " }}>
                            <Nav.Item onClick={this.goToShop}>
                                <Nav.Link eventKey="link-1">Hi {localStorage.getItem("first_name").toUpperCase()},</Nav.Link>
                            </Nav.Item>
                            {this.state.showCart &&
                                <Nav.Item onClick={this.goToShop}>
                                    <Nav.Link eventKey="link-1">Shop</Nav.Link>
                                </Nav.Item>
                            }

                            {!this.state.showCart &&
                                <Nav.Item onClick={this.goToCart} >
                                    <Nav.Link eventKey="link-1">My Cart</Nav.Link>
                                </Nav.Item>
                            }
                            <Nav.Item onClick={this.logOut}>
                                <Nav.Link eventKey="link-2">Logout</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {this.changeProduct()}
                {!this.state.showCart &&
                    <div className="container dashboard">
                        <div className="row">
                            {productList && productList.length > 0 && productList.map((product, index) => {
                                return (
                                    <div className="col-sm-4" key={index}>
                                        <Card>
                                            <Card.Header className={product.qty > 0 ? "available" : "not-available"}>{product.qty > 0 ? "Available" : "Sold Out"}</Card.Header>
                                            <Card.Body>
                                                <Card.Title><h3><b>{product.Name}</b></h3></Card.Title>
                                                <Card.Text>
                                                    <div>
                                                        <h5> <b>Rs.{product.price} </b></h5>
                                                        <h6>{product.Location}</h6>
                                                    </div>

                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Footer>
                                                <small className="text-muted">
                                                    {product.added_to_cart ?
                                                        <button className="btn-card" onClick={this.goToCart}>Go To Cart</button> :
                                                        <button className="btn-card" disabled={product.qty === 0 ? true : false} onClick={(e) => this.add_product(product)} >{product.qty === 0 ? <del>Add To Cart</del> : "Add To Cart"}</button>}
                                                </small>
                                            </Card.Footer>
                                        </Card>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                }
                {this.state.showCart &&
                    <Cart added_products={added_products} increaseCount={this.increaseCount} decreaseCount={this.decreaseCount} removeProduct={this.removeProduct} {...this.props} />
                }
            </Fragment>
        )
    }
}

export default Dashboard