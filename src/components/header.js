import React, { Component } from 'react'
import '../css/header.css'

export  class Header extends Component {
    render() {
        return (
            <div>
                <div class="col-md-12">                      
						<ul class="flat-information">
							<li class="user"><a href="admision.html">INSCRIPCION 2021</a></li>
							<li class="phone"><a href="tel:2994484857">Numero de telefono:#####</a></li>
							<li class="email"><a href="mailto:asesores@ifes.edu.ar">Mail####</a></li>
						</ul>                    
					</div>
            </div>    
        )
    }
}
