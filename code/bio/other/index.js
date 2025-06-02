/** @format */

document.addEventListener("DOMContentLoaded", () => {
  const interestsContainer = document.getElementById("interestsContainer");
  const addInterestBtn = document.getElementById("addInterest");
  const generateBioBtn = document.getElementById("generateBio");
  const bioOutput = document.getElementById("bioOutput");
  let interestCount = 1;
  const MAX_INTERESTS = 10;

  // Add interest input field
  addInterestBtn.addEventListener("click", () => {
    if (interestCount < MAX_INTERESTS) {
      interestCount++;
      const input = document.createElement("input");
      input.type = "text";
      input.className = "interest";
      input.placeholder = `Interest ${interestCount}`;
      interestsContainer.appendChild(input);
    } else {
      alert(`Maximum ${MAX_INTERESTS} interests allowed!`);
    }
  });

  // Helper to join interests naturally
  const mentionAll = (interests) => {
    if (interests.length === 0) return "";
    if (interests.length === 1) return interests[0];
    if (interests.length === 2) return `${interests[0]} and ${interests[1]}`;
    return `${interests.slice(0, -1).join(", ")}, and ${
      interests[interests.length - 1]
    }`;
  };

  // Bio templates (exact sentences you provided)
  const getBioTemplates = () => {
    const username = document.getElementById("username").value.trim();
    const interests = Array.from(document.querySelectorAll(".interest"))
      .map((input) => input.value.trim())
      .filter((value) => value !== "");
    const allInterests = mentionAll(interests);

    return {
      geeky: {
        generic: [
          `I'm ${username}, a self-proclaimed geek who loves ${allInterests}. Always ready to debug life!`,
          `Hi, I'm ${username}. My interests are ${allInterests}. I'm all about the details.`,
          `Hello, I’m ${username}. My superpower? ${allInterests}. My kryptonite? Bugs in my code.`,
          `${username} here. I’m passionate about ${allInterests} and always eager to learn more.`,
          `I’m ${username}. If you need someone to nerd out about ${allInterests}, I’m your person.`,
        ],
        sheldon: [
          `I'm ${username}, and I have a protocol for ${allInterests}. Would you like to hear it?`,
          `${username} here. My interests are ${allInterests}. I take them very seriously.`,
          `Hi, I’m ${username}. If ${allInterests} were particles, I’d be their best observer.`,
          `I’m ${username}. I’ve developed theories about ${allInterests}. Want to discuss?`,
          `${username} reporting in. I’m all about ${allInterests}—and maybe a little about you.`,
        ],
        turing: [
          `I'm ${username}. I think about ${allInterests} and wonder if machines can truly understand them.`,
          `${username} here. I love ${allInterests} so much, I’d write a paper on them.`,
          `Hello, I’m ${username}. ${allInterests} are my Turing test—pass or fail, I’m still learning.`,
          `I’m ${username}. I’m fascinated by ${allInterests} and how they shape our world.`,
          `${username} at your service. I’m dedicated to understanding ${allInterests} inside and out.`,
        ],
        ironman: [
          `I’m ${username}. I like ${allInterests} so much, I built a suit for them. Okay, maybe not, but I’m working on it.`,
          `${username} here. ${allInterests}? I’m a genius, billionaire, playboy, philanthropist—well, at least in my dreams.`,
          `Call me ${username}. I love ${allInterests}, and I promise I’m not as arrogant as Tony Stark. Maybe.`,
          `I’m ${username}. I’m passionate about ${allInterests}, and I’m ready to save the world.`,
          `${username} at your service. I’m all about ${allInterests}, and I’m always up for an adventure.`,
        ],
        george: [
          `I'm ${username}. I was going to be an expert in ${allInterests}, but then I got distracted. Story of my life.`,
          `${username} here. I love ${allInterests}, but I'm not sure if they love me back.`,
          `Hi, I’m ${username}. I like ${allInterests}, but I’m not sure what it says about me. Maybe I’m just cheap.`,
          `I’m ${username}. My interests are ${allInterests}, and I’m not sure if that’s a good thing.`,
          `${username} reporting. I’m into ${allInterests}, but I’m still figuring it out.`,
        ],
      },
      casual: {
        generic: [
          `Hey, I'm ${username}. I enjoy ${allInterests} and just being myself.`,
          `It's ${username} here. I like ${allInterests} and hanging out with friends.`,
          `Hi, I’m ${username}. I’m into ${allInterests}, and I’m always down for a good chat.`,
          `I’m ${username}. My interests are ${allInterests}—nothing too serious, just fun.`,
          `${username} here. I like ${allInterests}, and I’m always up for something new.`,
        ],
        chill: [
          `${username} here. I’m all about ${allInterests}, but mostly just chilling.`,
          `Hey, I’m ${username}. I like ${allInterests}, but I’m not here to stress about it.`,
          `Hi, I’m ${username}. ${allInterests} are cool, but so is relaxing.`,
          `I’m ${username}. I enjoy ${allInterests}, but I’m all about the good vibes.`,
          `${username} reporting. I’m into ${allInterests}, but I’m not in a hurry.`,
        ],
        friend: [
          `I'm ${username}. I love ${allInterests}, and I’m always up for making new friends!`,
          `${username} here. I’m into ${allInterests}, and I’m the friend who always has snacks.`,
          `Hi, I’m ${username}. I like ${allInterests}, and I’m here to support you.`,
          `I’m ${username}. My interests are ${allInterests}, and I’m always ready to help out.`,
          `${username} at your service. I like ${allInterests}, and I’m always here for a chat.`,
        ],
      },
      funny: {
        generic: [
          `I'm ${username}, and if ${allInterests} were people, we'd be besties.`,
          `Yo, it's ${username}! I love ${allInterests}. I'm not a regular person, I'm a cool person!`,
          `Hey, I’m ${username}. I’m into ${allInterests}, and I’m not afraid to admit I have no idea what I’m doing.`,
          `I’m ${username}. My interests are ${allInterests}, and I’m not sure what that says about me.`,
          `${username} here. I like ${allInterests}, and I’m pretty sure that’s a good thing.`,
        ],
        chandler: [
          `Could I *be* any more into ${allInterests}? Hi, I'm ${username}.`,
          `I'm ${username}. I have a funny feeling about ${allInterests}, but I'm not sure why. Maybe it's my sarcasm.`,
          `You know what’s not funny? Not being into ${allInterests}. I’m ${username}, and I’m here to fix that.`,
          `I’m ${username}. I’m all about ${allInterests}, and I’m not afraid to make a joke about it.`,
          `${username} here. If you like ${allInterests}, we’re going to get along just fine.`,
        ],
      },
      business: {
        generic: [
          `This is ${username}. I specialize in ${allInterests} and am always looking for new opportunities.`,
          `${username} here. My focus is on ${allInterests} and driving results.`,
          `Hello, I’m ${username}. I’m passionate about ${allInterests} and always ready for the next challenge.`,
          `I’m ${username}. I’m dedicated to ${allInterests}, and I’m always looking to grow.`,
          `${username} at your service. I’m all about ${allInterests} and making things happen.`,
        ],
        shark: [
          `I’m ${username}. I see opportunity in ${allInterests}, and I’m not afraid to invest.`,
          `${username} here. ${allInterests} are my next big deal. Are you in?`,
          `Hi, I’m ${username}. I like ${allInterests}, and I’m ready to make it happen.`,
          `I’m ${username}. I’m all about ${allInterests}, and I’m not afraid to take risks.`,
          `${username} reporting. I’m passionate about ${allInterests}, and I’m always looking for the next opportunity.`,
        ],
        ceo: [
          `I'm ${username}, CEO of my own life. ${allInterests} are my current projects.`,
          `${username} here. I lead with ${allInterests} and inspire with results.`,
          `Hello, I’m ${username}. I’m all about ${allInterests} and making things happen.`,
          `I’m ${username}. I’m dedicated to ${allInterests}, and I’m always looking to innovate.`,
          `${username} at your service. I’m passionate about ${allInterests}, and I’m always ready to lead.`,
        ],
      },
      professional: {
        generic: [
          `Hello, I'm ${username}. I'm passionate about ${allInterests} and strive for excellence.`,
          `I am ${username}. My interests include ${allInterests} and continuous learning.`,
          `Hi, I’m ${username}. I’m dedicated to ${allInterests} and always looking to grow.`,
          `I’m ${username}. I’m all about ${allInterests}, and I’m always eager to learn more.`,
          `${username} here. I’m passionate about ${allInterests}, and I’m always ready for a challenge.`,
        ],
        mentor: [
          `I'm ${username}. I love sharing my knowledge about ${allInterests} and helping others succeed.`,
          `${username} here. I’m passionate about ${allInterests} and enjoy mentoring others.`,
          `Hello, I’m ${username}. I believe in ${allInterests} and the power of learning together.`,
          `I’m ${username}. I’m dedicated to ${allInterests}, and I’m always here to help.`,
          `${username} at your service. I’m all about ${allInterests}, and I’m always ready to guide others.`,
        ],
        expert: [
          `I’m ${username}, and I’ve spent years mastering ${allInterests}. I’m here to share what I know.`,
          `${username} here. I’m an expert in ${allInterests} and always eager to learn more.`,
          `Hi, I’m ${username}. I specialize in ${allInterests} and am committed to excellence.`,
          `I’m ${username}. I’m passionate about ${allInterests}, and I’m always looking to improve.`,
          `${username} reporting. I’m dedicated to ${allInterests}, and I’m always ready to teach.`,
        ],
      },
    };
  };

  // Generate bio on button click
  generateBioBtn.addEventListener("click", () => {
    const username = document.getElementById("username").value.trim();
    const interests = Array.from(document.querySelectorAll(".interest"))
      .map((input) => input.value.trim())
      .filter((value) => value !== "");
    const personalityInput = document.querySelector(
      'input[name="personality"]:checked'
    );

    if (!username || interests.length === 0 || !personalityInput) {
      alert(
        "Please fill in your username, at least one interest, and select a personality!"
      );
      return;
    }

    const personality = personalityInput.value;
    const bioTemplates = getBioTemplates();
    const styles = Object.keys(bioTemplates[personality]);
    const randomStyle = styles[Math.floor(Math.random() * styles.length)];
    const prompts = bioTemplates[personality][randomStyle];
    const bio = prompts[Math.floor(Math.random() * prompts.length)];
    bioOutput.textContent = bio;
  });
});
