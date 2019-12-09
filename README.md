<h1 align="center">
    <img src="https://i.imgur.com/lqq2G3d.png" alt="Pixelympics's logo"/>
</h4>
<h4 align="center">
    Year 3 Computer Games Development - Web Games Development 1
</h4>

<h5 align="center">
    By Calum Bain & Lee Sturrock
</h5>


## Game Design

### Game Overview

Pixelympics is a local multiplayer casual/party type of game meant as a simple portable time waster that can be just jumped in and played. It has obvious inspiration from the Olympic Games and plays out as such, which each minigame featured being a caricature of its real life counterpart. It is planned to be playable by all, as we have designed the gameplay, UI and overall graphics design to be simplistic and easy to visualise and pick up, this resulted in our choice of a pixel art style - hence the name Pixelympics.

The gameplay will be different depending on what the current minigame demands, in the shooting minigame the players will have to diligently control a firearm using set keys on the keyboard in order to hit flying discuses. In the sprint minigame, the players will be tasked with pressing the corresponding on-screen shown keyboard keys as fast as possible in order to progress and finish the race before their opponent. We feel these simplistic control schemes help us achieve our goal of a game that can reach all audiences, and we hope it also teaches us about accessibility and things of that nature so that we can continue to make our future projects more playable for everyone.

### Game Concept

Our first thought was that we wanted to make a simple game that could be played locally and quickly with another player to quickly kill some time. This idea came from experiences of extended gaps in between classes wishing there was something we could do to pass the time. We expanded the idea further by deciding to create multiple different competitive minigames each testing a different feat or skill from the players. Naturally the Olympic Games came to mind as they too include multiple different events that demand a certain skill from the competitors. Inspiration for this game also came from other casual type sports games such as Wii Sports and Mario &amp; Sonic at the Olympic Games&#39;

### Business Model & Games Development Life Cycle

We weighed all our options and considered the various life cycles and what one would suit our development the most, but decided to settle on using the Agile life cycle as we had already applied some of its aspects, such as our prioritisation of minigames and features.

The agile methodology is similar to the standard waterfall methodology as it follows the same sequence of stages – “Planning”, “Analysis”, “Design”, “Implementation”, “Testing” and “Maintenance”. However, this method aims to catch problems early by releasing multiple iterations of the same project rapidly with small incremental changes for testing, catching issues early in development before they become a bigger one further down the line. This ultimately allows us to make changes if we know something in the game won’t work before it’s too late.

<h1 align="center">
    <img src="https://i.imgur.com/2ZxnPfR.png" alt="Pixelympics's logo"/>
</h1>

We feel the Agile life cycle will help us greatly in working together towards our shared goals, as when we come in to the labs we do generally work on individual tasks with gradual input from each other along the way. This could be described as the ‘sprints’ featured in the Agile life cycle and are done as such, one task seen through to completion and then another is moved on to, all while working down the priority list.

We for-see this working well when designing specific parts of our game, one person can work on the UI, while another programs the mechanics for example, then at the end of the day it is compiled together and (hopefully) uploaded to GitHub for further analysis/developments.

### Plot

The game is completely void of any plot or narrative outside of the players own scenarios/narratives, it is simply meant to be a casual, but at the same time competitive minded game as the players strive to earn the most points. The only plot that would be featured would be supplied by the players own rivalry and banter as they compete against one another, however we do hope our game ultimately sparks fun and healthy rivalry/banter as opposed to toxicity.

### Gameplay

The gameplay will vary between each different Olympic event but will not be overly complicated in terms of controls or rules as to confuse the players. We plan to create a minimum of 4 different minigames as a baseline for the game but plan to add in more depending on how much time we have.

Below is a priority list of what different minigames we want to add and what features we will need to implement for each of them to work.

#### High Priority

- Sprint: Two-key button mash minigame
- Archery: Accuracy-based target shooting minigame
- Shooting: Moving target/reaction speed shooting minigame

#### Medium Priority

- Volleyball: Each player controls a different character to knock a ball back and forth over a net
- Triathlon: Extended button mash/endurance minigame divided into 3 parts. Swimming, Cycling and Running
- Javelin Throw
- Player interference/throwing off other players: Karma

#### Low Priority

- High Jump
- Long Jump
- Swimming

The structure of the game is fairly simplistic and linear. In each minigame the player will have to compete locally with another player trying to gain the most points depending on how many rounds they decide to play. This will conclude with the player with the most points being declared victorious and therefore completing that minigame. We expect the players of the game to have a good time and have potential for some friendly banter with one another, an all round fun experience.

### Game Interface Design

For the games interface design we took a lot of inspiration from Castle Crashers, Battleblock Theater, and Paper Mario. All of these inspirations feature a cute, concise and colourful design we feel would be well fitted for our game. We ultimately want an easy to read and understandable interface for our game in order to fit our desire to reach all audiences, so we took into account accessibility, legibility, age gaps, and other such things. Below is a list of key rules we plan to follow throughout our game’s interface design.

- Simple, clear and uncluttered
- Sans-Serif fonts for easier readability
- Colourful and bright

We also created a few mock up designs for how we envision our game’s UI will be laid out.

