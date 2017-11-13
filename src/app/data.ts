import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDb implements InMemoryDbService {
  createDb() {
    let speeches = [
      {
        id: "1",
        title: "The Truth About Caffeine",
        author: "Natalie",
        keywords: "Caffeine, truth",
        text: `Today, I'd like to give you some of the facts about caffeine and its effects on your body. I may not cause you to change your coffee consumption, but at least you'll be better informed about what you are putting into your body.

I'm going to talk about the beneficial effects of caffeine, the negative effects and discuss what are considered to be 'safe' levels of caffeine consumption.

Let's start with the good news. Caffeine, which comes from the leaves, seeds and fruits of about 63 different plants, is well known as a stimulant. That's why people drink it, right?

Caffeine does help you wake up and feel more alert and it has been shown to increase attention spans. This is a beneficial effect for people who are driving long distances and for people who are doing tedious work. Calling this a health benefit may be stretching it, though staying awake while you are driving a car definitely contributes to your well-being!

Caffeine also contains antioxidants, which have been shown to have cancer prevention qualities.

The negative effects of caffeine are largely dependent on how much you consume.`
      },
      {
        id: "2",
        title: "Start of Example Informative Speech",
        author: "Natalie",
        keywords: "animal",
        text: `An episode of the edgy, humorous, and often line-crossing show South Park had the four young main animated characters singing the song "Pig and elephant DNA just won't splice" after a visit to the South Park Genetic Engineering Ranch. Unfortunately, this is how much of the country thinks about hybrid animals.

When most people hear the term "hybrid animal," they often think of odd, mutant creatures - hippopotamuses mixed with lions, dogs mixed with cats, or squirrels mixed with porcupines. Indeed, the word hybrid invokes the imagination and encourages one to entertain these improbable combinations as miracles of science.

However, the phrase "hybrid animal" merely means a crossbreeding of two animals - a process which has occurred for centuries, both artificially and naturally.

The idea of hybrids dates back to the mythology of ancient times. Folk tales were full of animal-human hybrid stories like mermaids and minotaurs. The word hybrid comes from the Ancient Greek, meaning "son of outrageous conduct". But understanding hybrid animals lies both in nature and science.

Hybridization has been occurring in nature for thousands of years. Diaries of early hunters in the northwestern territories tell of shooting bears that were large and off-white with hairy paws, suggesting hybrids of kodiak and polar bears. Recent DNA studies confirmed this is possible.

`
      },
      {
        id: "3",
        title: "Global Warming",
        author: "Natalie",
        keywords: "Global Warming",
        text: `What is Global Warming?

Global warming is the gradual increase of the temperature of earth's atmosphere and oceans.

Over the past century the average temperatures have gone up by just over one degree. This may not seem like much, but many scientists agree that the earth's temperatures are starting to increase at a faster rate.

What Causes It?

Global warming occurs when greenhouse gases, such as carbon dioxide, nitrous oxide, and methane trap heat inside the earth's atmosphere.

Think about what happens when you open your car door after the windows have been rolled up on a hot day. Heat from the sun enters the car, but the frame of the car prevents it from escaping.

To a small extent, this is a representation of what happens during global warming. Burning fossil fuels like petroleum and deforestation both contribute to the problem.

What Effects does Climate Change Have on the Earth and its Inhabitants?

Global warming has already started to affect the earth in several ways.

Arctic glaciers have begun to melt, threatening indigenous life such as the polar bears. Melting glaciers also cause sea levels to rise. This could become a problem for low land areas like the ones in the South Sea Islands.

Ocean temperatures have begun to rise. This causes some of the algae to die which can affect the entire food chain.`
      }
    ];
    return {speeches};
  }
}
