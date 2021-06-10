import React from 'react'
import fundamentals from "../assets/fundamentals.svg"
import react from "../assets/react.svg"

function LearnSection() {
    return (
        <>
                 <section id="learn" class="p-5">
                        <div class="container">
                            <div class="row align-items-center justify-content-between">
                                    <div class="col-md">
                                        <img src={fundamentals} class="img-fluid" alt="" />
                                    </div>
                                    <div class="col-md p-5">
                                        <h1>Learn The Fundamentals</h1>
                                        <h4 class="lead">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                            Similique deleniti possimus magnam corporis ratione facere!
                                        </h4>
                                        <p>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                                            reiciendis eius autem eveniet mollitia, at asperiores suscipit
                                            quae similique laboriosam iste minus placeat odit velit quos,
                                            nulla architecto amet voluptates?
                                        </p>
                                            <a href="#" class="btn btn-light mt-3">
                                                  <i class="bi bi-chevron-right"></i> Read More
                                            </a>
                                    </div>
                            </div>
                        </div>
                 </section>

                 <section id="learn" class="p-5 bg-dark text-light">
                        <div class="container">
                                <div class="row align-items-center justify-content-between">
                                    
                                    <div class="col-md p-5">
                                            <h1>Learn React</h1>
                                            <p class="lead">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                                Similique deleniti possimus magnam corporis ratione facere!
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                                                reiciendis eius autem eveniet mollitia, at asperiores suscipit
                                                quae similique laboriosam iste minus placeat odit velit quos,
                                                nulla architecto amet voluptates?
                                            </p>
                                            <a href="#" class="btn btn-light mt-3">
                                                <i class="bi bi-chevron-right"></i> Read More
                                            </a>
                                    </div>

                                    <div class="col-md">
                                        <img src={react} class="img-fluid" alt="" />
                                    </div>
                                 </div>
                        </div>
               </section>

        </>
    )
}

export default LearnSection
