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

  // Bio templates (as above, but with interpolation in the function)
  // Note: We use a function to inject username and interests into the templates
  function getBioTemplates() {
    const username = document.getElementById("username").value;
    const interests = Array.from(document.querySelectorAll(".interest"))
      .map((input) => input.value.trim())
      .filter((value) => value !== "");

    return {
      geeky: {
        generic: [
          `I'm ${username}, a self-proclaimed geek who loves ${interests.join(
            ", "
          )}. Always ready to debug life!`,
          `Hi, I'm ${username}. ${interests[0]}? I'm all about it. The rest? Just icing on the cake!`,
          `Hello, I’m ${username}. My superpower? ${interests[0]}. My kryptonite? Bugs in my code.`,
        ],
        sheldon: [
          `I'm ${username}, and I have a protocol for ${interests[0]}. Would you like to hear it?`,
          `${username} here. ${interests[0]} is my jam. ${interests[1]}? That’s my backup jam.`,
          `Hi, I’m ${username}. If ${interests[0]} was a particle, I’d be its best observer.`,
        ],
        turing: [
          `I'm ${username}. I think about ${interests[0]} and wonder if machines can truly understand it.`,
          `${username} here. I love ${interests[0]} so much, I’d write a paper on it.`,
          `Hello, I’m ${username}. ${interests[0]} is my Turing test—pass or fail, I’m still learning.`,
        ],
      },
      casual: {
        generic: [
          `Hey, I'm ${username}. I enjoy ${interests.join(
            ", "
          )} and just being myself.`,
          `It's ${username} here. I like ${interests[0]} and hanging out with friends.`,
          `Hi, I’m ${username}. I’m into ${interests[0]}, and I’m always down for a good chat.`,
        ],
        chill: [
          `${username} here. I’m all about ${interests[0]}, but mostly just chilling.`,
          `Hey, I’m ${username}. I like ${interests[0]}, but I’m not here to stress about it.`,
          `Hi, I’m ${username}. ${interests[0]} is cool, but so is relaxing.`,
        ],
        friend: [
          `I'm ${username}. I love ${interests[0]}, and I’m always up for making new friends!`,
          `${username} here. I’m into ${interests[0]}, and I’m the friend who always has snacks.`,
          `Hi, I’m ${username}. I like ${interests[0]}, and I’m here to support you.`,
        ],
      },
      funny: {
        generic: [
          `I'm ${username}, and if ${interests[0]} was a person, we'd be besties. The rest? We're on a first-name basis.`,
          `Yo, it's ${username}! I love ${interests.join(
            ", "
          )}. I'm not a regular person, I'm a cool person!`,
          `Hey, I’m ${username}. I’m into ${interests[0]}, and I’m not afraid to admit I have no idea what I’m doing.`,
        ],
        chandler: [
          `Could I *be* any more into ${interests[0]}? Hi, I'm ${username}. ${interests[1]}, you can join the party too.`,
          `I'm ${username}. I have a funny feeling about ${interests[0]}, but I'm not sure why. Maybe it's my sarcasm.`,
          `You know what’s not funny? Not being into ${interests[0]}. I’m ${username}, and I’m here to fix that.`,
        ],
        ironman: [
          `I’m ${username}. I like ${interests[0]} so much, I built a suit for it. Okay, maybe not, but I’m working on it.`,
          `${username} here. ${interests[0]}? I’m a genius, billionaire, playboy, philanthropist—well, at least in my dreams.`,
          `Call me ${username}. I love ${interests[0]}, and I promise I’m not as arrogant as Tony Stark. Maybe.`,
        ],
        george: [
          `I'm ${username}. I was going to be an expert in ${interests[0]}, but then I got distracted by ${interests[1]}. Story of my life.`,
          `${username} here. I love ${interests[0]}, but I'm not sure if ${interests[0]} loves me back.`,
          `Hi, I’m ${username}. I like ${interests[0]}, but I’m not sure what it says about me. Maybe I’m just cheap.`,
        ],
      },
      business: {
        generic: [
          `This is ${username}. I specialize in ${interests[0]} and am always looking for new opportunities.`,
          `${username} here. My focus is on ${interests.join(
            ", "
          )} and driving results.`,
          `Hello, I’m ${username}. I’m passionate about ${interests[0]} and always ready for the next challenge.`,
        ],
        shark: [
          `I’m ${username}. I see opportunity in ${interests[0]}, and I’m not afraid to invest.`,
          `${username} here. ${interests[0]} is my next big deal. Are you in?`,
          `Hi, I’m ${username}. I like ${interests[0]}, and I’m ready to make it happen.`,
        ],
        ceo: [
          `I'm ${username}, CEO of my own life. ${interests[0]} is my current project.`,
          `${username} here. I lead with ${interests[0]} and inspire with results.`,
          `Hello, I’m ${username}. I’m all about ${interests[0]} and making things happen.`,
        ],
      },
      professional: {
        generic: [
          `Hello, I'm ${username}. I'm passionate about ${interests.join(
            ", "
          )} and strive for excellence.`,
          `I am ${username}. My interests include ${interests.join(
            ", "
          )} and continuous learning.`,
          `Hi, I’m ${username}. I’m dedicated to ${interests[0]} and always looking to grow.`,
        ],
        mentor: [
          `I'm ${username}. I love sharing my knowledge about ${interests[0]} and helping others succeed.`,
          `${username} here. I’m passionate about ${interests[0]} and enjoy mentoring others.`,
          `Hello, I’m ${username}. I believe in ${interests[0]} and the power of learning together.`,
        ],
        expert: [
          `I’m ${username}, and I’ve spent years mastering ${interests[0]}. I’m here to share what I know.`,
          `${username} here. I’m an expert in ${interests[0]} and always eager to learn more.`,
          `Hi, I’m ${username}. I specialize in ${interests[0]} and am committed to excellence.`,
        ],
      },
    };
  }

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

    // Get the bio templates for the current username and interests
    const bioTemplates = getBioTemplates();
    const styles = Object.keys(bioTemplates[personality]);
    const randomStyle = styles[Math.floor(Math.random() * styles.length)];
    const prompts = bioTemplates[personality][randomStyle];
    const bio = prompts[Math.floor(Math.random() * prompts.length)];
    bioOutput.textContent = bio;
  });
});
