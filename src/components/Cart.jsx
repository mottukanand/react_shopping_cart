import React, { Component, Fragment } from 'react';
import { Table } from 'react-bootstrap';


class Cart extends Component {

    state = {
        noDecrease: false,
        noIncrease: true
    }

    increaseQuantity = (product) => {

        if (product.count < product.qty) {
            this.props.increaseCount(product)
        }
    }
    decreaseQuantity = (product) => {
        if (product.count > 1) {
            this.props.decreaseCount(product)
        }
    }

    subTotal = (qty, price) => {
        return qty * price
    }
    totalSum = () => {
        var sum = 0
        this.props.added_products.forEach((thing) => {
            sum += thing.count * thing.price
        })
        return sum
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1>Your Shopping Cart</h1>
                        </div>
                        <div className="col-sm-12">
                            {(this.props.added_products && (this.props.added_products.length > 0)) ?
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Items</th>
                                            <th>Unit Price</th>
                                            <th>Quantity</th>
                                            <th>Subtotal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.props.added_products &&
                                            this.props.added_products.map((product, index) => (
                                                <tr key={index}>
                                                    <td>{product.Name}</td>
                                                    <td>{product.price}</td>
                                                    <td>
                                                        <div>
                                                            <span><button disabled={product.count <= 1 ? true : false} onClick={(e) => this.decreaseQuantity(product)} >-</button></span>
                                                            <span>{product.count}</span>
                                                            <span><button disabled={product.count === product.qty ? true : false} onClick={(e) => this.increaseQuantity(product)}>+</button></span>
                                                            <span style={{ paddingLeft: "20px" }}><button onClick={() => this.props.removeProduct(product)}>Remove</button></span>
                                                        </div>
                                                    </td>
                                                    <td>{this.subTotal(product.count, product.price)}</td>
                                                </tr>
                                            ))
                                        }
                                        <tr>
                                            <td colSpan="3">Total</td>
                                            <td>{this.totalSum()}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                :
                                <div>
                                    <h4><i>There is no products in cart. Go to shopping page...</i></h4>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default Cart