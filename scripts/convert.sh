# Download cd2sbgnml
#wget https://github.com/sbgn/cd2sbgnml/releases/download/0.4.5/cd2sbgnml-0.4.5-app.jar

# Download Model 
#git clone https://git-r3lab.uni.lu/covid/models.git covid_models

# Move CellDesigner files 
find covid_models/Curation -name "*.xml" -exec cp {} static \;
ls -1 static

# Debug 
ls -lR .

# Convert files
cd static 

for file in *.xml; do
    [ -f "$file" ] || break

    #tmp = $(basename "$file" | cut -d. -f1)

    echo "XML: $file"
    #echo "SBGN: $tmp"
    
    java -cp ../scripts/cd2sbgnml-0.4.5-app.jar fr.curie.cd2sbgnml.Cd2SbgnmlScript -i "$file" -o "$file.sbgn" > cd2sbgnml_log.txt  
    python ../sbgn2sif/main.py -s "$file.sbgn" -c > sbgn2sif_log.txt  
done

cd ..
ls -1R . 

#java -cp ../cd2sbgnml-0.4.5-app.jar fr.curie.cd2sbgnml.Cd2SbgnmlScript -i COVID19_PAMP_signaling.xml -o COVID19_PAMP_signaling.sbgn
#java -cp ../cd2sbgnml-0.4.5-app.jar fr.curie.cd2sbgnml.Cd2SbgnmlScript -i Viral_entry_V01_3.xml -o Viral_entry_V01_3.sbgn
#java -cp ../cd2sbgnml-0.4.5-app.jar fr.curie.cd2sbgnml.Cd2SbgnmlScript -i Orf10_Cul2_pathway.xml -o Orf10_Cul2_pathway.sbgn
