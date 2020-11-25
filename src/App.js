import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { LanguageContext } from './src/util/context'

import MainView from './src/mainView'
import ContatoView from './src/contatoView'
import ProjectView from './src/projectView'
import CurriculoView from './src/curriculo/curriculoView'
import NavBar from './src/components/navBar'
import Footer from './src/components/Footer'




class App extends React.Component {

    constructor() {
        super()
        this.state = {
            // the current languague
            language: false
        }
        // function to store the language preference
        this.changeLanguage = this.changeLanguage.bind(this)
        this.getDefaultLanguage = this.getDefaultLanguage.bind(this)
    }

    getDefaultLanguage() {
        // check localStorage
        // if present, set the state
        // if not, check user location/anything like this 
        // call storeDefaultLanguage
        return 'pt'
    }

    changeLanguage() {
        // dealing with Strict Mode
        let currentState = !this.state.language
        this.setState({language:currentState})

    }

    render() {

        return (
            <Router>
                <LanguageContext.Provider value={{ ...this.state, changeLanguage: this.changeLanguage }} >
                    <NavBar />
                    <Switch>
                        <Route path="/contato" component={ContatoView} />
                        <Route path="/curriculo" component={CurriculoView} />
                        <Route path="/projetos" component={ProjectView} />
                        <Route path="/" component={MainView} />
                    </Switch>
                    <Footer />
                </LanguageContext.Provider>
            </Router>

        )
    }

}

export default App;