import './Recipes.css'
import { vegetarianRecipes } from '../../data/dataRecipes'

const Vegetarian = () => {
  return (
    <div className="recipes">
      <h1>Recetas Vegetarianas</h1>
      <section className="cards">
        {
          vegetarianRecipes.map((vegetarianRecipe) => (
            <div className='card'>
              <h3>Nombre: {vegetarianRecipe.nombre}</h3>
              <p>Descripcion: {vegetarianRecipe.descripcion}</p>
              <p>Dificultad: {vegetarianRecipe.dificultad}</p>
              <p>tiempo: {vegetarianRecipe.tiempo}</p>
              <p>tiempo: {vegetarianRecipe.tiempo}</p>
              <div>
                <button>Eliminar</button>
                <button>Editar</button>
                <button>Detalle</button>
              </div>
            </div>
          ))
        }
      </section>
    </div>
  )
}

export default Vegetarian