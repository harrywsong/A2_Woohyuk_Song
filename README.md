# COMP3074 - Assignment 2

- **Name:** Woohyuk (Harry) Song
- **Student ID:** 101524575

## Description
This is a currency converter app. 
It allows users to convert money from one currency to another using real-time exchange rates. 
You can enter a base currency (like CAD), a destination currency (like USD), and an amount. 
The app will fetch the current exchange rate and calculate the converted amount.

## Technologies Used
- React Native
- Expo
- TypeScript
- FreeCurrencyAPI

## Installation

1. Clone the repository:
```bash
git clone https://github.com/harrywsong/A2_Woohyuk_Song.git
cd A2_Woohyuk_Song
```

2. Install dependencies:
```bash
npm install
```

3. Start the app:
```bash
npx expo start
```

4. Run on your preferred platform (for the purposes of our assignment, this would be Android)
   - Press `a` for Android emulator

## Usage

1. **Home Screen:**
   - Enter a 3-letter base currency code (e.g., CAD)
   - Enter a 3-letter destination currency code (e.g., USD)
   - Enter the amount you want to convert
   - Press "Convert" to see the results
   - View currency codes by tapping the blue link (brings you to an online browser page)

2. **About Screen:**
   - Tap the "About" tab to view author information and app description

## Input Requirements
- Currency codes must be 3 letters (e.g., CAD, USD, EUR)
- Amount must be a positive number
- Base and destination currencies must be different

## API
This app uses the [FreeCurrencyAPI](https://freecurrencyapi.com/) for real-time exchange rates.
