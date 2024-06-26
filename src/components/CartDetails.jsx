import React from 'react'
import '../css/cartStyle.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function CartDetails() {
  const arr = [1, 2, 3]
  return (
    <>
      <div className="row justify-content-center m-0">
        <div className="col-md-8 mt-5 mb-5 cardsdetails">
          <div className="card">
            <div className="card-header bg-dark p-3">
              <div className="card-header-flex">
                {' '}
                <h5 className="text-white m-0">Cart Calculation (1)</h5>
                {arr.length > 0 ? (
                  <button className="btn btn-danger mt-0 btn-sm">
                    <i class="fa fa-trash" aria-hidden="true"></i>
                    <span> Empty Cart</span>
                  </button>
                ) : (
                  ''
                )}
              </div>
            </div>
            <div className="card-body p-0">
              {arr.length === 0 ? (
                <table className="table cart-table mb-0">
                  <tbody>
                    <tr>
                      <td colSpan={6}>
                        <div className="cart-empty">
                          <FontAwesomeIcon
                            icon={faCartShopping}
                            className="p1 fa-stack fa-2x has-badge"
                            style={{ color: 'gray' }}
                          />
                          <p>Your Cart is Empty</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ) : (
                <table className="table cart-table mb-o table-responsive-sm">
                  <thead>
                    <tr>
                      <th>Action</th>
                      <th>Product</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th className="text-right">
                        <span id="amount" className="amount">
                          Total Amount
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {arr.map((data, index) => {
                      return (
                        <>
                          <tr>
                            <td>
                              <button className="prdct-delete">
                                {' '}
                                <i class="fa fa-trash" aria-hidden="true"></i>
                              </button>
                            </td>
                            <td>
                              <div className="product-img">
                                <img src="./vite.svg" alt="" />
                              </div>
                            </td>
                            <td>
                              <div className="product-img">
                                <p>punjabi</p>
                              </div>
                            </td>
                            <td>300</td>
                            <td>
                              <div className="prdct-qty-container">
                                <button className="prdct-qty-btn" type="button">
                                  <i className="fa fa-minus"></i>
                                </button>
                                <input
                                  type="text"
                                  className="qty-input-box"
                                  value={1}
                                  disabled
                                />
                                <button className="prdct-qty-btn" type="button">
                                  <i className="fa fa-plus"> </i>
                                </button>
                              </div>
                            </td>
                            <td className="text-right">400</td>
                          </tr>
                        </>
                      )
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>&nbsp;</th>
                      <th colSpan={3}>&nbsp;</th>
                      <th>
                        Items in cart <span className="ml-2 mr-2">:</span>{' '}
                        <span className="text-danger">4</span>
                      </th>
                      <th className="text-right">
                        Total price
                        <span className="ml-2 mr-2">:</span>{' '}
                        <span className="text-danger">4</span>
                      </th>
                    </tr>
                  </tfoot>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartDetails
