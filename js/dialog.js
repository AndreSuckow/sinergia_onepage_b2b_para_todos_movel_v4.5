
function fecharModal() {
  var modal = document.getElementById("modal-dialog");
  modal.parentNode.removeChild(modal);
}

const feedbackModalConfig = {
  'feedbackPink': {
    bgContentClass: 'bg-gray',
    titleClassColor: 'text-purple',
    textClassColor: 'text-purple',
    closeButtonBgClassColor: 'bg-purple-200',
  },

  'feedbackPurple': {
    bgContentClass: 'bg-gray',
    titleClassColor: 'text-purple',
    textClassColor: 'text-purple',
    closeButtonBgClassColor: 'bg-purple-200',
  },

}

function createModalFeedback(title = "", description = "", modalType) {
  if (!feedbackModalConfig[modalType]) throw new Error('Tipo de modal inválida')

  var modalDialog = document.createElement("div");
  modalDialog.id = "modal-dialog";

  var modalContent = document.createElement("div");
  modalContent.id = "modal-content";
  console.log(feedbackModalConfig)
  modalContent.className = feedbackModalConfig[modalType].bgContentClass;

  var modalHeader = document.createElement("header");
  modalHeader.id = "modal-header";
  modalHeader.className = "p-0";

  var modalCloseBtn = document.createElement("button");
  modalCloseBtn.id = "modal-close";
  modalCloseBtn.className = feedbackModalConfig[modalType].closeButtonBgClassColor;
  modalCloseBtn.textContent = "X";

  var modalBody = document.createElement("div");
  modalBody.id = "modal-body";

  var modalTitle = document.createElement("h3");
  modalTitle.className = feedbackModalConfig[modalType].titleClassColor;
  // modalTitle.textContent = title;
  modalTitle.textContent = '';

  var modalText = document.createElement("p");
  modalText.className = feedbackModalConfig[modalType].textClassColor;
  modalText.textContent = description;

  modalBody.appendChild(modalTitle);
  modalBody.appendChild(modalText);

  modalHeader.appendChild(modalCloseBtn);

  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);

  modalDialog.appendChild(modalContent);

  document.body.appendChild(modalDialog);

  modalCloseBtn.addEventListener("click", () => {
    modalDialog.parentNode.removeChild(modalDialog);
  });
}


const questionModalConfig = {
  'modalType1': {
    contentClass: 'bg-green modal-sm',
    titleClass: 'text-white',
    textClass: 'text-purple',
    closeButtonClass: 'bg-purple-200',
    headerClass: 'bg-purple',
  },
  'modalType2': {
    contentClass: 'bg-pink modal-sm',
    titleClass: 'text-purple',
    textClass: 'text-white',
    closeButtonClass: 'bg-pink',
    headerClass: 'bg-white',
  },
}
// Função para criar a modal
function renderModalQuestions(title = "", description = "", modalType) {
  if (!questionModalConfig[modalType]) throw new Error('Tipo de modal inválida')

  var modalDialog = document.createElement("div");
  modalDialog.id = "modal-dialog";

  var modalContent = document.createElement("div");
  modalContent.id = "modal-content";
  modalContent.className = questionModalConfig[modalType].contentClass;

  var modalHeader = document.createElement("header");
  modalHeader.id = "modal-header";
  modalHeader.className = questionModalConfig[modalType].headerClass;

  var modalCloseBtn = document.createElement("button");
  modalCloseBtn.id = "modal-close";
  modalCloseBtn.className = questionModalConfig[modalType].closeButtonClass;
  modalCloseBtn.textContent = "X";

  var modalBody = document.createElement("div");
  modalBody.id = "modal-body";

  var modalTitle = document.createElement("p");
  modalTitle.className = questionModalConfig[modalType].titleClass;
  modalTitle.textContent = title;

  var modalText = document.createElement("p");
  modalText.className = questionModalConfig[modalType].textClass;
  modalText.textContent = description;

  modalHeader.appendChild(modalCloseBtn);
  modalHeader.appendChild(modalTitle);

  modalBody.appendChild(modalText);



  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);

  modalDialog.appendChild(modalContent);

  document.body.appendChild(modalDialog);

  modalCloseBtn.addEventListener("click", () => {
    modalDialog.parentNode.removeChild(modalDialog);
  });
}



const smartEmpresasContentConfig = {
  smartEmpresasContent: `
  <div class="flex flex-col" style="gap: 3rem;margin-top: 2rem;">
  <div class="-mt-15 ">
    <img
      src="./assets/section/smart_empresas_homem.png"
      class="w-full bottom-rounded"
      alt=""
    />
  </div>
  
  <div class="flex items-center gap-10">
    <img class="icon_size" src="./assets/section/lampada_icon.png" width="210" alt="" />
    <p class="text-white">
      Nosso cliente B2B tem a melhor experiência dos serviços de voz <br/>e
      dados com o plano o Smart Empresas, que combina comunicação
      eficiente e conectividade 5G para impulsionar a produtividade da
      equipe dele. Agora, não só oferecemos ampla cobertura móvel <br/>e
      nacional, como também uma série de vantagens para reduzir custos
      em ligações e dados.
    </p>
  </div>
  
  <div class=" card bg-gray-300 px-15 text-purple py-10">
    <div class="flex items-center gap-15">
      <div class="flex flex-col gap-10 items-center">
        <img class="icon_size" src="./assets/section/lampada.png" alt="" />
        <h3 class="text-purple">#DicaB2B</h3>
      </div>
      <p class="text-purple mb-3">
        Smart Empresas é ideal para clientes que procuram serviços e
        planos que tragam maior produtividade para <br>os colaboradores.
      </p>
    </div>
  </div>
  
  <div class=" px-15 py-10 bg-pink modal-rounded">
    <h3 class="text-purple">
      Compartilhamento flexível de minutos e dados entre os
      números.
    </h3>
    <p class="text-white">
      • Vantagem: flexibilidade total para compartilhar minutos e
      dados entre os números.
    </p>
    <p class="text-white">
      • Por quê? Porque oferece liberdade total para distribuir
      recursos conforme a necessidade do cliente, garantindo uma
      comunicação eficiente e adaptável a cada situação.
    </p>
  </div>
  <div class=" px-15 py-10 bg-pink modal-rounded">
    <h3 class="text-purple">Cobertura em todo o Brasil!</h3>
    <p class="text-white">
      • Vantagem: conexão garantida em qualquer lugar do Brasil.
    </p>
    <p class="text-white">
      • Por quê? Porque o cliente desfruta de uma conexão confiável e
      estável, onde quer que esteja no país, para se manter conectado
      e para se comunicar ou trabalhar.
    </p>
  </div>
  
  <div class=" px-15 py-10 bg-pink modal-rounded">
    <h3 class="text-purple">Gerenciamento de uso de dados.</h3>
    <p class="text-white">
      • Vantagem: eficiente gestão de dados para máxima segurança e
      produtividade.
    </p>
    <p class="text-white">
      • Por quê? Porque oferece proteção de dados enquanto o cliente
      otimiza a produtividade da sua empresa, com uma gestão
      inteligente e segura, é fundamental para o crescimento do seu
      negócio.
    </p>
  </div>
  <div class="">
    <img
      src="./assets/section/smart_empresas_mulher.png"
      width="w-full"
      alt=""
    />
  </div>
  <p class="text-white">
    Destaque o plano Smart Empresas para clientes B2B, enfatizando a
    combinação de comunicação eficiente e conectividade 5G para
    impulsionar a produtividade da equipe. Aponte para a ampla
    cobertura móvel e nacional, além das vantagens de redução de
    custos em ligações e dados. O Smart Empresas oferece uma solução
    completa e eficiente para empresas que buscam melhorar a
    eficiência operacional e reduzir despesas.
  </p>
  <div class="flex flex-col items-center justify-center gap-10">
    <img
      src="./assets/section/lampada_icon.png"
      width="w-full"
      alt=""
      class="icon_size"
    />
    <h3 class="text-white">#B2BVENDE</h3>
  </div>
  <div>
    <h3 class="text-white">Franquias do plano Smart Empresas:</h3>
    <p class="text-white">• Smart Empresas 6 GB;</p>
    <p class="text-white">• Smart Empresas 15 GB;</p>
    <p class="text-white">• Smart Empresas 20 GB;</p>
    <p class="text-white">• Smart Empresas 30 GB;</p>
    <p class="text-white">• Smart Empresas 40 GB;</p>
    <p class="text-white">• Smart Empresas 50 GB;</p>
    <p class="text-white">• Smart Empresas 100 GB.</p>
  </div>
  <div class=" card bg-green-200 px-15 text-purple py-10">
    <h3 class="text-purple">
      Não se esqueça de consultar o book de ofertas atualizado no
      Portal B2B.
    </h3>
  </div>
  <div class="flex flex-col gap-30">
    <h2 class="text-white">
      Vantagens para o negócio do cliente que vão além do básico e
      comum:
    </h2>
  </div>
  <div class="flex gap-15 items-start">
    <img
      src="./assets/section/smart_empresas_phone.png"
      width="230"
      alt=""
    />
    <div>
      <h3 class="text-white">Voz Ilimitada Brasil</h3>
      <p>
        Peça ao cliente para imaginar nunca mais se preocupar com os
        minutos gastos em chamadas locais. Com  a vantagem de voz
        ilimitada, a equipe pode se comunicar sem restrições, seja
        para fechar negócios, colaborar em projetos ou resolver
        questões urgentes. O cliente diz adeus às limitações <br/>e foca no
        que realmente importa: o crescimento do seu negócio. Com voz
        ilimitada, ele tem liberdade para se conectar e prosperar sem
        barreiras.
      </p>
    </div>
  </div>
  <div class="flex gap-15 items-start">
    <img
      src="./assets/section/smart_empresas_compartilhamento.png"
      width="230"
      alt=""
    />
    <div>
      <h3 class="text-white">
        Pacotes de dados e compartilhamento sem bloqueio
      </h3>
      <p>
        Imagine ter a liberdade de utilizar seus dados conforme
        necessário, sem interrupções inesperadas ou custos adicionais.
        Com pacotes de dados e compartilhamento sem bloqueio, o
        cliente e seu time podem enfrentar desafios sem se preocuparem
        com limitações de conectividade.
      </p>
    </div>
  </div>
  <div class="flex gap-15 items-start">
    <img
      src="./assets/section/smart_empresas_compentario.png"
      width="230"
      alt=""
    />
    <div>
      <h3 class="text-white">
        Até 1.000 SMS para qualquer operadora
      </h3>
      <p>
        Nosso plano oferece até 1.000 SMS para qualquer operadora, sem
        custos adicionais. Com essa vantagem, o cliente cria alertas
        importantes e atualizações rápidas. Nossos pacotes de SMS
        ilimitados garantem que a empresa do cliente esteja sempre
        conectada.
      </p>
    </div>
  </div>
  <div class=" card bg-gray-300 px-15 text-purple py-10">
    <div class="flex items-center gap-15">
      <div class="flex flex-col gap-10 items-center">
        <img class="icon_size" src="./assets/section/lampada.png" alt="" />
        <h3 class="text-purple">#DicaB2B</h3>
      </div>
      <p class="text-purple">
        O Smart Empresas atende às necessidades dos clientes que
        buscam serviços e planos para aumentar a produtividade dos
        colaboradores, considerando especialmente o consumo diário.
      </p>
    </div>
  </div>
  </div>
  </div>
  ` ,
  vivoVContent: `  
  <div class="flex flex-col" style="gap: 3rem;margin-top: 2rem;">
  <div class="card deg_grey1 px-15 text-purple py-10">
     <div class="flex items-center gap-15">
        <div class="flex flex-col gap-10 items-center">
           <img class="icon_size" src="./assets/section/lampada.png" alt="" />
           <h3 class="text-purple">#DicaB2B</h3>
        </div>
        <p class="text-purple">
           O Vivo V é ideal para empresas em que os colaboradores precisam realizar frequentes viagens, oferecendo 100GB 
           de dados, chamadas ilimitadas e conectividade global com Vivo Travel Mundo. Assim como o Vivo V para clientes B2C, a Vivo também conta com uma versão para o público B2B.
        </p>
     </div>
  </div>
  <h3 class="text-white">O Vivo V oferece um conjunto completo de serviços para atender às necessidades de comunicação e conectividade do cliente. Com uma franquia de dados de 100 GB, nossos clientes têm ampla cobertura para suas atividades on-line. É importante ressaltar que eles podem contratar pacotes adicionais de internet exclusivamente por meio do Vivo UP, garantindo flexibilidade e controle sobre seu consumo.</h3>
  <div class="card bg-gray-300 px-15 text-purple py-10">
     <div class="flex items-center gap-15">
        <div class="flex flex-col gap-10">
           <img class="icon_size" src="./assets/section/vivoV_globe.png" alt="" />
        </div>
        <p class="text-purple">
           O Vivo Travel Mundo oferece 30 diárias disponíveis para serem utilizadas ao 
           longo do ciclo de faturamento, garantindo conectividade global durante suas jornadas. Além disso, o pacote possui chamadas internacionais (LDI) com 15 mil minutos disponíveis utilizando o CSP 15.
        </p>
     </div>
  </div>
  <div class="flex gap-10 items-center">
     <h3 class="text-white">Argumente!</h3>
     <img class="icon_size" src="./assets/section/vivoV_estrela.png" alt="" />
  </div>
  <div class="px-15 py-10 bg-pink modal-rounded">
     <h3 class="text-white">Pacote de SMS</h3>
     <p class="text-white">
     • <strong>Vantagem</strong>: 1.000 mensagens de texto (SMS)
        incluídas no pacote.
     </p>
     <p class="text-white">
     • <strong>Porquê?</strong>: Porque manter-se conectado de forma
        eficiente com 1.000 mensagens de texto (SMS) incluídas no
        pacote, facilita a comunicação instantânea com clientes,
        fornecedores e colegas de trabalho, sem preocupações com custos
        adicionais.
     </p>
  </div>
  <div class="px-15 py-10 bg-pink modal-rounded">
     <h3 class="text-white">Ligações ilimitadas</h3>
     <p class="text-white">
        • <strong>Vantagem</strong>: 40 mil minutos On + Off Net.
     </p>
     <p class="text-white">
        • <strong>Porquê?</strong>: Porque o cliente tem liberdade de se
        comunicar sem restrições com 40 mil minutos para ligações On +
        Off Net, garantindo que ele possa manter contato com quem
        quiser, quando quiser, sem se preocupar com limites de tempo.
     </p>
  </div>
  <div class="px-15 py-10 bg-pink modal-rounded">
     <h3 class="text-white">
        Chamadas para todo o Brasil com o CSP 15!
     </h3>
     <p class="text-white">
        • <strong>Vantagem</strong>: chamadas de Vivo Móvel para
        qualquer operadora móvel e fixa em todo o Brasil, utilizando o
        CSP 15 para chamadas de Longa Distância Nacional (LDN).
     </p>
     <p class="text-white">
        • <strong>Porquê?</strong>: Porque com a possibilidade de fazer
        chamadas para qualquer operadora móvel e fixa em todo o Brasil,
        usando o CSP 15 para chamadas de Longa Distância Nacional (LDN),
        o cliente tem a conveniência e a flexibilidade de se comunicar
        sem fronteiras, facilitando sua vida profissional.
     </p>
  </div>
  <div class="flex items-center gap-10">
    <div class="flex flex-col items-center gap-10">
      <img class="icon_size" src="./assets/section/lampada_icon.png" width="210" alt="" />
      <h3 class="text-white">#B2BVENDEASSIM</h3>
    </div> 
     <p class="text-white">
        Destaque a franquia de 100 GB do Vivo V para clientes
        empresariais, oferecendo ampla cobertura online. Enfatize a
        flexibilidade do Vivo UP, permitindo contratar pacotes
        adicionais exclusivos, adaptando a conectividade conforme
        necessário. Com o Vivo V, seus clientes terão controle total
        sobre o consumo de dados, garantindo eficiência e flexibilidade
        em suas operações empresariais.
     </p>
  </div>
  <div class="-mx-15 bg-gray px-15 text-purple py-10 deg_grey1">
     <div class="flex items-center gap-15">
        <div class="flex flex-col gap-10">
           <img class="icon_size" src="./assets/section/vivoV_digital_green.png" alt="" />
        </div>
        <div>
           <h3 class="text-purple">Nosso DNA!</h3>
           <p class="text-purple">
              Ofertas que proporcionam uma solução completa para as
              necessidades de comunicação, combinando dados, mensagens e
              chamadas, tanto nacionais quanto internacionais.
           </p>
        </div>
     </div>
  </div>
  <div class="flex items-center flex-col gap-10">
     <img
        src="./assets/section/atendimento_on.png"
        width="500"
        alt=""
        />
     <div>
        <h3 class="text-pink text-center h2-size">Atendimento ON</h3>
        <p class="text-white text-center">Clique e responda à ação!</p>
     </div>
  </div>
  <p>
     Você acaba de ouvir as principais necessidades do cliente e
     percebe que há oportunidade de ofertar os planos Smart Empresas e
     Vivo V, ambos oferecendo diversas opções de serviços e vantagens
     para ele. Indique qual das alternativas corresponde à ação mais
     adequada para dar continuidade ao atendimento:
  </p>
  <div
  class="card bg-pink px-15 pulse pointer"
  onclick="createModalFeedback('Feedback alternativa A:', 'Ao não fornecer informações detalhadas sobre ambos os serviços, você pode alienar os clientes que têm preferências ou requisitos específicos. É fundamental fornecer uma visão abrangente para garantir que os clientes possam fazer uma escolha informada.', 'feedbackPink')"
  >
     <p>
        A) Apresentar apenas um dos serviços sem explicar suas
        características específicas, presumindo que seja a escolha óbvia
        para todos os clientes.
     </p>
  </div>
  <div
     class="card bg-pink px-15 pulse pointer"
     onclick="createModalFeedback('Feedback alternativa B:', 'Ao destacar as características de cada serviço, você permite que o cliente faça uma escolha consciente, considerando suas preferências e requisitos individuais.', 'feedbackPurple')"
     >
     <p>
        B) Destacar as características de cada serviço, incluindo a velocidade de navegação, a cobertura de rede e os benefícios adicionais, permitindo que o cliente tome uma decisão informada, com base em suas necessidades específicas.
     </p>
  </div>
  <div class="dialog-vertical flex flex-col items-center max-w-1230" style="position: relative">
  <img src="./assets/cursor.png" alt="" class="abs cursor_pop1">
  <img src="./assets/cursor.png" alt="" class="abs cursor_pop2">
     <img src="./assets/section/avatar.png" alt="" />
     <div class="card-sm z-10 top-triangle relative deg_grey1" style="padding: 2rem; margin-top: 2rem;">
        <p class="text-purple">
           Além das vantagens do plano, nosso portfólio B2B oferece uma
           variedade de serviços que melhoram a experiência de uso da
           linha móvel dos nossos clientes.
        </p>
     </div>
  </div>
  <div class="flex justify-center gap-15">
     <div class="py-10 px-15 bg-gray modal-rounded pointer pulse" onclick="hiddenAndShow('vivoV-tab-gestao', 'vivoV-tab-plano')">
        <h3>Plano</h3>
     </div>
     <div class="py-10 px-15 bg-green-200 modal-rounded pointer pulse" onclick="hiddenAndShow('vivoV-tab-plano', 'vivoV-tab-gestao')">
        <h3>Gestão</h3>
     </div>
  </div>
  <div id="vivoV-tab-plano">
     <p class="mb-10">
        Os aplicativos Vivo News, Vivo Gestão de Dispositivos e Skeelo,
        ativados junto ao plano, não exigem assinaturas ou pagamentos
        adicionais.
     </p>
     <div class="-mx-15 px-15 py-10 bg-white flex flex-col gap-15">
        <div class="flex gap-15 items-start">
           <img
              class="icon_size"
              src="./assets/section/vivoV_news.png"
              width="230"
              alt=""
              />
           <div>
              <h3 class="text-purple-300">Vivo News</h3>
              <p class="text-purple-300">
                 Com o Vivo News, o cliente tem acesso ilimitado a revistas
                 corporativas e jornais de diversos setores. Assim, ele
                 enriquece a estratégia empresarial com insights essenciais
                 e tendências de mercado. Mantendo-se à frente da
                 concorrência e impulsionando o sucesso com o Vivo News,
                 trazendo a excelência empresarial para o dia a dia da sua
                 equipe.
              </p>
           </div>
        </div>
        <div class="flex gap-15 items-start">
           <img
              class="icon_size"
              src="./assets/section/vivoV_configuracao.png"
              width="230"
              alt=""
              />
           <div>
              <h3 class="text-purple-300">Vivo Gestão de Dispositivos</h3>
              <p class="text-purple-300">
                 Proteja, controle e gerencie dispositivos com facilidade.
                 Nossa solução proporciona segurança robusta e
                 administração simplificada, permitindo gestão
                 centralizada. Simplificamos os processos empresariais e
                 garantimos a segurança dos dispositivos da empresa do
                 cliente.
              </p>
           </div>
        </div>
        <div class="flex gap-15 items-start">
           <img
              class="icon_size"
              src="./assets/section/vivoV_skeelo.svg"
              width="230"
              alt=""
              />
           <div>
              <h3 class="text-purple-300">Skeelo</h3>
              <p class="text-purple-300">
                 O aplicativo Skeelo se destaca como a plataforma líder no
                 Brasil para e-books e audiobooks. Com uma vasta gama de
                 conteúdo, oferece acesso ilimitado em qualquer lugar e uma
                 experiência de usuário personalizada.
              </p>
           </div>
        </div>
     </div>
  </div>
  <div id="vivoV-tab-gestao" class="hidden">
     <p class="mb-10">
        Os serviços de gestão simplificam o acesso a projetos profissionais  e pessoais, promovendo produtividade e organização no negócio do cliente. Essas soluções foram desenvolvidas para auxiliar no controle de gastos e na gestão de equipes da empresa dele.
     </p>
     <div class="-mx-15 px-15 py-10 bg-white flex flex-col gap-15">
        <div>
           <h3 class="text-purple-300">Vivo Valoriza Empresas</h3>
           <p class="text-purple-300">
              O Vivo Valoriza Empresas é a solução completa para
              impulsionar negócios e valorizar colaboradores. Através do
              aplicativo Meu Vivo Empresas, os clientes acessam uma ampla
              gama de parcerias com vantagens que impulsionam o
              crescimento empresarial, aumentam as vendas e promovem a
              valorização dos colaboradores.
           </p>
        </div>
        <div>
           <h3 class="text-purple-300">Vivo Gestão de Dados</h3>
           <p class="text-purple-300">
              Com o Vivo Gestão, o cliente Vivo Valoriza Empresas
              simplifica o gerenciamento de voz e dados entre linhas. A
              solução oferece distribuição de cotas, relatórios
              detalhados, bloqueio de SMS indesejados e acesso via portal
              web moderno. Otimizando a gestão empresarial com Vivo
              Gestão, o cliente leva a sua empresa ao próximo nível de
              eficiência.
           </p>
        </div>
        <div class="card bg-green-200 px-15 text-purple py-10">
           <div class="flex items-center gap-15">
              <div class="flex flex-col gap-10 items-center">
                 <img class="icon_size" src="./assets/section/lampada.png" alt="" />
                 <h3 class="text-purple">#DicaB2B</h3>
              </div>
              <p class="text-purple">
                 Durante a negociação, é crucial reforçar que não estamos
                 apenas vendendo um produto ou serviço, mas, sim,
                 oferecendo soluções que podem fazer uma grande diferença
                 no dia a dia do negocio do cliente.
              </p>
           </div>
        </div>
        <div class="-mx-15 bg-gray-300 px-15 py-10">
           <div class="flex items-center gap-15">
              <div class="flex flex-col gap-10">
                 <img
                    src="./assets/section/vivoV_digital_green.png"
                    alt=""
                    />
              </div>
              <div>
                 <h3 class="text-purple-300">Nosso DNA!</h3>
                 <p class="text-purple-300">
                    Ofertas que proporcionam uma solução completa para as
                    necessidades de comunicação, combinando dados, mensagens
                    e chamadas, tanto nacionais quanto internacionais.
                 </p>
              </div>
           </div>
        </div>
     </div>
  </div>
</div>
  `,
  penModemContent: `
  <div class="flex flex-col" style="gap: 3rem;margin-top: 2rem;">
  <p class="text-white">
    O Pen Modem é a resposta para empresas que precisam de acesso à
    internet em movimento, sem comprometer a velocidade ou a
    confiabilidade da conexão. O Pen Modem oferece uma maneira
    conveniente e eficaz de manter empresas conectadas onde quer que
    seus negócios o levem.
  </p>
  <div class="flex flex-col gap-15">
    <div class="flex gap-10 items-start">
      <img src="./assets/section/triangulo.png" alt="" />
      <p class="text-white">
        O Pen Modem é leve e fácil de transportar, permitindo
        conectividade em qualquer lugar.
      </p>
    </div>
    <div class="flex gap-10 items-start">
      <img src="./assets/section/triangulo.png" alt="" />
      <p class="text-white">
        Não requer instalação complicada; basta conectar à entrada USB
        para começar a usar.
      </p>
    </div>
    <div class="flex gap-10 items-start">
      <img src="./assets/section/triangulo.png" alt="" />
      <p class="text-white">
        Permite uma conexão de alta velocidade em viagens, reuniões e<br>
        visitas a clientes.
      </p>
    </div>
  </div>
  <div class="flex justify-center">
    <img src="./assets/section/pen_modern.png" width="400" alt="" />
  </div>

  <div class="card deg-grey1 px-15 text-purple py-10">
    <div class="flex items-center gap-15">
      <div class="flex flex-col gap-10 items-center">
        <img class="icon_size" src="./assets/section/lampada.png" alt="" />
        <h3 class="text-purple">#B2BVENDEASSIM</h3>
      </div>
      <p class="text-purple">
        Ofereça o Pen Modem como uma solução confiável para equipes de
        campo, representantes de vendas e profissionais que precisam
        de acesso à internet em movimento. Sua praticidade e
        eficiência garantem que suas operações permaneçam conectadas e
        produtivas, independentemente do local.
      </p>
    </div>
  </div>
</div>
  `,
  vivoBoxContent: `
  <div class="flex flex-col" style="gap: 3rem;margin-top: 2rem;">
  <p class="text-white">
    Vivo Box é a solução definitiva para empresas que buscam acesso à
    internet móvel de forma rápida, confiável e conveniente. Com a
    capacidade de conectar até 32 dispositivos simultaneamente, este
    equipamento é a escolha perfeita para manter equipes e clientes
    conectados tanto por rede Wi-Fi quanto via cabo.
  </p>
  <div class="flex flex-col gap-15">
    <div class="flex gap-10 items-start">
      <img src="./assets/section/triangulo.png" alt="" />
      <p class="text-white">
        Ideal para empresas localizadas em áreas sem acesso à banda
        larga fixa, garantindo conectividade mesmo em locais remotos.
      </p>
    </div>
    <div class="flex gap-10 items-start">
      <img src="./assets/section/triangulo.png" alt="" />
      <p class="text-white">
        Permite compartilhar a conexão via Wi-Fi ou cabo de rede,
        proporcionando flexibilidade para atender às necessidades<br>
        específicas da empresa.
      </p>
    </div>
    <div class="flex gap-10 items-start">
      <img src="./assets/section/triangulo.png" alt="" />
      <p class="text-white">
        Não requer visita técnica para instalação, basta conectar à
        rede elétrica <br>e configurar facilmente.
      </p>
    </div>
  </div>
  <div class="flex justify-center">
    <img src="./assets/section/vivobox.png" width="400" alt="" />
  </div>

  <div class="card deg_grey1 px-15 text-purple py-10">
    <div class="flex items-center gap-15">
      <div class="flex flex-col gap-10 items-center">
        <img class="icon_size" src="./assets/section/lampada.png" alt="" />
        <h3 class="text-purple">#B2BVENDEASSIM</h3>
      </div>
      <p class="text-purple">
        Integrar o Vivo Box à infraestrutura de comunicação fortalece
        a eficiência operacional e a colaboração da equipe, oferecendo
        conectividade confiável em qualquer lugar. Além disso, ao
        proporcionar acesso à internet para clientes e visitantes,
        demonstra compromisso com a qualidade do serviço e a
        experiência do cliente. O uso deste roteador mantém a empresa
        preparada para os desafios do mundo conectado atual.
      </p>
    </div>
  </div>
</div>`,
  eSimContent: `
<div class="flex flex-col gap-15">
<p class="text-white">
  O eSIM é uma versão digital do cartão SIM usado em telefones e
  outros dispositivos conectados à internet. Em vez de ser físico e
  removível, como os cartões SIM tradicionais, o eSIM é integrado
  diretamente ao dispositivo. As principais vantagens do eSIM são:
</p>
<div class="flex flex-col gap-15">
  <div class="flex gap-10 items-start">
    <img src="./assets/section/triangulo.png" alt="" />
    <p class="text-white">
      <strong>Entrega simplificada</strong>: elimine a etapa de
      entrega pela logística, pois o eSIM é ativado remotamente,
      oferecendo conveniência e eficiência.
    </p>
  </div>
  <div class="flex gap-10 items-start">
    <img src="./assets/section/triangulo.png" alt="" />
    <p class="text-white">
      <strong>Segurança aprimorada</strong>: a ativação do eSIM é
      realizada exclusivamente pelo gestor da linha, garantindo
      controle total sobre as conexões da empresa e oferecendo maior
      segurança.
    </p>
  </div>
  <div class="flex gap-10 items-start">
    <img src="./assets/section/triangulo.png" alt="" />
    <p class="text-white">
      <strong>Flexibilidade de doação</strong>: oferecemos a
      possibilidade de doação de até 10 chips por negociação,
      adaptando-se às necessidades da empresa. Para clientes MEI,
      essa doação é limitada a 2 chips sem aparelho.
    </p>
  </div>
</div>
</div>
`,
  receitaFederalContent: `
<p class="text-white">
Um site disponível e totalmente seguro para essa verificação é o da <br/> <a href="https://solucoes.receita.fazenda.gov.br/Servicos/cnpjreva/Cnpjreva_Solicitacao.asp?" target="_blank">Receita Federal</a>. Essa prática garante que o cadastro esteja alinhado com a realidade do cliente na Vivo, sendo uma ação que demanda apenas alguns minutos para ser verificada e analisada.
Emissão de Comprovante de Inscrição e de Situação Cadastral.”
</p>
`,
  globalOneContent: `
<p class="text-white">
O <strong>Global One</strong> é uma ferramenta destinada à
verificação de informações sobre débitos e dívidas que o cliente
possa ter com a Vivo. Ela deve ser utilizada em situações em que
ocorram divergências que impactem diretamente na entrega ou
instalação do produto, permitindo-nos tratar cada caso
individualmente com o cliente.
</p>`,
  chipExpressContent: `
<div class="flex flex-col gap-15">
            <p class="text-white">
              O chip express é a solução perfeita para clientes B2B que precisam
              de rapidez e praticidade. Funcionando como uma doação da loja,
              permite que o cliente saia com o chip ativado e em mãos em tempo
              recorde.
            </p>
            <div class="bg-gray-300 -mx-15 px-15 text-purple py-10">
              <div class="flex items-center gap-15">
                <div class="flex flex-col gap-10">
                  <img class="icon_size" src="./assets/section/lampada.png" alt="" />
                  <h3 class="text-purple">#B2BATENÇÃO</h3>
                </div>
                <p class="text-purple">
                A venda de aparelhos para clientes MEI não é permitida. Entretanto, os clientes MEI podem adquirir até 2 chips, sem a necessidade de especificar o tipo de chip ao <br>selecionar o aparelho.
                </p>
              </div>
            </div>
          </div>`,
  chipAvulsoContent: `
  <div class="flex flex-col gap-15">
            <p class="text-white">
              O chip avulso é vendido juntamente com o aparelho, o que significa
              que ambos são entregues pela logística no endereço cadastrado nas
              informações do CNPJ do cliente. Com essa modalidade de compra, o
              cliente não recebe o chip separadamente em mãos
            </p>
          </div>`,
  identificarRelacaoClienteVivoContent: `
          <div class="flex gap-10 items-center">
            <img src="./assets/section/oculos.png" alt="" />
            <p class="text-purple">
              <strong>Identifique!</strong> Solicite ao cliente o
              <strong>CNPJ</strong> da empresa, verifique as informações no
              <strong>MIRA</strong>e confirme se ela faz parte das carteiras
              <strong>PME</strong> ou <strong>Vivo One</strong>. O sistema
              bloqueia automaticamente o atendimento a demais tipos de
              carteiras.
            </p>
          </div>`,
  identificarClienteContent: `
  <div class="flex gap-10 items-center">
  <img src="./assets/section/oculos.png" alt="" />
  <p class="text-purple">
    Ao acessar o <strong>Salesforce B2C</strong> estamos prontos para
    identificar oportunidades lucrativas de vendas B2B e garantir que
    você não perca nenhuma chance de impulsioná-las.
  </p>
</div>`,
  dicaB2BContent: `
<div class="flex gap-10 items-center">
<img class="icon_size" src="./assets/section/lampada.png" alt="" />
<div class="flex flex-col gap-10">
  <p class="text-purple">
    <strong
      >ESTE É O MOMENTO IDEAL PARA CONHECER <br/>MAIS O SEU
      CLIENTE!</strong
    >
  </p>
  <p class="text-purple">
    Nesta fase, conseguimos entender, por exemplo, por que alguns
    clientes com CNPJ utilizam produtos destinados a pessoas físicas
    em seus negócios.
    <strong
      >Reforce que o portfólio B2B é ideal para atender às
      necessidades de qualquer empresa.</strong
    >
  </p>
</div>
</div>
`


}


function hiddenAndShow(idToHidden, idToShow) {
  var elementToHide = document.getElementById(idToHidden);
  var elementToShow = document.getElementById(idToShow);
  elementToHide.style.display = "none";
  elementToShow.style.display = "block";
  goToId(idToShow)
}

function goToId(id) {
  var element = document.getElementById(id);
  element.scrollIntoView({
    behavior: "smooth",
  });
}



function createGenericModal(contentOption, contentClass = 'bg-purple', ) {
  if (!smartEmpresasContentConfig[contentOption]) throw new Error('Tipo não encontrado')
  var modalDialog = document.createElement("div");
  modalDialog.id = "modal-dialog";

  var modalContent = document.createElement("div");
  modalContent.id = "modal-content";
  modalContent.className = `modal- sm relative ${contentClass}`;



  var modalCloseBtn = document.createElement("button");
  modalCloseBtn.id = "modal-close";
  modalCloseBtn.className = "bg-purple-400";
  modalCloseBtn.textContent = "X";

  var modalBody = document.createElement("div");
  modalBody.id = "modal-body";
  modalBody.innerHTML = smartEmpresasContentConfig[contentOption];

  modalContent.appendChild(modalCloseBtn);
  modalContent.appendChild(modalBody);
  modalDialog.appendChild(modalContent);
  document.body.appendChild(modalDialog);
  modalCloseBtn.addEventListener("click", () => {
    modalDialog.parentNode.removeChild(modalDialog);
  });
}
