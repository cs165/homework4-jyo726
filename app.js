// This class will represent the music visualizer as a whole, similar to the
// role that the `App` class played in HW3.
//
// See HW4 writeup for more hints and details.
class App {
  constructor() {
    // TODO(you): Implement the constructor and add fields as necessary.
	const menuElement = document.querySelector('#menu');
	this.menu = new MenuScreen(menuElement);
	
	const musicElement = document.querySelector('#music');
	this.music = new MusicScreen(musicElement);
	
	
  }
  // TODO(you): Add methods as necessary.
  
}
