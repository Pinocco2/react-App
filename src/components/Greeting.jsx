
function Greeting(props) {

    const site = {
        name: "Google",
        url: "https://www.google.com/"
      };

      const num1 = 5;
      const num2 = 7;
      const sum = num1 + num2;

      const colors = ["Червоний", "Синій", "Зелений"];
    
    
    return (
        <div>
            <h1 className="title">hello {props.name}</h1>
            <p>Ласкаво просимо до нашого сайту!</p>
            <img src="https://www.mbloging.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fyynr1uml%2Fproduction%2Fd3f0ff2ab5398aaffb00fa0b3afcb238772f42e7-1024x576.jpg%3Fw%3D1024%26auto%3Dformat&w=3840&q=75" alt="foto" />
            <h2>Моє улюблене посилання:</h2>
            <a href={site.url} target="_blank" rel="noopener noreferrer">
                {site.name}
            </a>

            <h2>Сума чисел:</h2>
            <p>{num1} + {num2} = {sum}</p>

            <h2>Список кольорів:</h2>
            <ul>
                {colors.map((color, index) => (
                    <li key={index}>{color}</li>
                ))}
            </ul>
        </div >
    )
}
export default Greeting