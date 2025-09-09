# Mercado Biorregional Lumiar

Site para campanha de financiamento coletivo do Mercado Biorregional Lumiar - uma plataforma que conecta produtores locais com consumidores conscientes.

## 🌱 Sobre o Projeto

O Mercado Biorregional Lumiar é uma iniciativa para criar uma plataforma digital que facilite a conexão entre produtores locais da região de Lumiar e consumidores que valorizam alimentos frescos, sustentáveis e de origem conhecida.

### Objetivos
- **Comunicar**: Contribuição mensal de qualquer valor para manter a plataforma
- **Converter**: Botões claros para WhatsApp e Assinatura (Mercado Pago)
- **Transparência**: Barra de progresso em tempo real mostrando arrecadação e número de apoiadores
- **Autonomia**: Backend mínimo no próprio projeto (webhook + leitura do Sheets)

## 🚀 Funcionalidades

- **Página inicial** com explicação da campanha e barra de progresso
- **API de progresso** (`/api/progresso`) que lê dados do Google Sheets
- **Webhook do Mercado Pago** (`/api/mp-webhook`) para receber eventos de assinatura
- **Redirecionamentos** para WhatsApp (`/whatsapp`) e Mercado Pago (`/assinar`)
- **Páginas informativas**: `/apoie`, `/produtores`, `/sobre`
- **Design responsivo** com tema verde/terra

## 🛠️ Tecnologias

- **Astro** - Framework web moderno
- **TailwindCSS** - Estilização
- **Google Sheets API** - Armazenamento de dados
- **Mercado Pago API** - Processamento de pagamentos
- **Vercel** - Deploy e hospedagem

## 📋 Configuração

### 1. Variáveis de Ambiente

Copie o arquivo `.env.example` para `.env` e configure as variáveis:

```bash
# Site Configuration
PUBLIC_SITE_NAME="Mercado Biorregional Lumiar"
PUBLIC_GOAL_MONTHLY="150"

# Links de redirecionamento
PUBLIC_MP_PLAN_URL="https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=SEU_PLAN_ID"
PUBLIC_WA_URL="https://wa.me/55XXXXXXXXXX?text=Quero%20apoiar%20o%20Mercado%20Biorregional%20Lumiar"

# Google Service Account (Sheets API v4)
GOOGLE_SHEETS_ID="PLANILHA_ID"
GOOGLE_SERVICE_EMAIL="service-account@project.iam.gserviceaccount.com"
GOOGLE_SERVICE_KEY="-----BEGIN PRIVATE KEY-----\n... \n-----END PRIVATE KEY-----\n"

# Mercado Pago
MP_ACCESS_TOKEN="APP_USR-..."
MP_WEBHOOK_SECRET="seu_segredo_de_webhook"
```

### 2. Google Sheets Setup

1. Crie uma planilha no Google Sheets
2. Crie uma aba chamada `Arrecadacao` com os cabeçalhos:
   - A: timestamp
   - B: source
   - C: amount
   - D: status
   - E: payer_name
   - F: payer_email
   - G: preapproval_id
   - H: request_id
3. Configure uma Service Account no Google Cloud Console
4. Compartilhe a planilha com o email da Service Account
5. Configure as variáveis `GOOGLE_SHEETS_ID`, `GOOGLE_SERVICE_EMAIL` e `GOOGLE_SERVICE_KEY`

### 3. Mercado Pago Setup

1. Crie um plano de assinatura no Mercado Pago
2. Configure o webhook para apontar para `https://seu-dominio.com/api/mp-webhook`
3. Configure as variáveis `MP_ACCESS_TOKEN` e `MP_WEBHOOK_SECRET`

## 🚀 Deploy na Vercel

1. Conecte o repositório à Vercel
2. Configure todas as variáveis de ambiente no painel da Vercel
3. Deploy automático será feito a cada push

## 📊 Estrutura de Dados

### Google Sheets - Aba Arrecadacao

| Coluna | Descrição | Exemplo |
|--------|-----------|---------|
| A (timestamp) | Data/hora do evento | 2024-01-15T10:30:00Z |
| B (source) | Origem do pagamento | mercado_pago |
| C (amount) | Valor mensal | 25.00 |
| D (status) | Status da assinatura | authorized, active, approved, paid |
| E (payer_name) | Nome do pagador | João Silva |
| F (payer_email) | Email do pagador | joao@email.com |
| G (preapproval_id) | ID da assinatura | 123456789 |
| H (request_id) | ID da requisição (idempotência) | req_abc123 |

## 🔧 Desenvolvimento

### Instalação

```bash
npm install
```

### Desenvolvimento local

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## 📱 Rotas da API

### `/api/progresso` (GET)
Retorna dados de progresso da campanha:
```json
{
  "totalMonthly": 125.50,
  "goal": 150,
  "supporters": 8,
  "updatedAt": "2024-01-15T10:30:00Z"
}
```

### `/api/mp-webhook` (POST)
Recebe eventos do Mercado Pago e grava no Google Sheets.

## 🎨 Design

- **Paleta de cores**: Tons de verde e terra
- **Tipografia**: Fontes modernas e legíveis
- **Layout**: Responsivo, mobile-first
- **Componentes**: ProgressBar com atualização automática a cada 30s

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 🤝 Contribuição

Para contribuir com o projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📞 Contato

Para dúvidas ou sugestões, entre em contato através do WhatsApp ou email configurado nas variáveis de ambiente.