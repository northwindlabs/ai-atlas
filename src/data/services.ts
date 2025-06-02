// AI service data for the European AI Atlas
// Each category contains services with their details

export interface Service {
  name: string;
  description: string;
  icon: string;
  country: string;
  hq?: string;
  legal?: string;
  link: string;
  addedDate?: string; // ISO date string when the service was added (YYYY-MM-DD)
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  services: Service[];
}

export const categories: Category[] = [
  {
    id: 'chat',
    name: 'Chat',
    icon: '💬',
    color: 'bg-[#3B82F6]',
    services: [
      {
        name: 'Mistral LeChat',
        description:
          'European large language model with state-of-the-art performance, available in multiple languages',
        icon: '🤖',
        country: '🇫🇷',
        link: 'https://mistral.ai/',
      },
      {
        name: 'LuzIA',
        description:
          'Multilingual AI chat assistant accessible via WhatsApp and Telegram',
        icon: '💬',
        country: '🇪🇸',
        link: 'https://www.luzia.com',
      },
      {
        name: 'IA tools - Infomaniak',
        description:
          'Infomaniak is a hosting provider that offers a range of AI tools, including an AI chatbot, a text-to-speech service and image generation.',
        icon: '💬',
        country: '🇨🇭',
        link: 'https://www.infomaniak.com/en/hosting/ai-tools',
      },
    ],
  },
  {
    id: 'assistants',
    name: 'Assistants',
    icon: '🧠',
    color: 'bg-[#4CAF50]',
    services: [
      {
        name: 'Leexi',
        description:
          'AI-powered notetaking assistant. Recordings, summaries, next steps and more.',
        icon: '📝',
        country: '🇧🇪',
        link: 'https://leexi.ai',
        addedDate: '2025-04-14',
      },
      {
        name: 'SAP Joule Agents',
        description:
          'AI agents that help automate business processes and provide intelligent assistance across SAP applications',
        icon: '🤖',
        country: '🇩🇪',
        link: 'https://www.sap.com/products/artificial-intelligence/ai-agents.html',
        addedDate: '2025-04-06',
      },
      {
        name: 'Frag Das PDF',
        description:
          'AI research assistant PDF Chat, conduct AI-powered literature research across over 200 million scientific articles, and write texts efficiently with the smart AI editor',
        icon: '📘',
        country: '🇦🇹',
        link: 'https://www.fragdaspdf.de/',
      },
      {
        name: 'Sanalabs',
        description:
          'Custom AI assistants that integrate with your business data and tools to enhance team productivity',
        icon: '🤝',
        country: '🇸🇪',
        link: 'https://sanalabs.com/',
      },
      {
        name: 'LightOn',
        description:
          'Enterprise LLM platform offering custom GenAI assistants and document Q&A with API integration',
        icon: '💡',
        country: '🇫🇷',
        link: 'https://lighton.ai',
      },
      {
        name: 'Localmind',
        description:
          'Secure on-premise AI for companies. Train custom AI with your data & automate processes with full control and privacy.',
        icon: '🔒',
        country: '🇦🇹',
        link: 'https://www.localmind.ai',
      },
      {
        name: 'tl;dv',
        description:
          'AI meeting assistant that summarizes meetings, writes follow-ups and syncs with CRM',
        icon: '🎥',
        country: '🇩🇪',
        link: 'https://tldv.io/',
        addedDate: '2025-05-11',
      },
      {
        name: 'HALO AI',
        description:
          'AI platform offering specialized agents for customer service, marketing automation, and operational tasks',
        icon: '🤖',
        country: '🇳🇱',
        link: 'https://www.cm.com/halo/',
        addedDate: '2025-05-11',
      },
      {
        name: 'TextCortex',
        description:
          'Enterprise platform for creating custom AI agents that connect with company data and handle complex tasks using your knowledge base',
        icon: '🤖',
        country: '🇩🇪',
        link: 'https://textcortex.com/',
        addedDate: '2025-06-01',
      },
    ],
  },
  {
    id: 'audio',
    name: 'Audio',
    icon: '🔊',
    color: 'bg-[#9C27B0]',
    services: [
      {
        name: 'KB-Whisper',
        description:
          "Swedish National Library's speech recognition models trained on 50,000+ hours of Swedish speech data",
        icon: '🎙️',
        country: '🇸🇪',
        link: 'https://huggingface.co/collections/KBLab/kb-whisper-67af9eafb24da903b63cc4aa',
      },
      {
        name: 'AIVA',
        description:
          'AI music composer generating original soundtracks for games, films, and commercials',
        icon: '🎵',
        country: '🇱🇺',
        link: 'https://aiva.ai/',
      },
      {
        name: 'Respeecher',
        description:
          'Voice cloning and speech-to-speech AI for high-fidelity voice conversion',
        icon: '🔄',
        country: '🇺🇦',
        link: 'https://respeecher.com/',
      },
      {
        name: 'Papercup',
        description:
          'AI-powered video dubbing and translation platform for global content distribution',
        icon: '🌐',
        country: '🇬🇧',
        link: 'https://papercup.com/',
      },
      {
        name: 'Endel',
        description:
          'Generative soundscape and music app focused on wellness and productivity',
        icon: '🧘',
        country: '🇩🇪',
        link: 'https://endel.io/',
      },
      {
        name: 'Klang.ai',
        description: 'Audio transcription of interviews & meeting notes',
        icon: '🎯',
        country: '🇸🇪',
        link: 'https://klang.ai',
      },
      {
        name: 'Schweizerdeutsch Übersetzer App',
        description:
          'Swiss German audio and video transcription. Use mobile app for offline meetings & interviews or web app for online-talks!',
        icon: '🐮',
        country: '🇨🇭',
        link: 'https://schweizerdeutsch-uebersetzen.ch/',
      },
      {
        name: 'Töggl',
        description:
          'Transcription service for all Swiss languages and dialects',
        icon: '🎙️',
        country: '🇨🇭',
        link: 'https://töggl.ch',
      },
    ],
  },
  {
    id: 'marketplace',
    name: 'Marketplace',
    icon: '🛒',
    color: 'bg-[#FFD166] text-[#333333]',
    services: [
      {
        name: 'Hugging Face',
        description:
          "Europe's leading AI model hub where researchers and developers share, discover and collaborate on models and datasets",
        icon: '🤗',
        country: '🇫🇷',
        link: 'https://huggingface.co/',
      },
    ],
  },
  {
    id: 'coding',
    name: 'Coding',
    icon: '💻',
    color: 'bg-[#6A4C93]',
    services: [
      {
        name: 'Lovable',
        description:
          'Automated app creation and coding. Describe what you want to build in natural language.',
        icon: '❤️',
        country: '🇸🇪',
        hq: '🇸🇪',
        legal: '🇺🇸',
        link: 'https://lovable.dev/',
      },
      {
        name: 'Poolside',
        description:
          'Advanced AI coding assistant with custom models that can be fine-tuned on your codebase and deployed in your environment',
        icon: '🏊',
        country: '🇫🇷',
        link: 'https://poolside.ai/',
      },
      {
        name: 'Databutton',
        description:
          'AI developer leveraging a reasoning AI agent to help build and deploy applications',
        icon: '🤖',
        country: '🇳🇴',
        link: 'https://databutton.com/',
      },
    ],
  },
  {
    id: 'image',
    name: 'Image',
    icon: '⭐',
    color: 'bg-[#00A8A8]',
    services: [
      {
        name: 'Photoroom',
        description:
          'French AI tool that automatically removes backgrounds, edits product photos, and creates studio-quality images',
        icon: '📷',
        country: '🇫🇷',
        link: 'https://www.photoroom.com/',
      },
      {
        name: 'Stability AI',
        description:
          'Generative AI company known for Stable Diffusion, a powerful open-source text-to-image model',
        icon: '🎨',
        country: '🇬🇧',
        link: 'https://stability.ai/',
      },
      {
        name: 'Pollinations.ai',
        description:
          'Open-source generative media platform offering text and image generation APIs',
        icon: '🌸',
        country: '🇩🇪',
        link: 'https://pollinations.ai/',
      },
    ],
  },
  {
    id: 'video',
    name: 'Video',
    icon: '🎬',
    color: 'bg-[#FF7F50]',
    services: [
      {
        name: 'Lyric Video Studio',
        description:
          'Video editing desktop software that combines many AI services under one app, providing timeline for your prompts and keeps images and videos organized.',
        icon: '🎥',
        country: '🇫🇮',
        link: 'https://lyricvideo.studio',
        addedDate: '2025-05-01',
      },
      {
        name: 'Aive',
        description:
          'European AI video creation platform that transforms content into engaging videos with automated editing and optimization',
        icon: '🎥',
        country: '🇫🇷',
        link: 'https://aive.com/',
      },
      {
        name: 'Synthesia',
        description:
          'London-based platform for creating professional videos with AI avatars and voiceovers in 140+ languages without filming',
        icon: '🎞️',
        country: '🇬🇧',
        link: 'https://www.synthesia.io/',
      },
      {
        name: 'Reface',
        description:
          'AI face-swapping mobile app generating viral videos and GIFs with realistic face replacement',
        icon: '😎',
        country: '🇺🇦',
        link: 'https://reface.ai/',
      },
      {
        name: 'Flawless AI',
        description:
          'AI filmmaking tools for visual dubbing and video editing with seamless lip-sync technology',
        icon: '🎭',
        country: '🇬🇧',
        link: 'https://flawlessai.com/',
      },
      {
        name: 'Metaphysic',
        description:
          'Developer of hyper-realistic deepfake and de-aging technology for entertainment and media',
        icon: '✨',
        country: '🇬🇧',
        link: 'https://metaphysic.ai/',
      },
      {
        name: 'Alugha',
        description:
          'Transcribe, translate, voiceover, and host your videos with AI',
        icon: '🎥',
        country: '🇩🇪',
        link: 'https://alugha.com',
      },
    ],
  },
  {
    id: 'automation',
    name: 'Automation',
    icon: '⚙️',
    color: 'bg-[#FF9800]',
    services: [
      {
        name: 'Rossum',
        description: 'AI Document Processing For Transactional Workflows',
        icon: '📄',
        country: '🇨🇿',
        link: 'https://rossum.ai/',
        addedDate: '2025-05-01',
      },
      {
        name: 'Everseen',
        description:
          'Vision AI platform for retail with solutions for loss prevention, inventory management, and customer experience optimization',
        icon: '👁️',
        country: '🇮🇪',
        link: 'https://everseen.ai/applications/',
        addedDate: '2025-04-06',
      },
      {
        name: 'n8n',
        description:
          'Open-source workflow automation platform with AI capabilities for technical teams to build, run and iterate on workflows',
        icon: '🔄',
        country: '🇩🇪',
        link: 'https://n8n.io/',
      },
      {
        name: 'VISS.AI',
        description:
          'AI-powered workflow automation platform that generates enterprise-quality code for connecting APIs and building automations with natural language',
        icon: '🤖',
        country: '🇸🇪',
        link: 'https://www.viss.ai/',
      },
    ],
  },
  {
    id: 'enterprise',
    name: 'Customer Service AI',
    icon: '🏢',
    color: 'bg-[#4361EE]',
    services: [
      {
        name: 'sipgate AI Assist',
        description:
          'sipgate AI is a fully featured, AI-powered phone system that automatically summarizes calls, identifies key topics, and generates actionable tasks to streamline business communication.',
        icon: '📞',
        country: '🇩🇪',
        link: 'https://www.sipgate.de/assist',
        addedDate: '2025-05-01',
      },
      {
        name: 'Ebbot',
        description: 'AI chatbot platform for automated customer support',
        icon: '💬',
        country: '🇸🇪',
        link: 'https://www.ebbot.com',
      },
      {
        name: 'PolyAI',
        description:
          'Conversational AI platform for call centers and customer service with human-like voice assistants',
        icon: '📞',
        country: '🇬🇧',
        link: 'https://polyai.com/',
      },
      {
        name: 'Cognigy',
        description:
          'Enterprise conversational AI platform for creating AI agents that automate customer service',
        icon: '🤖',
        country: '🇩🇪',
        link: 'https://cognigy.com/',
      },
      {
        name: 'Boost.ai',
        description:
          'No-code chatbot platform enabling enterprises to create virtual agents for customer support',
        icon: '💼',
        country: '🇳🇴',
        link: 'https://boost.ai/',
      },
      {
        name: 'Parloa',
        description:
          'AI contact center platform using large language models to automate customer interactions',
        icon: '🗣️',
        country: '🇩🇪',
        link: 'https://parloa.com/',
      },
    ],
  },
  {
    id: 'inference',
    name: 'Inference API',
    icon: '🔌',
    color: 'bg-[#7B61FF]',
    services: [
      {
        name: 'Scaleway',
        description:
          'EU-hosted inference platform offering both multi-tenant API endpoints and dedicated GPU deployments',
        icon: '⚡',
        country: '🇫🇷',
        link: 'https://www.scaleway.com/en/generative-apis/',
      },
      {
        name: 'IONOS Cloud AI Model Hub',
        description:
          'OpenAI-compatible REST API for LLMs, text-to-image, and embeddings, hosted in German data centers with GDPR compliance',
        icon: '🚀',
        country: '🇩🇪',
        link: 'https://cloud.ionos.com/managed/ai-model-hub',
      },
      {
        name: 'Mistral AI',
        description:
          'Open-weight Large Language Models with self-hosting options and cloud provider partnerships',
        icon: '🌪️',
        country: '🇫🇷',
        link: 'https://mistral.ai',
      },
      {
        name: 'Berget AI',
        description:
          'Serverless and dedicated AI inference with self-hosting options. Includes an AI app deployment platform.',
        icon: '☁️',
        country: '🇸🇪',
        link: 'https://berget.cloud',
        addedDate: '2025-04-14',
      },
      {
        name: 'Nebius AI Studio',
        description:
          'Hosted inference platform for open-source LLMs and vision models with REST API and usage-based pricing',
        icon: '☁️',
        country: '🇳🇱',
        link: 'https://nebius.com',
      },
      {
        name: 'OVHcloud AI Endpoints',
        description:
          'Serverless AI endpoints for LLMs, Speech-to-Text, Translation, and Computer Vision models',
        icon: '🎯',
        country: '🇫🇷',
        link: 'https://labs.ovhcloud.com/en/ai-endpoints/',
      },
      {
        name: 'Hugging Face',
        description: 'Deploy Open Source Models and turn them into APIs',
        icon: '🤗',
        country: '🇫🇷',
        link: 'https://huggingface.co/inference-endpoints/dedicated',
      },
      {
        name: 'Eden AI',
        description:
          'Unified API platform providing access to 100+ AI models. Includes monitoring tools and a workflow builder.',
        icon: '⚡',
        country: '🇫🇷',
        link: 'https://www.edenai.co/',
      },
    ],
  },
  {
    id: 'personalization',
    name: 'Personalization',
    icon: '🎯',
    color: 'bg-[#45B7D1]',
    services: [
      {
        name: 'Recombee',
        description: 'AI powered recommender as a service',
        icon: '🎯',
        country: '🇨🇿',
        link: 'https://www.recombee.com/',
        addedDate: '2025-05-01',
      },
      {
        name: 'Rek.ai',
        description: 'AI-driven website content personalization engine',
        icon: '🤖',
        country: '🇸🇪',
        link: 'https://rek.ai',
      },
      {
        name: 'Oscar Stories',
        description: 'Create personalized stories for children',
        icon: '📖',
        country: '🇦🇹',
        link: 'https://oscarstories.com/',
      },
    ],
  },
  {
    id: 'translation',
    name: 'Translation',
    icon: '🌐',
    color: 'bg-[#4A90E2]',
    services: [
      {
        name: 'DeepL',
        description:
          'AI-powered translation with human-like accuracy and fluency',
        icon: '📝',
        country: '🇩🇪',
        link: 'https://www.deepl.com',
      },
      {
        name: 'Fair Text',
        description:
          'AI-powered simplification of complex German texts for clear and accessible communication',
        icon: '📄',
        country: '🇩🇪',
        link: 'https://fair-text.com',
      },
    ],
  },
  {
    id: 'education',
    name: 'Education',
    icon: '📚',
    color: 'bg-[#FF6B6B]',
    services: [
      {
        name: 'TRIADE-COPILOT',
        description:
          'TRIADE-COPILOT is an AI assistant for schools that simplifies time-consuming tasks for teachers and enhance student learning at home.',
        icon: '🤖',
        country: '🇫🇷',
        link: 'https://triade-educ.org/fr/',
        addedDate: '2025-05-01',
      },
      {
        name: 'Pladdra',
        description:
          'AI-powered education platform with age-specific preprompts, interactive lessons, personal prompt libraries & RAG.',
        icon: '📚',
        country: '🇸🇪',
        link: 'https://pladdra.com/',
        addedDate: '2025-04-06',
      },
      {
        name: 'Gradr',
        description:
          'A holistic educational AI solution for schools to generate exams, grade and analyze progress',
        icon: '📊',
        country: '🇸🇪',
        link: 'https://gradr.se/',
      },
      {
        name: 'Langoflow',
        description:
          "AI-driven platform that strengthens students' writing development by providing immediate, pedagogical feedback aligned with curriculum",
        icon: '✍️',
        country: '🇸🇪',
        link: 'https://langoflow.ai/english',
      },
      {
        name: 'Mizou',
        description: 'AI chatbot for education and training',
        icon: '🤖',
        country: '🇫🇷',
        link: 'https://mizou.com/',
      },
      {
        name: 'Intellectus',
        description:
          'AI-assistant for teachers. Improve your teaching with AI and get more time for each student.',
        icon: '👩‍🏫',
        country: '🇸🇪',
        link: 'https://www.intellectus.app/',
      },
      {
        name: 'thesify',
        description:
          'Responsible academic writing for students and researchers.',
        icon: '🧠',
        country: '🇨🇭',
        link: 'https://thesify.ai/',
      },
      {
        name: 'Acemate',
        description:
          'AI teaching platform that empowers universities to provide personalized learning at scale',
        icon: '🎓',
        country: '🇩🇪',
        link: 'https://www.acemate.ai/en/educators',
      },
      {
        name: 'Intellipaper.ai',
        description:
          'AI study assistant to chat with documents, summarize & translate content, and search 200M+ papers — all in one app.',
        icon: '📑',
        country: '🇦🇹',
        link: 'https://intellipaper.ai/',
        addedDate: '2025-05-05',
      },
    ],
  },
  {
    id: 'analytics',
    name: 'Analytics',
    icon: '📊',
    color: 'bg-[#9333EA]',
    services: [
      {
        name: 'Norna',
        description: 'AI-powered analytics platform for the fashion industry.',
        icon: '👗',
        country: '🇸🇪',
        link: 'https://norna.ai',
      },
      {
        name: 'Primi.ai',
        description:
          'Interview any demographic, anywhere, in any language — at scale. Primi.ai helps you uncover patterns, emotions, and insights from real conversations.',
        icon: '💬',
        country: '🇸🇪',
        addedDate: '2025-04-14',
        link: 'https://primi.ai/',
      },
    ],
  },
  {
    id: 'infrastructure',
    name: 'Infrastructure',
    icon: '🖥️',
    color: 'bg-[#2563EB]',
    services: [
      {
        name: 'Airon',
        description:
          'Private bare-metal AI infrastructure with NVIDIA GPUs, offering non-shared compute resources in European data centers',
        icon: '⚡',
        country: '🇸🇪',
        link: 'https://airon.ai',
      },
    ],
  },
  {
    id: 'models',
    name: 'AI Models',
    icon: '🧬',
    color: 'bg-[#8B5CF6]',
    services: [
      {
        name: 'Aleph Alpha',
        description:
          'Sovereign AI research company developing advanced language models with focus on explainability and enterprise deployment',
        icon: '🔬',
        country: '🇩🇪',
        link: 'https://aleph-alpha.com',
      },
      {
        name: 'Mistral AI',
        description:
          'Open-weight Large Language Models with self-hosting options and cloud provider partnerships',
        icon: '🌪️',
        country: '🇫🇷',
        link: 'https://mistral.ai',
      },
      {
        name: 'Ellamind',
        description: 'Research lab fine tuning large language models.',
        icon: '🤖',
        country: '🇩🇪',
        link: 'https://www.ellamind.com',
      },
      {
        name: 'IA tools - Infomaniak',
        description:
          'Provides API acces to open-source models (LLMs, embeddings, image generation, speech-to-text)',
        icon: '💬',
        country: '🇨🇭',
        link: 'https://www.infomaniak.com/en/hosting/ai-tools',
      },
    ],
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    icon: '🏭',
    color: 'bg-[#607D8B]',
    services: [
      {
        name: 'KNOWRON',
        description:
          'AI assistant for industrial technicians providing instant access to manuals and troubleshooting guides',
        icon: '🔧',
        country: '🇩🇪',
        link: 'https://www.knowron.com/',
      },
      {
        name: 'Synthavo',
        description:
          'AI-powered visual identification of machine spare parts using smartphone photos',
        icon: '📱',
        country: '🇩🇪',
        link: 'https://www.synthavo.de/en/',
      },
      {
        name: 'Bowatt',
        description:
          'AI platform for managing and analyzing customer specifications in industrial automation projects',
        icon: '⚡',
        country: '🇩🇪',
        link: 'https://www.bowatt.com/',
      },
    ],
  },
  {
    id: 'machine-learning',
    name: 'Machine Learning',
    icon: '🧮',
    color: 'bg-[#9333EA]',
    services: [
      {
        name: 'Apheris',
        description:
          'Enterprise platform for secure federated machine learning and analytics across distributed data sources without moving sensitive data.',
        icon: '🔒',
        country: '🇩🇪',
        link: 'https://www.apheris.com',
        addedDate: '2025-04-06',
      },
      {
        name: 'AI Verse',
        description:
          'Platform for creating high-quality annotated synthetic image datasets for training robust AI models.',
        icon: '🎯',
        country: '🇫🇷',
        link: 'https://ai-verse.com',
        addedDate: '2025-04-06',
      },
    ],
  },
  {
    id: 'productivity',
    name: 'Productivity',
    icon: '⚡',
    color: 'bg-[#22C55E]',
    services: [
      {
        name: 'Smart Calendars AI',
        description:
          'AI-powered calendar assistant that creates events from voice, photos, and text. Seamless integration across the Apple ecosystem.',
        icon: '📅',
        country: '🇩🇪',
        link: 'https://www.smartcalendars.ai/',
      },
    ],
  },
  {
    id: 'marketing',
    name: 'Marketing',
    icon: '📢',
    color: 'bg-[#FF69B4]',
    services: [
      {
        name: 'Retresco',
        description:
          'Empowers businesses to automate and optimize content workflows with AI — boosting efficiency and driving profitability',
        icon: '📝',
        country: '🇩🇪',
        link: 'https://www.retresco.com',
        addedDate: '2025-04-06',
      },
      {
        name: 'Neuroflash',
        description:
          'Create, personalize and optimize marketing content in one AI platform',
        icon: '✨',
        country: '🇩🇪',
        link: 'https://neuroflash.com/',
      },
      {
        name: 'Branding5',
        description:
          'AI-powered branding tool that helps businesses define their brand identity and develop effective marketing strategies',
        icon: '🚀',
        country: '🇦🇹',
        link: 'https://branding5.com/',
      },
    ],
  },
  {
    id: 'retrieval',
    name: 'Retrieval',
    icon: '🔍',
    color: 'bg-[#10B981]',
    services: [
      {
        name: 'Spykio',
        description:
          'Advanced RAG provider with contextual understanding technology for precise information retrieval',
        icon: '🔍',
        country: '🇧🇪',
        link: 'https://spyk.io',
        addedDate: '2025-05-11',
      },
    ],
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: '🏥',
    color: 'bg-[#EC4899]',
    services: [
      {
        name: 'Vesalius.ai',
        description:
          'AI assistant for healthcare providers that streamlines patient intake, consultation, and documentation',
        icon: '👨‍⚕️',
        country: '🇧🇪',
        link: 'https://www.vesalius.ai/',
        addedDate: '2025-05-11',
      },
    ],
  },
];
