import "./footer.css";
export function Footer() {
  return (
    <footer className="main-footer">
      <div className="flex-main-footer">
        <div className="cont-article-main-footer">
          <h3 className="article-main-footer-title">CATEGORIAS</h3>
          <ul className="article-main-footer-ul">
            <li className="article-main-footer-li">
              <a className="article-main-footer-a" href="/politica">Politica</a>
            </li>
            <li className="article-main-footer-li">
              <a className="article-main-footer-a" href="/deporte">Deporte</a>
            </li>
            <li className="article-main-footer-li">
              <a className="article-main-footer-a" href="/economia">Economia</a>
            </li>
            <li className="article-main-footer-li">
              <a className="article-main-footer-a" href="/ultimo">Lo Ultimo!</a>
            </li>
          </ul>
        </div>
        <div className="cont-article-main-footer">
          <h3 className="article-main-footer-title">OTROS</h3>
          <ul className="article-main-footer-ul">
            <li className="article-main-footer-li">
              <a className="article-main-footer-a" href="/">DataActual</a>
            </li>
            <li className="article-main-footer-li">
              <a className="article-main-footer-a" href="/ayuda">Ayuda</a>
            </li>
            <li className="article-main-footer-li">
              <a className="article-main-footer-a" href="/mapadelsitio">Mapa del Sitio</a>
            </li>
            <li className="article-main-footer-li">
              <a className="article-main-footer-a" href="/terminos">Terminos & Condiciones</a>
            </li>
          </ul>
        </div>
        <div className="cont-article-main-footer">
          <h3 className="article-main-footer-title">REDES SOCIALES</h3>
          <ul className="article-main-footer-ul">
            <li className="article-main-footer-li">
              <a className="article-main-footer-a" href="/facebook">Facebook</a>
            </li>
            <li className="article-main-footer-li">
              <a className="article-main-footer-a" href="/instagram">Instagram</a>
            </li>
            <li className="article-main-footer-li">
              <a className="article-main-footer-a" href="/twitter">Twitter</a>
            </li>
            <li className="article-main-footer-li">
              <a className="article-main-footer-a" href="/threads">Threads</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
