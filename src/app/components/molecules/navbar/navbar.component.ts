import { Component, OnInit, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  @Input() userType:string = 'employer'; 

  navLinks: { [key: string]: any[] } = {
    '/': [{route: '/login', text: 'Iniciar sesión'},
              {route: '/register-option', text: 'Registrarse'}
    ],
    '/home': [{route: '/login', text: 'Iniciar sesión'},
              {route: '/register-option', text: 'Registrarse'}
    ],
    '/register-option': [{route: '/home', text: 'Inicio'},
    {route: '/login', text: 'Iniciar sesión'}
    ],
    '/register-employer': [{route: '/home', text: 'Inicio'},
    {route: '/login', text: 'Iniciar sesión'}
    ],
    '/register-user': [{route: '/home', text: 'Inicio'},
    {route: '/login', text: 'Iniciar sesión'}
    ],
    '/login': [{route: '/home', text: 'Inicio'},
    {route: '/register-option', text: 'Registrarse'}
    ],
    '/home-employer': [{route: '/home', text: 'Cerrar sesión'},
    ],
    '/offer-consult': [{route: `/home-${this.userType}`, text: 'Inicio'},
    {route: '/home', text: 'Cerrar sesión'}
    ],
    '/offer-list': [{route: `/home-${this.userType}`, text: 'Inicio'},
    {route: '/home', text: 'Cerrar sesión'}
    ],
    '/offer-report': [{route: `/home-${this.userType}`, text: 'Inicio'},
    {route: '/home', text: 'Cerrar sesión'}
    ],
    '/offer-report-list': [{route: `/home-${this.userType}`, text: 'Inicio'},
    {route: '/home', text: 'Cerrar sesión'}
    ],
    '/candidates-list': [{route: `/home-${this.userType}`, text: 'Inicio'},
    {route: '/home', text: 'Cerrar sesión'}
    ],
    '/candidate-info': [{route: `/home-${this.userType}`, text: 'Inicio'},
    {route: '/home', text: 'Cerrar sesión'}
    ],
    '/offer-search': [{route: '/login', text: 'Iniciar sesión'},
    {route: '/register-option', text: 'Registrarse'}
    ],
    '/offer-post': [{route: `/home-${this.userType}`, text: 'Inicio'},
    {route: '/home', text: 'Cerrar sesión'}
    ],
    '/profile-consult-user': [{route: `/home-${this.userType}`, text: 'Inicio'},
    {route: '/home', text: 'Cerrar sesión'}
    ],
    '/profile-consult-employer': [{route: `/home-${this.userType}`, text: 'Inicio'},
    {route: '/home', text: 'Cerrar sesión'}
    ],
    '/report-general': [{route: `/home-${this.userType}`, text: 'Inicio'},
    {route: '/home', text: 'Cerrar sesión'}
    ],
    '/report-dates-choice': [{route: `/home-${this.userType}`, text: 'Inicio'},
    {route: '/home', text: 'Cerrar sesión'}
    ],
    '/report-dates': [{route: `/home-${this.userType}`, text: 'Inicio'},
    {route: '/home', text: 'Cerrar sesión'}
    ],
    '/home-admin': [{route: '/home', text: 'Cerrar sesión'},
    ],
    '/home-user': [{route: '/home', text: 'Cerrar sesión'},
    ],
    '/offer-search-user': [{route: `/home-${this.userType}`, text: 'Inicio'},
    {route: '/home', text: 'Cerrar sesión'}
    ],

  };
  currentRoute: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

}
