/** @format */

document.addEventListener("DOMContentLoaded", function () {
  const interestsContainer = document.getElementById("interestsContainer");
  const addInterestBtn = document.getElementById("addInterest");
  const generateBioBtn = document.getElementById("generateBio");
  const bioOutput = document.getElementById("bioOutput");
  let interestCount = 1;

  // Add interest field
  addInterestBtn.addEventListener("click", function () {
    if (interestCount < 10) {
      interestCount++;
      const newInput = document.createElement("input");
      newInput.type = "text";
      newInput.className = "interest";
      newInput.placeholder = `Interest ${interestCount}`;
      interestsContainer.appendChild(newInput);
    } else {
      alert("Maximum 10 interests allowed!");
    }
  });

  // Bio generation logic
  generateBioBtn.addEventListener("click", function () {
    const username = document.getElementById("username").value;
    const interests = Array.from(document.querySelectorAll(".interest"))
      .map((input) => input.value.trim())
      .filter((value) => value !== "");
    const personality = document.getElementById("personality").value;

    if (!username || interests.length === 0) {
      alert("Please fill in your username and at least one interest!");
      return;
    }

    const bio = generateBio(username, interests, personality);
    bioOutput.textContent = bio;
  });

  // Bio templates for each personality
  function generateBio(username, interests, personality) {
    const bioTemplates = {
      geeky: [
        `I'm ${username}, a self-proclaimed geek who loves ${interests.join(
          ", "
        )}. Always ready to debug life!`,
        `Hi, I'm ${username}. ${interests[0]}? I'm all about it. The rest? Just icing on the cake!`,
      ],
      casual: [
        `Hey, I'm ${username}. I enjoy ${interests.join(
          ", "
        )} and just being myself.`,
        `It's ${username} here. I like ${interests[0]} and hanging out with friends.`,
      ],
      funny: [
        `I'm ${username}, and if ${interests[0]} was a person, we'd be besties. The rest? We're on a first-name basis.`,
        `Yo, it's ${username}! I love ${interests.join(
          ", "
        )}. I'm not a regular person, I'm a cool person!`,
      ],
      business: [
        `This is ${username}. I specialize in ${interests[0]} and am always looking for new opportunities.`,
        `${username} here. My focus is on ${interests.join(
          ", "
        )} and driving results.`,
      ],
      professional: [
        `Hello, I'm ${username}. I'm passionate about ${interests.join(
          ", "
        )} and strive for excellence.`,
        `I am ${username}. My interests include ${interests.join(
          ", "
        )} and continuous learning.`,
      ],
    };

    const templates = bioTemplates[personality] || bioTemplates.casual;
    return templates[Math.floor(Math.random() * templates.length)];
  }
});
