# Download cd2sbgnml
wget https://github.com/sbgn/cd2sbgnml/releases/download/0.4.5/cd2sbgnml-0.4.5-app.jar

# Download Model 
git clone https://git-r3lab.uni.lu/covid/models.git covid_models

# Move CellDesigner files 
find covid_models/Curation -name "*.xml" -exec cp {} static \;
ls -1 static

# Debug 
ls -lR .

# Convert files
java -cp cd2sbgnml-0.4.5-app.jar fr.curie.cd2sbgnml.Cd2SbgnmlScript -i static/COVID19_PAMP_signaling.xml -o static/COVID19_PAMP_signaling.sbgn
java -cp cd2sbgnml-0.4.5-app.jar fr.curie.cd2sbgnml.Cd2SbgnmlScript -i static/Viral_entry_V01_3.xml -o static/Viral_entry_V01_3.sbgn
java -cp cd2sbgnml-0.4.5-app.jar fr.curie.cd2sbgnml.Cd2SbgnmlScript -i static/Orf10_Cul2_pathway.xml -o static/Orf10_Cul2_pathway.sbgn
