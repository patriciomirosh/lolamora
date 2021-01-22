import React from 'react'
import '../css/container.css'

export const Container = () => {
    return (
        <div>
            <section className="flat-row parallax parallax3">     
        <div className="overlay"></div>   
        <div className="container">
            <div className="row">
                <div className="col-sm-12 flat-promobox style2 color-white">
                    <div className="promobox-group-content">
                        <h3><span>Conocenos</span></h3> 
                      </div>
                    <div className="promobox-group-btn">
                        <a className="flat-button button-color medium theme" href="instanqn.html">Sede Neuquen</a>
                        <a className="flat-button button-color medium border-white" href="instaplot.html">Sede Plottier</a>
                    </div>
                </div>
            </div>      
        </div>
    </section>
        </div>
    )
}
