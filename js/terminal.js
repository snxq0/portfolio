const aboutData = {
            whoami: `
                <div class="text-blue-500 mb-4">> cat intro.txt</div>
                <p class="text-white mb-4">My name is Isaiev. I'm a developer who believes that code is a modern art form. My goal is to create products that are a pleasure to use.</p>
                <p class="text-gray-400">I'm based in the online world and work remotely all over the world.</p>
            `,
            skills: `
                <div class="text-blue-500 mb-4">> list skills --technical</div>
                <div class="grid grid-cols-2 gap-4">
                    <ul class="text-gray-300">
                        <li class="text-white font-bold mb-1">Core:</li>
                        <li>- JavaScript (ES6+)</li>
                        <li>- React / Next.js</li>
                        <li>- TypeScript</li>
                    </ul>
                    <ul class="text-gray-300">
                        <li class="text-white font-bold mb-1">Styles & Tools:</li>
                        <li>- Tailwind CSS</li>
                        <li>- Git / GitHub</li>
                        <li>- Figma to Code</li>
                    </ul>
                </div>
            `,
            mindset: `
                <div class="text-blue-500 mb-4">> mindset.py --execute</div>
                <p class="text-white">"Make the complex simple, and make the simple clear."</p>
                <ul class="mt-4 space-y-2 text-gray-400">
                    <li>- The Pixel-Perfect Approach</li>
                    <li>- Code quality is more important than speed</li>
                    <li>- Continuous learning every day</li>
                </ul>
            `,
            contact: `
                <div class="text-blue-500 mb-4">> contact --info</div>
                <p class="text-gray-300">Ready for new challenges and exciting projects.</p>
                <div class="mt-4 space-y-2">
                    <p class="text-white">Email: <span class="text-blue-400 select-all">isaievv@icloud.com</span></p>
                    <p class="text-white">Telegram: <span class="text-blue-400">@isaiev_sys</span></p>
                </div>
            `
        };

        const aboutOutput = document.getElementById('aboutOutput');
        document.querySelectorAll('#aboutCommands li').forEach(cmd => {
            cmd.addEventListener('click', () => {
                const key = cmd.getAttribute('data-key');
                aboutOutput.style.opacity = '0';
                setTimeout(() => {
                    aboutOutput.innerHTML = aboutData[key];
                    aboutOutput.style.opacity = '1';
                }, 150);
            });
        });