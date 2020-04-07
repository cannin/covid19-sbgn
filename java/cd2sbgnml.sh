find covid_models/Curation -name "*.xml" -exec cp {} static \;

java -cp java/cd2sbgnml-0.4.4-app.jar fr.curie.cd2sbgnml.Cd2SbgnmlScript -i static/COVID19_PAMP_signaling.xml -o static/COVID19_PAMP_signaling.sbgn
java -cp java/cd2sbgnml-0.4.4-app.jar fr.curie.cd2sbgnml.Cd2SbgnmlScript -i static/Viral_entry_V01_3.xml -o static/Viral_entry_V01_3.sbgn
java -cp java/cd2sbgnml-0.4.4-app.jar fr.curie.cd2sbgnml.Cd2SbgnmlScript -i static/Orf10_Cul2_pathway.xml -o static/Orf10_Cul2_pathway.sbgn
