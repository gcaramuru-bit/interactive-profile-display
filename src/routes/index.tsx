import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Instagram, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import gabrielSmiling from "@/assets/gabriel-sorrindo.jpg.asset.json";
import gabrielPortrait from "@/assets/gabriel-retrato.jpg.asset.json";
import karenFeedback from "@/assets/depoimento-karen-kume.png.asset.json";
import guideCover from "@/assets/guia-comercial-clinicas.png.asset.json";
import kitPanel from "@/assets/kit-painel.png.asset.json";
import kitClassifier from "@/assets/kit-classificador.png.asset.json";
import kitRuler from "@/assets/kit-regua.png.asset.json";
import kitPlan from "@/assets/kit-plano.png.asset.json";

const links = {
  consultoria: "https://gabriel426.yayforms.link/lVx7qae",
  instagram: "https://www.instagram.com/gabriel.caramuru/",
};

const stats = [
  ["+150", "empresas impactadas"],
  ["+13 mil", "pessoas treinadas"],
  ["+1.000", "empresários desenvolvidos"],
  ["+1.000h", "ao lado de líderes e executivos"],
];

const pillars = [
  ["01", "Produto high ticket e esteira médica", "Transformar conhecimento médico em tratamentos, protocolos e produtos claros, valorizados e rentáveis."],
  ["02", "Oferta médica high ticket", "Construir ofertas que façam o paciente compreender valor antes de analisar apenas o preço."],
  ["03", "Processo de venda", "Transformar contatos, avaliações e propostas em pacientes e faturamento por meio de processo comercial."],
  ["04", "Atração de pacientes", "Gerar novas oportunidades e aproveitar melhor as que a clínica já possui."],
  ["05", "Gestão clínica", "Organizar comercial, marketing, pessoas, experiência do paciente e rotina de gestão."],
];

const solutions = [
  { tag: "Estratégia completa", title: "Consultoria PMB", headline: "Para quem precisa olhar a clínica como empresa.", text: "Uma consultoria estratégica para organizar produto, oferta, vendas, atração e gestão a partir dos gargalos reais do negócio.", detail: "Produto · Oferta · Vendas · Atração · Gestão", cta: "Conhecer a consultoria" },
  { tag: "Processo comercial", title: "Guia Comercial para Clínicas", headline: "Transforme atendimento em processo de venda.", text: "Um manual prático para estruturar como sua equipe conduz cada oportunidade — do primeiro contato ao fechamento, follow-up e indicação.", detail: "Material completo, direto e aplicável à rotina da clínica.", cta: "Conhecer o guia", featured: "guide" },
  { tag: "Gestão de pessoas", title: "Kit do Time Autogerenciável", headline: "Pare de decidir sobre pessoas no achismo.", text: "Uma ferramenta prática para avaliar cada colaborador, visualizar a situação do time e transformar percepção em decisões e planos de desenvolvimento.", detail: "Habilidades técnicas × emocionais · Plano 30 / 60 / 90 dias", cta: "Conhecer o kit", featured: "kit" },
  { tag: "Inteligência artificial", title: "IA e automações personalizadas", headline: "Nem todo trabalho precisa continuar manual.", text: "Projetos sob medida para economizar tempo, melhorar atendimento, organizar informações e aumentar eficiência.", detail: "Paciente → Atendimento → IA → CRM → Follow-up", cta: "Entender o que posso automatizar" },
];

const guideItems = ["Atendimento", "Scripts", "Agendamento", "Follow-up", "Recuperação", "Rotina comercial", "Indicação"];
const guideFlow = ["Lead", "Atendimento", "Agendamento", "Avaliação", "Proposta", "Follow-up", "Fechamento", "Indicação"];
const kitSteps = ["Avalie", "Visualize", "Decida", "Desenvolva"];
const kitVisuals = [
  { image: kitRuler.url, label: "Régua de avaliação", note: "+25 habilidades com critérios claros" },
  { image: kitClassifier.url, label: "Matriz da direção", note: "Habilidades técnicas × emocionais" },
  { image: kitPanel.url, label: "Painel do time", note: "Visão consolidada para decisões" },
  { image: kitPlan.url, label: "Plano de ação", note: "Desenvolvimento individual 30 / 60 / 90 dias" },
];

