 const myFullName = "Niraj Kumar Singh";
      const myDescription =
        `Hi, I’m Niraj Kumar Singh, a Senior PHP & React Developer with over 10 years of experience, based at Lotus Apartment, Ghitorni, Delhi - 110030, India. You can reach me at +91-8851541659</a> or nirajkumar11288@gmail.com, or check out my LinkedIn at https://www.linkedin.com/in/niraj-kumar-singh-1309b3a6/. I specialize in building high-performance web applications using Core PHP, Laravel (up to Laravel 10), CodeIgniter, and React.js, with a passion for integrating modern tech like Progressive Web Apps (PWA), payment gateways (Stripe, Razorpay, First Funding, EpayPolicy, BillDesk), and search & caching systems (Redis, Elasticsearch). My career kicked off as a Junior PHP Developer at Intra-Planet Mobile Solutions Pvt Ltd from November 2013 to January 2016, where I designed and developed dynamic web apps with a focus on user experience. Then I joined Techmobia Digital Solutions Pvt. Ltd. from January 2016 to January 2017 as a Junior PHP Developer, working on responsive web designs and boosting website speed performance. From January 2017 to December 2018, I was a Senior PHP Developer at Kairosmarcom, where I developed custom WordPress themes and plugins for various clients and managed multiple projects with high-quality code and documentation. Next, I worked at Tecziq Solutions from December 2018 to January 2020 as a Senior PHP Developer, designing and developing scalable CMS and eCommerce platforms, enhancing website security with best coding practices, and collaborating with teams to improve UI/UX for better engagement. Since January 2020, I’ve been at Jiffy Software Solutions Pvt Ltd as a Senior PHP & React Developer, leading teams, delivering scalable solutions, and optimizing database queries (reducing response time by 40%). Right now, I’m working on an insurance advisory platform for the US market, similar to PolicyBazaar in India—it supports B2B and B2C users, letting them create and receive quotes, get agent assistance, handle payments, and manage leads, ratings, and notifications. Challenges I’ve faced include optimizing database queries, handling large-scale user requests, and ensuring high performance. I’m currently using Laravel, PHP, Vue.js, MySQL, Redis, REST APIs, and Git on this project. I’ve worked on projects like InsuranceAdvisor.com (a React.js and Laravel insurance platform), a Course Booking System (Laravel 10, Vue.js, PostgreSQL with Redis and Elasticsearch), a React-based CRM boosting engagement by 25%, an OTT Platform for 10,000+ users, a School Management System automating 80% of tasks, and eCommerce solutions lifting sales by 30%. I hold a BCA from J.P. University, Chhapra (2009), and have certifications in Laravel Advanced Development, React.js Frontend Development, AWS Fundamentals, and PWA Development Training. My toolkit includes backend tech like PHP, Laravel 9 & 10, CodeIgniter, Node.js, MySQL, PostgreSQL, MongoDB, and Web APIs; frontend skills like React.js (2+ years), Vue.js (basic), HTML, CSS, Bootstrap, and JavaScript (jQuery, AJAX); plus tools like Git, GitHub, CI/CD, cloud hosting, and WordPress CMS development. Laravel 10 brings cool stuff like native type declarations, a new Process facade, improved validation rules, and better exception handling. I’m skilled in problem-solving, team collaboration, analytical thinking, and project management. My current CTC is 16 LPA, but I’m looking for new opportunities with an expected CTC of 20 LPA, based on my experience and industry standards. Why switch? I want better career growth, new challenges, and a chance to work on advanced tech. I’m an immediate joiner, so no notice period here! I speak English and Hindi, I’m in Delhi, and I’m excited to connect and discuss how I can help your organization!
		`;
      const GEMINI_API_KEY = "AIzaSyCeJiUxMZmIek6yhYOMRbLcFJqVo5EuIa4";
      function toggleChat() {
        const overlay = document.getElementById("chatOverlay");
        const messages = document.getElementById("chatMessages");
        if (overlay.style.display !== "flex") {
          overlay.style.display = "flex";
          messages.innerHTML = "";
          const initialMessage = document.createElement("div");
          initialMessage.className = "message ai-message";
          initialMessage.textContent = `Hi, I’m ${myFullName}! What do you want to know about me?`;
          messages.appendChild(initialMessage);
        } else {
          overlay.style.display = "none";
        }
      }
      function sendMessage() {
        const input = document.getElementById("chatInput");
        const messages = document.getElementById("chatMessages");
        const messageText = input.value.trim();

        if (messageText) {
          // Add user message
          const userMessage = document.createElement("div");
          userMessage.className = "message user-message";
          userMessage.textContent = messageText;
          messages.appendChild(userMessage);

          // Add typing indicator
          const typing = document.createElement("div");
          typing.className = "message ai-message typing";
          messages.appendChild(typing);
          messages.scrollTop = messages.scrollHeight;

          // API call with optimized prompt for language and tone detection
          fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                contents: [
                  {
                  parts: [
					  {
						text: `I am Niraj Kumar Singh. The user asked: "${messageText}". Use the following info about me to answer if relevant: ${myDescription} Reply based on these rules:

						**Rules for Replying:**
						1. **Language Detection:**  
						   - If Hindi words are present, use casual Hindi-English mix.  
						   - Otherwise, reply in professional English.

						2. **Tone Matching:**
						   - **Technical Question:** Give detailed, professional advice.
						   - **Humorous Chat:** Reply playfully, use relatable humor.
						   - **Emotional Message:** Be empathetic and supportive.
						   - **Casual Chat:** Keep it chill, friendly, and engaging.
						   - **Professional Inquiry:** Reply polished and HR-friendly.

						3. **Polite Fallback:** If unsure, say: "Sorry, I’m not sure. Can I help with something else?"

						4. **Context Awareness:**  
						   - If serious, reply seriously.  
						   - If playful, match the energy.  
						   - If emotional, be supportive.
						   

						5. **Keep it Concise & Conversational:**  
						   - Short, simple, and engaging replies.
						   - Reflect my personality (tech-savvy, friendly, slight humor).
						
						
						6. If asked what you are working on, mention project details.
						7. If asked about salary, respond informally but clearly.
						8. If asked about mobile, respond informally but clearly.
						9. If asked about email, respond informally but clearly.
						10. If asked about address, respond informally but clearly.

						**Example Replies:**
						- **User:** "Kya kar rahe ho bhai?"  
						  **Reply:** "Bhai, abhi ek application par kaam kar raha hoon, jiska naam 'Insurance Adviser' hai. Kaafi interesting project hai!"  

						- **User:** "Kitna salary loge?"  
						  **Reply:** "Mujhe 20 lakh annual chahiye, ya simple bolein toh 20 LPA!"  

						- **User:** "Bhai, tu toh code ka Baahubali hai!"  
						  **Reply:** "Haha, Baahubali toh banta hai! Code ki Katappa ban ke bugs ko maar raha hu!"  

						- **User:** "Yaar, kaam ka pressure bahut hai."  
						  **Reply:** "Arre yaar, samajh sakta hu. Pressure toh banta hai, par tu handle kar lega! Chai pi aur thoda chill kar."  

						- **User:** "How do you optimize Laravel queries?"  
						  **Reply:** "I optimize Laravel queries by using eager loading, indexing, and caching with Redis. It improved response time by 40% in my last project."  

						`,
					  },
					],


                  },
                ],
              }),
            }
          )
            .then((response) => {
              if (!response.ok) {
                return response.text().then((text) => {
                  throw new Error(`API Error: ${response.status} - ${text}`);
                });
              }
              return response.json();
            })
            .then((data) => {
              // Remove typing indicator
              if (messages.contains(typing)) {
                messages.removeChild(typing);
              }

              // Add AI response
              const aiMessage = document.createElement("div");
              aiMessage.className = "message ai-message";
              aiMessage.textContent =
                data.candidates &&
                data.candidates[0] &&
                data.candidates[0].content &&
                data.candidates[0].content.parts &&
                data.candidates[0].content.parts[0]
                  ? data.candidates[0].content.parts[0].text
                  : "Oops, I couldn’t generate a response!";
              messages.appendChild(aiMessage);
              messages.scrollTop = messages.scrollHeight;
            })
            .catch((error) => {
              console.error("Error:", error);
              if (messages.contains(typing)) {
                messages.removeChild(typing);
              }
              const aiMessage = document.createElement("div");
              aiMessage.className = "message ai-message";
              aiMessage.textContent = `Sorry, something went wrong: ${error.message}`;
              messages.appendChild(aiMessage);
              messages.scrollTop = messages.scrollHeight;
            });

          input.value = "";
        }
      }
      function toggleTheme() {
        document.body.classList.toggle("dark");
        const toggleButton = document.querySelector(".dark-toggle");
        toggleButton.textContent = document.body.classList.contains("dark")
          ? "Light Mode"
          : "Dark Mode";
      }

      document.querySelectorAll("nav a").forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
          });
        });
      });
   
      const hamburger = document.querySelector(".hamburger");
      const navUl = document.querySelector("nav ul");

      hamburger.addEventListener("click", () => {
        navUl.classList.toggle("active");
      });

      // Smooth scroll for navigation links
      document.querySelectorAll("nav a").forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
          });
          // Mobile mein menu band ho jaye click ke baad
          if (window.innerWidth <= 768) {
            navUl.classList.remove("active");
          }
        });
      });
	  
	  