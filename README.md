# NASA Rocket to Destinations Unknown

A fun application allowing kids (and adults alike) to choose various dates, and inspect satellite imagery that NASA has provided from those dates. There is also an explanation to what you are witnessing, so you can actually learn about the cosmos.

**Link to project:** https://nasa-blast-off.netlify.app/

![Application Home](/img/nasaapphome.png)
![Application Video Example](/img/nasaapp1.png)
![Application Photo Example](/img/nasaapp2.png)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript

HTML, and CSS were used as the basic building blocks of this application, and JavaScript was the real contender that stepped in to take control of the fetch requests using the [NASA API](https://api.nasa.gov/)

## Optimizations:

- Making the project look better visually.[^1]
- Adding a 'cut off' for dates that don't register any data[^2]
- Adding Animations[^3]

## Lessons Learned:

This was a fun project to test out my Web API knowledge on. I enjoyed pulling data from NASA's website (how cool does that sound??) and using it in this application. I did struggle a bit with being able to switch the inputs from showing an Image to showing a Video file, but after finishing this project I can safely say I have adding more knowledge to my toolbelt about the functionality of Web APIs.

[^1]: Implementing Bootstrap, or Tailwind CSS to give the whole site a more professional feel to it.
[^2]: Naturally if someone were to venture back into the 80s (or farther) to find their birthday, that wouldn't work, as NASA only started this project in 1995.
[^3]: I'd enjoy being able to add some sort of animation, or something that would show you actually "blasting off" to this unknown destinations.
