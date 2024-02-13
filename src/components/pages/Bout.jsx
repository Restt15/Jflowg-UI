// Code: About page

import Banner from "../../assets/Banner/jflowg.jpeg";


const About = () => {
  return (
    
    <div className="sm:flex items-center bg-sky-900">
      <div className="sm:w-1/2 flex justify-center">
        <div className="p-4 bg-white shadow-lg rounded-lg flex items-center justify-center w-1/2">
            <img src={Banner} alt="" className="w-64 h-64 object-cover rounded-md"/>
        </div>
       </div>
      <div className="sm:w-1/2 p-4">
        <div className="text"> 
        <span className="text-gray-100 border-b-2 border-indigo-100 uppercase">Acerca de Nosotros</span>
        <h2 className="text-4xl font-bold">Acerca de <span className="text-yellow-400">Jflowg</span>
        </h2>
       <p className="text-lg mt-4"> 
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptate quis iusto voluptatum, repudiandae quod odit laudantium quia, doloribus laborum, rerum dolor deserunt non consequuntur? Delectus, eaque mollitia fuga reprehenderit deserunt ratione quo rem accusantium. Molestias mollitia doloremque veniam sapiente libero voluptates voluptatibus pariatur ipsam optio expedita labore ullam perferendis quidem sed suscipit dolores assumenda obcaecati non enim sequi, in voluptatum. Vel reprehenderit reiciendis, accusamus eos, officia repellat id sint temporibus unde doloremque placeat suscipit aliquid at in autem neque aperiam, libero natus vero maiores perferendis? Dolorum numquam ea reprehenderit iste rerum a, amet officiis. Recusandae dolore ut tenetur quae.
       </p>
      </div>
    </div>
  </div>
 

    
    
  )
}

export default About