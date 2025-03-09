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
    ],
  },
  {
    id: 'assistants',
    name: 'Assistants',
    icon: '🧠',
    color: 'bg-[#4CAF50]',
    services: [
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
    ],
  },
  {
    id: 'automation',
    name: 'Automation',
    icon: '⚙️',
    color: 'bg-[#FF9800]',
    services: [
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
    ],
  },
  {
    id: 'personalization',
    name: 'Personalization',
    icon: '🎯',
    color: 'bg-[#45B7D1]',
    services: [
      {
        name: 'Rek.ai',
        description: 'AI-driven website content personalization engine',
        icon: '🤖',
        country: '🇸🇪',
        link: 'https://rek.ai',
      },
      {
        name: 'Oscar Stories',
        description: 'Child-friendly AI applications',
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
    ],
  },
  {
    id: 'education',
    name: 'Education',
    icon: '📚',
    color: 'bg-[#FF6B6B]',
    services: [
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
    ],
  },
];
