document.addEventListener("DOMContentLoaded", function() {
    // hämtar data
    fetch('JavaScript/cvData.json')
        .then(response => response.json())
        .then(data => {
            // profil sectionen
            const profileHTML = data.profile.map(item => `
                <img src ="${item.image}" alt="${item.name}" id="LudwigRomPic">
                <h1>${item.name}</h1>
                <h2 ul class = "cvlista">
                    ${item.role.map(role => `<li>${role}</li>`).join('')}
                </h2>                
                <p>${item.profileinfo}</p>
                <h3>Färdigheter</h3>
                <ul class="skillslista">
                    ${item.skills.map(skills => `<li>${skills}</li>`).join('')}
                </ul> 
            `).join('');
            // utbildnings sectionen
            const edutitleHTML ="<h1>Utbildningar</h1>";
            const educationHTML = data.education.map(item => `
                <h3>${item.institution} (${item.date})</h3>
                <p>${item.degree}</p>
            `).join('');

            // arbetslivserfarenhets sectionen
            const workExperiencetitleHTML ="<h1>Arbetslivserfarenhet</h1>";
            const workExperienceHTML = data.workExperience.map(item => `
                <h2>${item.position}</h2>
                <h3>${item.company} (${item.date})</h3>
                <ul>
                    ${item.responsibilities.map(responsibility => `<li>${responsibility}</li>`).join('')}
                </ul>
            `).join('');

            // skapar och strukturerar CV dokumentet
            document.querySelector('.leftside').innerHTML += profileHTML;     
            document.querySelector('.rightside').innerHTML += workExperiencetitleHTML;    
            document.querySelector('.rightside').innerHTML += workExperienceHTML;
            document.querySelector('.rightside').innerHTML += edutitleHTML;
            document.querySelector('.rightside').innerHTML += educationHTML;
        })
        .catch(error => console.error('Error fetching CV data:', error));
});
