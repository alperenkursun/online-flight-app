# Proje Notları

#### Projedeki anasayfayı ve uçuşlarım sayfasını react ile responsive olarak kodladım. Api üzerinden anasayfadaki uçuşları çektim ve listeledim. Anasayfada nereden nereye gidiş dönüş tarihleri üzerinden filtrelenebiliyor. Anasayfadaki uçuşlar rezervasyon edilebiliyor ve uçuşlarımda listeleniyor. Eğer uçuş daha önceden eklenmişse alert ile aynı uçuşun eklenemeyeceği kullanıcıya bildiriliyor

#### Api kaynaklı veri gelmemesine karşın static olarak bir tane veri ekledim.

# Project Structure

## Libraries Used

### Main Library

- React
- React DOM

### For Page Routing

- React Router DOM

### For Design

- Chakra UI

### For Date and Time Handling

- moment.js

## State Management

- Context API

## Contexts

- FlightsContext
- MyFlightsContext

## Pages

- **Home**
- **MyFlights**

## General Components

- **Header**
- **Footer**

## Home Page Components

- **Main Content**
  - **Aside**
    - **ImageCard**
  - **Content**
    - **Filter**
    - **Search**
    - **Flights**
      - **FlightCard**

## MyFlights Page Components

- **Main Content**
  - **Top Rate**
  - **Sort**
  - **MyFlightCard**
