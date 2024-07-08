import ButtonB from '../elements/ButtonB'
import style from './Projects.module.css'
import Card from '../elements/Card'
import lpdnc from '../../image/projects/lpdnc.svg'
import portfolio from '../../image/projects/portfolio.svg'

function Projects() {
    return (
        <div className = {style.projects} id='Projects'>
            <h1> Projetos </h1>
            <Card
            img = {lpdnc}
            title = "LP - DNC"
            tech = "HTML, CSS e JS"
            description = "Desenvolvimento de uma Landing Page para o lançamento da formação em tecnologia"
            repo = "https://github.com/DanrleyLinhares/projeto-landing-page"
            site = "https://portfoliodan1.netlify.app/"
            />
            <Card
            img = {portfolio}
            title = "Portfolio React"
            tech = "HTML, CSS e JS"
            description = "Desenvolvimento de uma Landing Page para o lançamento da formação em tecnologia"
            repo = "https://github.com/DanrleyLinhares/projeto-landing-page"
            site = "https://portfoliodan1.netlify.app/"/>
            <ButtonB text='Acesse meu repositório' link='https://github.com/DanrleyLinhares?tab=repositories'/>
        </div>
    )
}

export default Projects