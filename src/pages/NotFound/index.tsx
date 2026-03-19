import { Container } from "../../components/Container";
import { GenericHtml } from "../../components/GenericHtml";
import Heading from "../../components/Heading";
import MainTemplate from "../../templates/MainTemplate";

export default function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <GenericHtml>
          <Heading>404 - Portal Dimensional 🌪️</Heading>
          
          <div style={{ 
            background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)",
            padding: "2rem",
            borderRadius: "12px",
            color: "var(--text-over-primary)",
            marginBottom: "2rem",
            textAlign: "center"
          }}>
            <span style={{ fontSize: "4rem", display: "block", marginBottom: "1rem" }}>
              🌀
            </span>
            <p style={{ fontSize: "1.2rem", margin: 0 }}>
              Você acabou de encontrar um portal interdimensional!
            </p>
          </div>

          <p style={{ color: "var(--text-default)" }}>
            <strong>Parabéns, explorador! 🎉</strong> Você é uma das poucas pessoas 
            que já conseguiu chegar até aqui. Infelizmente, este ainda é um território 
            inexplorado - como aquela área no mapa dos jogos que ainda não foi lançada.
          </p>

          <div style={{
            backgroundColor: "var(--gray-800)",
            padding: "1.5rem",
            borderRadius: "8px",
            margin: "1.5rem 0",
            border: "1px solid var(--gray-600)"
          }}>
            <h3 style={{ 
              marginTop: 0, 
              color: "var(--text-default)"
            }}>
              🎮 O que fazer agora?
            </h3>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li style={{ 
                marginBottom: "0.8rem", 
                color: "var(--text-default)"
              }}>
                <span style={{ marginRight: "0.5rem" }}>🏠</span> 
                Voltar para o{" "}
                <a 
                  href="/" 
                  style={{ 
                    color: "var(--link-color)", 
                    fontWeight: "bold",
                    textDecoration: "none",
                    transition: "color 0.2s"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "var(--link-hover)"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "var(--link-color)"}
                >
                  acampamento base
                </a>
              </li>
              <li style={{ 
                marginBottom: "0.8rem",
                color: "var(--text-default)"
              }}>
                <span style={{ marginRight: "0.5rem" }}>📜</span> 
                Conferir suas aventuras no{" "}
                <a 
                  href="/history" 
                  style={{ 
                    color: "var(--link-color)", 
                    fontWeight: "bold",
                    textDecoration: "none",
                    transition: "color 0.2s"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "var(--link-hover)"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "var(--link-color)"}
                >
                  grimório de históricos
                </a>
              </li>
              <li style={{ 
                marginBottom: "0.8rem",
                color: "var(--text-default)"
              }}>
                <span style={{ marginRight: "0.5rem" }}>🔮</span> 
                Ou ficar aqui e tentar desvendar os mistérios do universo (spoiler: não tem nada aqui)
              </li>
            </ul>
          </div>

          <p style={{ color: "var(--text-default)" }}>
            <strong>Dica de explorador:</strong> Se você realmente acredita que 
            deveria ter algo neste portal dimensional, entre em contato com nossos 
            magos desenvolvedores. Eles podem invocar esta página do vazio digital! 
            🧙‍♂️✨
          </p>

          <div style={{
            textAlign: "center",
            marginTop: "2rem",
            padding: "1rem",
            borderTop: "2px dashed var(--gray-600)",
            color: "var(--text-muted)"
          }}>
            <p style={{ margin: 0 }}>
              "Nem todo que vagueia está perdido" - J.R.R. Tolkien 
              <span style={{ 
                display: "block", 
                fontSize: "0.9rem", 
                marginTop: "0.5rem",
                color: "var(--text-muted)"
              }}>
                (mas no seu caso, talvez esteja um pouquinho)
              </span>
            </p>
          </div>

          <div style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            marginTop: "2rem",
            flexWrap: "wrap"
          }}>
            <a 
              href="/"
              style={{
                backgroundColor: "var(--primary)",
                color: "var(--text-over-primary)",
                padding: "0.8rem 1.5rem",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
                transition: "all 0.2s",
                border: "none",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--primary-dark)";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--primary)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              🚀 Voltar ao início
            </a>
            <a 
              href="/history"
              style={{
                backgroundColor: "var(--success)",
                color: "var(--text-over-success)",
                padding: "0.8rem 1.5rem",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
                transition: "all 0.2s",
                border: "none",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--primary-dark)";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--success)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              📜 Ver histórico
            </a>
          </div>
        </GenericHtml>
      </Container>
    </MainTemplate>
  );
}