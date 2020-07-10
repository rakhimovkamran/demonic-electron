// Static Route Components
import MainView from '../../views/Main'
import GenresView from '../../views/Genres'
import PlatformsView from '../../views/Platforms'
import SearchView from '../../views/Search'

// Dynamic Route Components
import GameView from '../../views/Game'
import GenreView from '../../views/Genre'
import PlatformView from '../../views/Platform'

export default [

    // Static routes
    { path : '/',                   component : MainView   },
    
    { path : '/discover/genres',    component : GenresView },
    { path : '/discover/platforms', component : PlatformsView },
    { path : '/search',             component : SearchView },

    // Dynamic routes
    { path : '/game/:slug',  component : GameView },
    { path : '/genre/:slug', component : GenreView },
    { path : '/platform/:slug', component : PlatformView },
    
]