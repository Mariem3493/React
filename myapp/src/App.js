
{/* importation de notre stylesheet boostrap */}
import 'bootstrap/dist/css/bootstrap.min.css';
{/* importation du Carousell */}
import Carousell from './Composant/Carousell';
{/* importation de notre Formulaire */}
import Formulo from './Composant/Formulo';
{/* Function qui retourne nos composants */}
function App() {
  return (
    <div>
    {/*appel de nos composants */}

      <Carousell/>
      <Formulo/>
    </div>
  )
}

export default App;
