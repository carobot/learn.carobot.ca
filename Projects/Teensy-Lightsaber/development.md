---
title: Improvements and Further Development
sidebabr_position: 3
---
## Issues Encountered
#### Sound and Animation Simultaneity
Due to the sequential nature of the program, I had some issues having the power up and
down sound effects playing alongside the corresponding animations. This was initially solved
after implementing a state machine and assigning states to different functions i.e. fade in,
fade out, and transition. However, after the integration of the IMU to implement swing, clash,
and twirl functions, the synchronization between the sound and animation was lost.

#### Testing the Clash
Due to the physical state of my prototype, it was very difficult to test if the clash sound was
fully functional. As a result there wasn’t much testing done with regards to the clash function.

## Future Development
#### Additional sounds
Initial Power on sound after boot. Probably a spoken line from one of the films.

#### Introduction of random elements
The Teensy 4.x series include two Random Number Generator protocols natively. Each are
designed for encryption useages, but they could be applied to any number of other programs.
We envision using random numbers for one of these protocols into both the sound file
playback and the RGB colour definitions to add subtle error from the original values. This
could lead to an unstable or scintillating colour along the blade, and either more cacophanous
or analog sounds from the file payback. Both of these features is purely aesthetic, and
provides and interesting code challenge without changing the core functionality of the project.