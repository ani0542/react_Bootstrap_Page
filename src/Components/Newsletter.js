import React from 'react'

function Newsletter() {
    return (
        <>
              <section class="bg-primary text-light p-5">
                    <div class="container">
                        <div class="d-sm-flex justify-content-between align-items-center">
                            <div className='col-lg-6 col-sm-6'>
                                <h2 class="mb-3 mb-md-0">Sign Up For Our Newsletter</h2>
                            </div>
                            <div className='col-lg-6 col-sm-6'>
                                <div class="input-group news-input">
                                    <input type="text" class="form-control" placeholder="Enter Email" />
                                    <button class="btn btn-dark btn-lg" type="button">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </>
    )
}

export default Newsletter
