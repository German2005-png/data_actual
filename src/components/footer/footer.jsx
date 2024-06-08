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
              <a className="article-main-footer-a" href="/politica">Deporte</a>
            </li>
            <li className="article-main-footer-li">
              <a className="article-main-footer-a" href="/politica">Economia</a>
            </li>
            <li className="article-main-footer-li">
              <a className="article-main-footer-a" href="/politica">Lo Ultimo!</a>
            </li>
          </ul>
        </div>
        <div className="cont-article-main-footer">
          <h3 className="article-main-footer-title">OTROS</h3>
          <ul className="article-main-footer-ul">
            <li className="article-main-footer-li">
              <a className="article-main-footer-a" href="/politica">DataActual</a>
            </li>
            <li className="article-main-footer-li">
              <a className="article-main-footer-a" href="/politica">Ayuda</a>
            </li>
            <li className="article-main-footer-li">
              <a className="article-main-footer-a" href="/politica">Mapa del Sitio</a>
            </li>
            <li className="article-main-footer-li">
              <a className="article-main-footer-a" href="/politica">Terminos & Condiciones</a>
            </li>
          </ul>
        </div>
        <div className="cont-article-main-footer">
          <h3 className="article-main-footer-title">REDES SOCIALES</h3>
          <ul className="article-main-footer-ul">
            <li className="article-main-footer-li">
              <a className="article-main-footer-a" href="/politica">Facebook</a>
            </li>
            <li className="article-main-footer-li">
              <a className="article-main-footer-a" href="/politica">Instagram</a>
            </li>
            <li className="article-main-footer-li">
              <a className="article-main-footer-a" href="/politica">Twitter</a>
            </li>
            <li className="article-main-footer-li">
              <a className="article-main-footer-a" href="/politica">Threads</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
