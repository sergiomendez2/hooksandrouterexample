
const friends = ['fernando', 'juan', 'pedro'];
const name = 'Marvin';

const Home = () => {
  return(
      <div>
      <h1 className='title'  style={{color: 'red'}}>Hola Usuario {name}</h1>
        <p>This is your list of friends</p>
        <ul>
          {friends.map((amigo) => <li key={amigo}>{amigo}</li>)}
        </ul>
      </div>
  )
}

export default Home;