const cases = [
  { name: "Dr. Pablo", context: "Comercial, gestão e equipe", before: "R$300K", after: "+R$600K/mês" },
  { name: "Dra. Rafaela Sobreiro", context: "Instituto Bioregenera", before: "R$300K", after: "+R$800K/mês" },
  { name: "Dra. Karen Kume", context: "Posicionamento, comunicação e protocolos", before: "Consultório próprio", after: "10x mais faturamento", feedback: true },
  { name: "Dra. Viviane", context: "Consultório próprio", before: "30 dias", after: "o mesmo em 15 dias" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gabriel Caramuru — Crescimento para Clínicas" },
      { name: "description", content: "Consultoria para médicos e donos de clínicas crescerem com produto, oferta, vendas, atração e gestão." },
      { property: "og:title", content: "Gabriel Caramuru — Crescimento para Clínicas" },
      { property: "og:description", content: "Estratégia comercial e empresarial para clínicas menos dependentes do dono." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="site-shell">
      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <a className="wordmark" href="#inicio" aria-label="Gabriel Caramuru — início">Gabriel Caramuru</a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#sobre">Sobre</a><a href="#metodo">Método</a><a href="#solucoes">Soluções</a><a href="#resultados">Resultados</a>
        </nav>
        <a className="header-cta" href={links.consultoria} target="_blank" rel="noreferrer">Conversar <ArrowUpRight size={15} /></a>
        <button className="menu-button" type="button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        {menuOpen && <nav className="mobile-nav" aria-label="Navegação móvel"><a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a><a href="#metodo" onClick={() => setMenuOpen(false)}>Método</a><a href="#solucoes" onClick={() => setMenuOpen(false)}>Soluções</a><a href="#resultados" onClick={() => setMenuOpen(false)}>Resultados</a></nav>}
      </header>

      <section id="inicio" className="hero dark-section">
        <div className="hero-content reveal">
          <p className="eyebrow">Consultoria para médicos e donos de clínicas</p>
          <h1>Sua clínica pode faturar <span>2x mais.</span><small>Sem você precisar trabalhar 2x mais.</small></h1>
          <p className="hero-copy">Estratégia comercial e gestão para médicos que descobriram que uma clínica não cresce apenas com medicina.</p>
          <p className="discipline">Produto <i /> Oferta <i /> Vendas <i /> Atração <i /> Gestão</p>
          <a className="button button--light" href={links.consultoria} target="_blank" rel="noreferrer">Quero conversar com Gabriel <ArrowUpRight size={18} /></a>
          <small>Conversa inicial de diagnóstico.</small>
        </div>
        <div className="hero-portrait" aria-hidden="true"><img src={gabrielPortrait.url} alt="" /></div>
        <a className="scroll-cue" href="#sobre" aria-label="Ir para Sobre mim"><ArrowDown size={18} /></a>
      </section>

      <section id="sobre" className="light-section about section-pad">
        <div className="section-heading reveal"><p className="eyebrow">Sobre mim</p><h2>Eu não comecei minha carreira dentro de uma sala de reunião.</h2></div>
        <div className="about-grid">
          <div className="about-image reveal"><img src={gabrielSmiling.url} alt="Gabriel Caramuru" loading="lazy" /></div>
          <div className="about-copy reveal">
            <p className="lead">Comecei vendendo.</p>
            <p>Já vendi na rua, empreendi, trabalhei com Mercado Livre e passei pela engenharia antes de encontrar o trabalho que definiria minha trajetória: desenvolver pessoas, líderes e empresas.</p>
            <p>Atuei com vendas, comportamento, liderança e gestão em projetos envolvendo organizações como Petrobras, Gerdau, Mercado Livre, AngloGold Ashanti, Três Corações, São Martinho e dss+.</p>
            <strong>Hoje concentro essa experiência em ajudar médicos a se tornarem também melhores empresários.</strong>
          </div>
        </div>
        <div className="stats-grid">{stats.map(([value, label]) => <div className="stat reveal" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
      </section>

      <section id="metodo" className="dark-section section-pad method">
        <div className="section-heading reveal"><p className="eyebrow">Metodologia PMB</p><h2>Uma clínica não cresce corrigindo apenas uma parte.</h2><p>A PMB analisa cinco áreas que precisam funcionar juntas para transformar conhecimento médico em crescimento empresarial.</p></div>
        <div className="method-line">{pillars.map(([number, title, text]) => <article className="pillar reveal" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
        <div className="method-close reveal"><p>O gargalo nem sempre está onde parece.</p><span>Você pode achar que precisa de mais pacientes quando, na verdade, está perdendo os que já chegam.</span><a className="text-link" href={links.consultoria} target="_blank" rel="noreferrer">Diagnosticar minha clínica <ArrowUpRight size={16} /></a></div>
      </section>

      <section id="solucoes" className="light-section section-pad solutions">
        <div className="section-heading reveal"><p className="eyebrow">Soluções</p><h2>Nem todo negócio precisa começar pelo mesmo lugar.</h2><p>Estruture a clínica inteira ou resolva primeiro o gargalo que mais custa dinheiro, tempo ou energia.</p></div>
        <div className="solutions-list">{solutions.map((item, index) => <article className={`solution reveal ${item.featured ? `solution--${item.featured}` : ""}`} key={item.title}><div className="solution-index">0{index + 1}</div><div className="solution-body"><span className="tag">{item.tag}</span><h3>{item.title}</h3><h4>{item.headline}</h4><p>{item.text}</p><div className="solution-detail">{item.detail}</div>{item.featured === "guide" && <><ul className="feature-chips" aria-label="Conteúdo do Guia">{guideItems.map((label) => <li key={label}>{label}</li>)}</ul><div className="guide-flow" aria-label="Fluxo comercial">{guideFlow.map((label, flowIndex) => <span key={label}>{label}{flowIndex < guideFlow.length - 1 && <i>→</i>}</span>)}</div><figure className="guide-visual"><img src={guideCover.url} alt="Mockup real do Guia Comercial para Clínicas" loading="lazy" /><figcaption>Guia Comercial para Clínicas</figcaption></figure></>}{item.featured === "kit" && <><div className="kit-steps" aria-label="Como o Kit funciona">{kitSteps.map((step, stepIndex) => <span key={step}><b>0{stepIndex + 1}</b>{step}</span>)}</div><div className="kit-gallery">{kitVisuals.map((visual) => <figure key={visual.label}><img src={visual.image} alt={`Tela real: ${visual.label}`} loading="lazy" /><figcaption><strong>{visual.label}</strong><span>{visual.note}</span></figcaption></figure>)}</div></>}<a className="text-link dark-link" href={links.consultoria} target="_blank" rel="noreferrer">{item.cta} <ArrowUpRight size={16} /></a></div></article>)}</div>
      </section>

      <section id="resultados" className="dark-section section-pad results">
        <div className="section-heading reveal"><p className="eyebrow">Resultados</p><h2>Estratégia só importa quando produz resultado.</h2></div>
        <div className="cases">{cases.map((item, index) => <article className={`case reveal ${index % 2 ? "case--reverse" : ""}`} key={item.name}><div className="case-context"><span>Case 0{index + 1}</span><h3>{item.name}</h3><p>{item.context}</p>{item.feedback && <img className="feedback-shot" src={karenFeedback.url} alt="Depoimento real de Karen Kume no WhatsApp" loading="lazy" />}</div><div className="case-result"><span>{item.before}</span><i>→</i><strong>{item.after}</strong></div></article>)}</div>
        <p className="results-note">Resultados representam casos específicos e podem variar conforme contexto, execução e características de cada operação.</p>
      </section>

      <section className="final-cta dark-section section-pad">
        <p className="eyebrow reveal">Uma conversa antes de qualquer proposta</p>
        <h2 className="reveal">Sua clínica não precisa necessariamente de mais uma estratégia.</h2>
        <h3 className="reveal">Primeiro, precisamos descobrir <span>onde está o gargalo.</span></h3>
        <p className="reveal">Se sua clínica já fatura, mas poderia vender melhor, organizar a equipe ou crescer com menos dependência de você, podemos começar por uma conversa.</p>
        <a className="button button--blue reveal" href={links.consultoria} target="_blank" rel="noreferrer">Quero conversar com Gabriel <ArrowUpRight size={18} /></a>
        <small>Preencha a aplicação. Se houver aderência, avançamos para uma conversa de diagnóstico.</small>
      </section>

      <section className="instagram light-section">
        <div><p className="eyebrow">Ainda quer me conhecer melhor?</p><h2>Acompanhe meus conteúdos sobre negócios, vendas, liderança, comportamento, família e fé.</h2></div>
        <a href={links.instagram} target="_blank" rel="noreferrer"><Instagram size={22} /> @gabriel.caramuru <ArrowUpRight size={18} /></a>
      </section>
      <footer><div className="wordmark">Gabriel Caramuru</div><p>Consultoria para médicos e donos de clínicas.</p><div><a href={links.instagram} target="_blank" rel="noreferrer">Instagram</a><a href={links.consultoria} target="_blank" rel="noreferrer">Consultoria</a></div><small>© 2026 Gabriel Caramuru</small></footer>
      <a className="mobile-sticky" href={links.consultoria} target="_blank" rel="noreferrer">Conversar com Gabriel <ArrowUpRight size={16} /></a>
    </main>
  );
}
