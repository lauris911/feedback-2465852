import Header from "./componentes/Header";
import FeedbackItem from "./componentes/feedbackitem";

function App(){

        //objeto de estilos
        const HeaderStyles = {
            backgroundColor: '#ed5bad',
            color: 'black'
        }

    return (
    <div className="container">
        {/*props: atributos de etiqueta de un  coponente react*/}
        <Header 
             bgColor={HeaderStyles.backgroundColor}
             color= {HeaderStyles.color}
             />
        
        <FeedbackItem />
        <FeedbackItem />
        <FeedbackItem />
        <FeedbackItem />
        </div>
    )
}

export default App;