<h1 align="center">
    <img src="https://i.imgur.com/ANbUHed.png" alt="Pixelympics's logo"/>
</h1>

### Game Environment/Level Design

Each event will all consist of simple, pixelated background sets, with the players clearly in the foreground performing whatever task the current level requires, in addition to this the events will have various prop assets that are also in the foreground to help bring the scene together. The level design, or lack thereof, will be very linear in the sense that the player will rarely leave the set stage for whatever gamemode they are playing however the background may scroll to follow an object such as an arrow in the Archery event or players in the Sprint event. The game’s environment will try to match that of a packed Olympic stadium with simple animated backgrounds to represent the fans and each event being immediately recognisable to real life Olympic sports.Olympic sports.

## Requirements Specification

To aid in planning our game we have wrote up an initial requirements specification, featuring a functional and non-functional requirements list as well as a table showing our perceived idea of our assets that would be required. This may change or be obsolete later in development, but it has aided us in finalizing some ideas at this stage in development.

#### Functional Requirements

- Simplistic control schemes
- At least 4 minigames
- Consistent point system
- Point addition system – player gains points for hitting targets/discuses (dependant on minigame type)
- Projectiles that collide with targets/discuses
- Responsive player controls

#### Non-Functional Requirements

- Olympic/sports pixel esque theme
- Game logo
- Player character assets/animations
- Player character sounds
- Minigame specific sounds (dependant on minigame type)
- Minigame background scene assets/animations (dependant on minigame type)
- Minigame specific assets/animations (dependant on minigame type)
- User interface elements (dependant on minigame type)
- User interface elements animations (dependant on minigame type)
- Minigame stage music (dependant on minigame type)
- Main menu
- Main menu animated background
- Main menu button assets/animations
- Pause menu
- Pause menu button assets/animations

#### Assets Required

**Models/Graphics**

- Player character(s)
- Game logo
- User interface(s)
- Minigame background scene assets
- Minigame specific assets
- Main menu button(s)
- Projectile(s)

**Textures/Colours**
  
- Player character(s)
- Minigame background scene assets
- Minigame specific assets
- Main menu button(s)
- Pause menu button(s)
- Projectile(s)
  
  **Sounds/Music**
 
- Player character
- Minigame specific
- Main menu
- Pause menu

#### Accessibility & Ease of Use

As briefly touched upon before, our game is intended to be playable for everyone and so we have made certain gameplay and design choices to hopefully aid in reflecting that. A few of these I can highlight at this stage in development are our planned user interface choices, a proven legible font, having it clear and uncluttered, the concept of having a points bar as opposed to text for easier understanding (for those with reading issues, etc), and finally what we hope to be a widely accessible colour scheme. There are also a few gameplay and control choices I can highlight; with all our minigames being controlled by keyboard keys which allows for an easier time for those who may be less able to use a mouse or other more in depth control schemes, as well as our chosen artstyle being pixel dominant which we feel is easily understandable if done right and again we also hope to accompany it with a widely accessible colour scheme.

## Game Implementation

#### Game Features

Our game is planned to have many features throughout its different minigames, this comes both in gameplay requirements/loops and in various game mechanics. In some minigames the players will be interacting with a prop and/or the environment/background set piece, in others the player may be directly interacting with the challenging player. A fun feature we’d like to implement is being able to distract the other player in-game during certain events to either throw off their aim or force them to miss a shot in Archery or Shooting. However this could have consequences on the player doing so such as being deducted points or being out right disqualified giving the other player an automatic win. If we are able to implement such a feature we feel it would be a good showing of player consequence while still fitting the casual feel and design of our game.

Throughout the game the player will interact with props and the environment in a realistic fashion with some over embellishment or emphasis on some aspects. For example the player firing an arrow in the archery minigame will feature many particle and graphic effects to help give the arrow shots more of an impactful feeling.

#### Player Mechanics

Our game mechanics are somewhat unique in that they change per minigame, in some button mashing is prominent, but in others accuracy and precision is required. To add this, our game is local multiplayer, but also coming with some unique altercations with some minigames being turn based and others being simultaneous.

There are plans for an in depth karma-esque mechanic to go along with our medium priority player interference mechanic, but as it’s not a top priority, we are not sure we can see it through to completion so we don’t want to embellish on it too much. Our concept for how it would work would be as follows; If a player interferes a set amount of times then it is determined (possibly by a random number generator) whether or not they are going to be disqualified, resulting in the other player automatically winning the minigame. However on the flipside, throwing off the challenging players crucial attempts as they are already ahead could result in the interfering player getting an edge and ultimately coming out on top. We feel this would be a unique mechanic and memorable feature within the game, but as mentioned before, we are unsure if we will be able to implement it due to our unfamiliarity with Javascript and the Phaser development environment.

As briefly touched on before, our game will conclude when a player has gained more points than the other, or a time limit has been reached. For example in our archery minigame the player would be given a set amount of arrows (5 or so) and would attempt to gain the most points they possibly can with them, if this resulted in a draw somehow the players would both be given an additional arrow. In our sprint gamemode, the winner would be declared when someone simply wins the race.
