# 🇪🇺 AI Atlas

![AI Atlas Banner](public/europe-logo.svg)

## 🌍 About

AI Atlas is a comprehensive directory of European AI services and tools. Our mission is to showcase the vibrant European AI ecosystem and help users discover innovative AI solutions developed in Europe.

**🔗 [Visit AI Atlas](https://aiatlas.eu)**

## ✨ Features

- Curated collection of European AI services
- Focus on innovative generative AI solutions
- Categorized by functionality (Chat, Image, Video, Audio, etc.)
- Country flags indicating company headquarters
- Clean, responsive UI for easy browsing
- Open-source and community-driven

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/northwindlabs/ai-atlas.git
   cd aiatlas
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Run the development server
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Adding a New AI Service

1. Fork the repository
2. Edit the `src/data/services.ts` file to add a new service to the appropriate category
3. Follow this format:
   ```typescript
   {
     name: "Service Name",
     description: "Brief description of the service (max 150 characters)",
     icon: "🤖", // Choose an appropriate emoji
     country: "🇪🇺", // Country flag emoji where the company is headquartered
     link: "https://example.com/",
   }
   ```
4. Submit a pull request with your changes

### Guidelines for Adding Services

- **European Focus**: The service should be developed by a company headquartered in Europe*. 
- **Active Service**: The service should be currently active, usable and accessible (not just a waitlist)
- **Generative AI Component**: The service should have an innovative generative AI solution as a significant part of its offering
- **Accurate Description**: Provide a clear, concise description of what the service does. Try to keep it short
- **Appropriate Category**: Place the service in the most relevant category

If you're unsure about which category to use or need to suggest a new one, please open an issue for discussion.

*If the company has its headquarters in Europe but is registered somewhere else, please add separate hq and legal attributes (look at Lovable in the list as an example)

### Other Contributions

- Improve the UI/UX
- Fix bugs or issues
- Enhance documentation
- Add new features

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- All the amazing European AI companies and services
- The open-source community
- [Next.js](https://nextjs.org/) for the framework
- [Tailwind CSS](https://tailwindcss.com/) for styling

---

Made with ❤️ in Europe 🇪🇺
