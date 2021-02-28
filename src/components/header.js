import React, { Component } from 'react'
import '../css/header.css'

export  class Header extends Component {
    render() {
        return (
            <div>
                <div class="col-md-12">                      
						<ul class="flat-information">
							<li class="user"><a href="admision.html">INSCRIPCION 2021</a></li>
							<li class="phone"><a href="tel:0341-3172245">Numero de telefono:0341-3172245</a></li>
							<li class="email"><a href="mailto:####">Mail####</a></li>
						</ul>                    
					</div>
            </div>    
        )
    }
}
