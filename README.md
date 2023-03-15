# README

# Theme Park Planner

![License](https://img.shields.io/badge/license-MIT-green)
![Build Status](https://img.shields.io/travis/user/repo/master)
![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-orange.svg)

The purpose of this project is to allow users to plan their perfect trip to a theme park of their choosing by creating an itinerary. 

## Table of Contents

1. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
2. [Usage](#usage)
   - [Basic Usage](#basic-usage)
   - [Advanced Usage](#advanced-usage)
   - [API Reference](#api-reference)
3. [Contributing](#contributing)
4. [License](#license)
5. [Acknowledgments](#acknowledgments)

## Getting Started

These instructions will guide you through setting up the project and running it on your local machine for development and testing purposes.

### Prerequisites
#### Ruby Gems
- ruby "2.7.4"
- gem "rails", "~> 7.0.4", ">= 7.0.4.2"
- gem "sqlite3", "~> 1.4"
- gem 'bcrypt', '~> 3.1', '>= 3.1.18'
- gem 'active_model_serializers', '~> 0.10.2'
- gem 'byebug', '~> 11.1', '>= 11.1.3'
- gem "puma", "~> 5.0"
- gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]

### NPM Packages
- "@testing-library/jest-dom": "^5.16.5",
- "@testing-library/react": "^13.4.0",
- "@testing-library/user-event": "^13.5.0",
- "react": "^18.2.0",
- "react-dom": "^18.2.0",
- "react-router-dom": "^6.8.1",
- "react-scripts": "5.0.1",
- "react-select": "^5.7.0",
- "uuidv4": "^6.2.13",
- "web-vitals": "^2.1.4"

### Installation

Step-by-step instructions on how to set up the project. Include code blocks for terminal commands and/or code examples.

1. Clone the repository:

```
git clone git@github.com:lbarsis/theme-park-planner.git
```

2. Navigate to the project directory:
```
cd theme-park-planner
```

3. Install dependencies:
```
npm install --prefix client
bundle install
```

## Usage

### Basic Usage
Basic users will have the ability to create personal itineraries from a pre-existing list of theme parks and associated rides. ride details to be included at a later date.

### Advanced Usage
Admin users have the ability to add theme parks and rides as well as provide admin priveleges to other users if desired.

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.