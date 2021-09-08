import './Services.css';

function Services () {

  return (
    <div className="services">
      <h1>Szolgáltatásaink</h1>
      <div className="services-type">
        <p>Gyepfelszedés</p>
        <p></p>
      </div>
      <div className="services-type">
        <p>Gyepszőnyeg terítése</p>
        <p></p>
      </div>
      <div className="services-type">
        <p>Földmunkák</p>
        <p></p>
      </div>
      <div className="services-type">
        <p>Kertépítés</p>
        <p></p>
      </div>
      <div className="services-type">
        <p>Kertfenntartás</p>
        <ul>
          <li>ágdarálás</li>
          <li>fakivágás (nem alpintechnikával)</li>
          <li>fűnyírás</li>
          <li>gyallyazás, metszés</li>
          <li>gyepszellőztetés, trágyázás</li>
          <li>gyomirtás</li>
          <li>sövénynyírás</li>
        </ul>
      </div>
      <div className="services-type">
        <p>Kútszerelvényezés</p>
        <ul>
          <li>ásott kutak</li>
          <li>fúrt kutak</li>
          <li>vert csőkutak</li>
        </ul>
      </div>
      <div className="services-type">
        <p>Öntözőrendszerek telepítése és javítása</p>
        <ul>
          <li>Hunter</li>
          <li>Rain Bird</li>
          <li>Toro</li>
          <li>K-Rain</li>
          <li>Orbit</li>
        </ul>
      </div>
      <div className="services-type">
        <p>Térburkolat-készítés</p>
        <ul>
          <li>viacolor</li>
          <li>gumiszőnyeg</li>
        </ul>
      </div>
      <div className="services-type">
        <p>Kerítések építése</p>
        <p></p>
      </div>
    </div>
  );
}

export default Services;