import React from "react";
import "./sobre.css";
import { GraduationCap, UserCircle2, ShieldCheck } from "lucide-react";

function Sobre() {
  return (
    <div className="container-sobre">
      <h1 className="main-title">Sobre o sistema</h1>

      <p className="descricao">
        O sistema tem como objetivo auxiliar alunos, professores e demais
        funcionários da Universidade Federal do Ceará (UFC) na localização e
        recuperação de objetos perdidos dentro do perímetro do campus.
      </p>

      <p className="descricao">
        Do ponto de vista técnico, o sistema será desenvolvido com base na
        arquitetura Cliente-Servidor e utilizará HTTPS para garantir segurança.
      </p>

      <h2 className="section-title">Módulos do Sistema</h2>
      <ul className="modulos-lista">
        <li>Frontend Web: Interface gráfica com a qual o usuário interage.</li>
        <li>Backend (API REST): Responsável pela lógica de negócio.</li>
        <li>
          Banco de Dados (PostgreSQL): Armazena dados de objetos e usuários.
        </li>
      </ul>

      <h2 className="section-title">Usuários do Sistema</h2>

      <section className="personas">
        <div className="persona">
          <GraduationCap size={40} className="persona-icon" />
          <div>
            <h3>Aluno</h3>
            <p>
              Estudante com rotina intensa. Costuma perder objetos e precisa de
              um meio confiável para recuperar seus pertences por meio da
              plataforma.
            </p>
          </div>
        </div>

        <div className="persona">
          <UserCircle2 size={40} className="persona-icon" />
          <div>
            <h3>Docente</h3>
            <p>
              Professor com agenda cheia. Pode perder objetos em salas ou
              encontrá-los, e precisa de praticidade para registrar ou
              consultar.
            </p>
          </div>
        </div>

        <div className="persona">
          <ShieldCheck size={40} className="persona-icon" />
          <div>
            <h3>Guarda da Guarita</h3>
            <p>
              Responsável por receber objetos encontrados. Utiliza o sistema
              para cadastrar pertences e atualizar seu status.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sobre;
