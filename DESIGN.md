# Design choices
### Visualisation
#### World Map
#### Line chart
#### Bar chart

### Interactive
#### Selection choices with the world map
The user will be able to select what year the map will visualize the military expenditure. This will be implemented with a slider at the top of the worldmap.
#### Selction boxes with the line chart
The user can selected boxes what kind of expenditure data they want to visualize on the linechart. 

### Data sources

#### * [Happiness Index](https://ourworldindata.org/happiness-and-life-satisfaction) 
A csv file from ourworldindata.org, where the data is inconviently ordered with country, year0, country, year1. A python file wil be used to reorder this in a json file.

#### * [Military expenditure](http://databank.worldbank.org/data/reports.aspx?source=2&series=MS.MIL.XPND.ZS&country=)
A csv file for databank.worldbank.org, where the data is ordered in Country, year0, year1. A python file will rewrite the data in a JSON file. Probably the same as the JSON file containing the happinnes index per country.

#### * [Education expenditure](http://databank.worldbank.org/data/reports.aspx?source=2&series=SE.XPD.TOTL.GB.ZS&country=)
A csv file for databank.worldbank.org, where the data is ordered in Country, year0, year1. A python file will rewrite the data in a JSON file. Probably the same as the JSON file containing the happinnes index and military expenditure per country.


## Sketch

![](/Pictures/pic2.PNG)

