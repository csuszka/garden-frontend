import React from 'react';
import './Description.css';

let Description = () => {
  return (
    <div className='description'>
      <h1>Részletek a feltételekből</h1>
      <section className='terms'>
        <h3>Az igénylő</h3>
        <ul>
          <li>
            Egyedülállóként vagy házastárssal/élettárssal együtt igényelhet
          </li>
          <li>
            Nincs köztartozása (egyikőjüknek sem)
          </li>
          <li>
            Nincs TB tartozása (egyikőjüknek sem)
          </li>
          <li>
            Van TB jogviszonya (kivéve, ha gyámok)
          </li>
          <li>
            Nem lehet a felújítást végző vállalkozó közeli hozzátartozója
          </li>
        </ul>
        <h3>A gyermekek</h3>
        <ul>
          <li>
            Magzat, a várandósság betöltött 12. hetét követően
          </li>
          <li>
            Az igénylő által gyámolt személy
          </li>
          <li>
            25. életévét már betöltött, megváltozott munkaképességű gyermek
          </li>
          <li>
            25. életévét be nem töltött (vér szerinti vagy örökbefogadott) eltartott gyermek
          </li>
        </ul>
        <h3>Az ingatlan</h3>
        <ul>
          <li>
            Legalább egy éve szerzett
          </li>
          <li>
            Legalább egy éve igazoltan ott lakik (a kérelmező és a gyermek)
          </li>
          <li>
            Támogatást még nem vettek fel rá (pl. CSOK)
          </li>
          <li>
            Legalább 50%-os tulajdoni hányaddal rendelkeznek
          </li>
        </ul>
        <h3>A támogatás összege</h3>
        <ul>
          <li>
            Ha az anyagköltség és a munkadíj közül a kisebb érték nem éri el a kettő összegének a negyedét, akkor a kisebbik érték duplája a megigényelhető összeg.
          </li>
          <li>
            Amennyiben eléri legalább a negyedét, akkor a kettő összegének a fele igényelhető
          </li>
        </ul>
      </section>
      <h3>A teljes szövegezést megtalálhatja: Magyar Közlöny 2020 November 25.</h3>
      <a href='https://magyarkozlony.hu/dokumentumok/1862b3fddd579b2cd68a5098a02df86939637121/letoltes'>LETÖLT</a>
    </div>
  )
}

export default Description;