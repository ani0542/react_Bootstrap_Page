import React from 'react'
import showcase from "../assets/showcase.svg"


function Showcase() {
    return (
        <>
                <section
                //text-sm-start means in smaller device it ll start from start and above that center
                     class="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start"
                 >
                        <div class="container">
                            {/* // d-sm-flex means it ll not be in flex in smaller device */}
                            <div class="d-sm-flex align-items-center justify-content-between pt-5">  

                            <div>
                                   <h1>Become a <span class="text-warning"> Web Developer </span></h1>
                                    <p class="lead my-4">
                                        We focus on teaching our students the fundamentals of the latest
                                        and greatest technologies to prepare them for their first dev role
                                    </p>
                                    <button
                                        class="btn btn-primary btn-lg"
                                        data-bs-toggle="modal"
                                        data-bs-target="#enroll"
                                    >
                                         Start The Enrollment
                                    </button>
                            </div>

                            {/* //d-none d-sm- block means i dont want to show image in small device */}
                            <img
                                class="img-fluid w-50 d-none d-sm-block"
                                src={showcase}
                                alt="error"
                            />

                            </div>
                        </div>
              </section>
        </>
    )
}

export default Showcase
