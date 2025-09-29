import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer-info">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Sistema Recupera Item</h4>
            <p>
              Conectando pessoas aos seus pertences perdidos através da
              tecnologia e colaboração.
            </p>
          </div>
          <div className="footer-section">
            <h4>Links Rápidos</h4>
            <ul>
              <li>
                <Link to="/perdidos">Itens Perdidos</Link>
              </li>
              <li>
                <Link to="/achados">Itens Encontrados</Link>
              </li>
              <li>
                <Link to="/login">Entrar</Link>
              </li>
              <li>
                <Link to="/cadastro">Cadastrar</Link>
              </li>
              <li>
                <Link to="/sobre">Sobre</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Suporte</h4>
            <ul>
              <li>
                <Link to="/contato">Contato</Link>
              </li>
            </ul>
            <p>
              <Mail className="footer-icon" />
              suporte@recuperaitem.com
            </p>
            <p>
              <Phone className="footer-icon" />
              (11) 9999-9999
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
