# chrome-speech-control-tabs

![Build Status](https://img.shields.io/badge/language-javascript-brightgreen.svg)
![Build Status](https://img.shields.io/badge/platform-chrome-yellow.svg)

Chrome extension to control chrome tabs by speech

## Description
`SpeechTabController` is a chrome extension to control tabs in a chrome browser with voice.
It recognizes user's voice with `Web Speech API`.

## Requirement
- chrome browser
- microphone

## Usage
Users can execute the following operations by voice after allowing the use of a microphone.

`Words`: operation

- `"Open email"`: open G-mail (in a new tab)

- `"Open map"`: open Google Maps

- `"Open calendar"`: open Google Calendar

- `"Open drive"`: open Google Drive

- `"Open translator"`: open Google Translator

- `"Close"`: close the current tab

## Installation
Download the zip file and unzip the file.

#### Chrome setting
1. Open the extensions page`(chrome://extensions/)`and turn on "developer mode".

2. Click "Load unpackaged extensions" and select the directory of SpeechTabController.
If it succeeds, the extension will be displayed in the list and icon is added to the upper right.


3. Right click the icon and select "Options". A new tab will be opened and **permit use of a microphone**.

4. This extension cannot be uses when other applications with microphones at the same time.

## Author
[khhk10](https://github.com/khhk10)
