import Personal from './components/Personal'
import Portfolio from './components/Portfolio'
import './app.css'

function App() {
    return (
        <div className="App">
            <main className="page-holder">
                <Personal />
                <Portfolio />
            </main>
        </div>
    )
}

export default App
