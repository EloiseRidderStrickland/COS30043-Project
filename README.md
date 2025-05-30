# COS30043-Project
Swinburne University Of Technology / Interface Design &amp; Development COS30043 2025. 

## DISCLAIMER: 
This repository and all associated materials used for its deployment are for the purpose of educational skill demonstration only. This is **NOT** a production web application and therefore is **not** monetised in any way or form.

## Website Content
**Vite**, alongside **Vue.js** provide the framework for which the application is deployed. Other libraries utilised include **Bootstrap** and **jQuery**.

### Air-iums 
The website is designed to inform users of *and* about the creation of **Microworlds**, in the form of *Terrariums, Aquariums, Paludariums, Vivariums, Ripariums & Insectariums*. 

Content will be organised into three categories:
+ **Decorative:** Glassware & Vessels
+ **Foliage:** Plants & foods
+ **Aquatic:** Fish & Animals

### File Structure -- Draft -- 
            COS30043/
            ├──.vscode
            |     └── extension.json
            ├── framework/
            |      ├── css/
            |      └── js/
            ├── node_modules/
            |      └── (.modules/ x27)
            ├── public/
            |      ├── assets/
            |      |     └── (images x5)
            |      └── wallpapers/
            |            └── (images x7)
            ├──── src/
            |      ├── assets/
            |      |     └── (Private Images x2)
            |      ├── router/
            |      |     └── index.js 
            |      ├── views/
            |      |     ├── About.vue
            |      |     ├── Home.vue
            |      |     └── News.vue
            |      ├── App.vue
            |      ├── main.js
            |      └── styles.css
            ├── .gitignore
            ├── index.html
            ├── package-lock.json
            ├── package.json
            ├── README.md
            ├── vite.config.js

README.md Formatting Guide: https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax 

Free Web Icons: https://www.flaticon.com/

Website Design Inspirations: https://land-book.com/

Free Fonts: https://www.cdnfonts.com/

Free Stock Images: https://www.pexels.com/

Aquarium Wood Infomation: 
1. https://zenaquaria.com/best-driftwood-for-aquariums/
2. https://injaf.org/articles-guides/general-guides/guide-to-aquarium-wood/ 

# Deployment Instructions

1. Change vite.config.js:
        export default defineConfig({
            plugins: [vue()],
  Add -->   base: "/cos30043/s104934718/Project"
        })

2. Change Router:
    const router = createRouter ({
  Add --> history: createWebHistory('/cos30043/s104934718/Project/'),
          routes,
    })

3. Run: npm run build --base/cos30043/s104934718/Project/ 
4. Deploy To Directory.